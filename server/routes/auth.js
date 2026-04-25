const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../database/db');

const JWT_SECRET = process.env.JWT_SECRET || 'thuysan_tunganh_secret_key';

// POST - Đăng nhập admin
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }
  
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!user) {
      return res.status(401).json({ error: 'Tên đăng nhập không tồn tại' });
    }
    
    try {
      const isValidPassword = await bcrypt.compare(password, user.password);
      
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Mật khẩu không chính xác' });
      }
      
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      res.json({
        message: 'Đăng nhập thành công',
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
  });
});

// POST - Tạo tài khoản admin đầu tiên
router.post('/setup', async (req, res) => {
  const { username, password, email } = req.body;
  
  // Kiểm tra xem đã có admin nào chưa
  db.get('SELECT COUNT(*) as count FROM users', async (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (result.count > 0) {
      return res.status(400).json({ error: 'Hệ thống đã được thiết lập' });
    }
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      db.run(
        'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)',
        [username, hashedPassword, email, 'admin'],
        function(err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          
          res.json({ 
            message: 'Tạo tài khoản admin thành công!',
            userId: this.lastID 
          });
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'Lỗi mã hóa mật khẩu' });
    }
  });
});

// Middleware xác thực token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Không có token xác thực' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token không hợp lệ' });
    }
    req.user = user;
    next();
  });
};

// GET - Kiểm tra token
router.get('/verify', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Token hợp lệ',
    user: req.user 
  });
});

// POST - Đăng ký khách hàng
router.post('/register', async (req, res) => {
  const { fullName, email, phone, password } = req.body;
  
  // Validate input
  if (!fullName || !email || !phone || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 6 ký tự' });
  }
  
  // Kiểm tra email đã tồn tại chưa
  db.get('SELECT * FROM customers WHERE email = ?', [email], async (err, existingUser) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi server' });
    }
    
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }
    
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Insert new customer
      db.run(
        'INSERT INTO customers (full_name, email, phone, password) VALUES (?, ?, ?, ?)',
        [fullName, email, phone, hashedPassword],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Lỗi tạo tài khoản' });
          }
          
          res.status(201).json({ 
            message: 'Đăng ký thành công!',
            customerId: this.lastID 
          });
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'Lỗi mã hóa mật khẩu' });
    }
  });
});

// POST - Đăng nhập khách hàng
router.post('/customer/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }
  
  db.get('SELECT * FROM customers WHERE email = ?', [email], async (err, customer) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi server' });
    }
    
    if (!customer) {
      return res.status(401).json({ error: 'Email không tồn tại' });
    }
    
    try {
      const isValidPassword = await bcrypt.compare(password, customer.password);
      
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Mật khẩu không chính xác' });
      }
      
      const token = jwt.sign(
        { id: customer.id, email: customer.email, role: 'customer' },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      res.json({
        message: 'Đăng nhập thành công',
        token,
        user: {
          id: customer.id,
          fullName: customer.full_name,
          email: customer.email,
          phone: customer.phone,
          role: 'customer'
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
  });
});

module.exports = router;