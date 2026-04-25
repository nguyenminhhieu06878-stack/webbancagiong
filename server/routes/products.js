const express = require('express');
const router = express.Router();
const { db } = require('../database/db');
const multer = require('multer');
const path = require('path');

// Cấu hình multer cho upload hình ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Chỉ chấp nhận file hình ảnh!'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// GET - Lấy tất cả sản phẩm
router.get('/', (req, res) => {
  const { category, search } = req.query;
  
  let query = `
    SELECT p.*, c.name as category_name 
    FROM products p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.is_available = 1
  `;
  
  const params = [];
  
  if (category && category !== 'all') {
    query += ` AND c.name = ?`;
    params.push(category);
  }
  
  if (search) {
    query += ` AND (p.name LIKE ? OR p.description LIKE ?)`;
    params.push(`%${search}%`, `%${search}%`);
  }
  
  query += ` ORDER BY p.created_at DESC`;
  
  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// GET - Lấy sản phẩm theo ID
router.get('/:id', (req, res) => {
  const query = `
    SELECT p.*, c.name as category_name 
    FROM products p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.id = ?
  `;
  
  db.get(query, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
    }
    res.json(row);
  });
});

// POST - Thêm sản phẩm mới
router.post('/', upload.single('image'), (req, res) => {
  const { name, category_id, price, size, description, stock_quantity } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  
  const query = `
    INSERT INTO products (name, category_id, price, size, description, image_url, stock_quantity)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.run(query, [name, category_id, price, size, description, image_url, stock_quantity || 0], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ 
      id: this.lastID, 
      message: 'Thêm sản phẩm thành công!',
      product: {
        id: this.lastID,
        name,
        category_id,
        price,
        size,
        description,
        image_url,
        stock_quantity
      }
    });
  });
});

// PUT - Cập nhật sản phẩm
router.put('/:id', upload.single('image'), (req, res) => {
  const { name, category_id, price, size, description, stock_quantity, is_available } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : req.body.current_image;
  
  const query = `
    UPDATE products 
    SET name = ?, category_id = ?, price = ?, size = ?, description = ?, 
        image_url = ?, stock_quantity = ?, is_available = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  
  db.run(query, [name, category_id, price, size, description, image_url, stock_quantity, is_available, req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
    }
    res.json({ message: 'Cập nhật sản phẩm thành công!' });
  });
});

// DELETE - Xóa sản phẩm
router.delete('/:id', (req, res) => {
  db.run('DELETE FROM products WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
    }
    res.json({ message: 'Xóa sản phẩm thành công!' });
  });
});

// GET - Lấy danh sách categories
router.get('/categories/all', (req, res) => {
  db.all('SELECT * FROM categories ORDER BY name', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;