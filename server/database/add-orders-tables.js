const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Tạo bảng orders và order_items
db.serialize(() => {
  // Bảng orders
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending',
    shipping_address TEXT,
    phone TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (id)
  )`, (err) => {
    if (err) {
      console.error('❌ Lỗi tạo bảng orders:', err.message);
    } else {
      console.log('✅ Bảng orders đã được tạo thành công!');
    }
  });

  // Bảng order_items
  db.run(`CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
  )`, (err) => {
    if (err) {
      console.error('❌ Lỗi tạo bảng order_items:', err.message);
    } else {
      console.log('✅ Bảng order_items đã được tạo thành công!');
    }
  });
});

db.close((err) => {
  if (err) {
    console.error('❌ Lỗi đóng database:', err.message);
  } else {
    console.log('✅ Hoàn tất migration!');
  }
});
