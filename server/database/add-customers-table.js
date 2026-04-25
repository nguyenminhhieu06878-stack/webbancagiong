const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Tạo bảng customers
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`, (err) => {
    if (err) {
      console.error('❌ Lỗi tạo bảng customers:', err.message);
    } else {
      console.log('✅ Bảng customers đã được tạo thành công!');
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
