const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Thêm các cột mới vào bảng products
db.serialize(() => {
  console.log('Đang cập nhật schema...');
  
  // Thêm các cột chi tiết
  const alterQueries = [
    `ALTER TABLE products ADD COLUMN scientific_name TEXT`,
    `ALTER TABLE products ADD COLUMN breeding_model TEXT`,
    `ALTER TABLE products ADD COLUMN economic_value TEXT`,
    `ALTER TABLE products ADD COLUMN key_features TEXT`,
    `ALTER TABLE products ADD COLUMN food TEXT`,
    `ALTER TABLE products ADD COLUMN breeding_time TEXT`,
    `ALTER TABLE products ADD COLUMN difficulty TEXT`,
    `ALTER TABLE products ADD COLUMN suitable_for TEXT`,
    `ALTER TABLE products ADD COLUMN detailed_description TEXT`,
    `ALTER TABLE products ADD COLUMN images TEXT` // JSON array of image URLs
  ];

  let completed = 0;
  alterQueries.forEach((query, index) => {
    db.run(query, (err) => {
      if (err && !err.message.includes('duplicate column name')) {
        console.error(`Lỗi query ${index + 1}:`, err.message);
      } else {
        console.log(`✓ Đã thêm cột ${index + 1}/${alterQueries.length}`);
      }
      completed++;
      if (completed === alterQueries.length) {
        console.log('✓ Cập nhật schema thành công!');
        db.close();
      }
    });
  });
});
