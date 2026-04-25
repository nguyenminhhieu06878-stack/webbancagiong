const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Cập nhật giá cá nuôi cảnh cao hơn
const priceUpdates = [
  { name: 'Cá Koi Việt', price: 50000 },
  { name: 'Cá Koi 15-20 con/kg', price: 150000 },
  { name: 'Cá Chép Nhật', price: 80000 },
  { name: 'Cá Koi 1-5 con/kg', price: 500000 },
  { name: 'Cá Koi 6-10 con/kg', price: 250000 }
];

const updatePrices = async () => {
  console.log('Đang cập nhật giá cá nuôi cảnh...');
  
  for (const item of priceUpdates) {
    await new Promise((resolve, reject) => {
      db.run(
        `UPDATE products SET price = ? WHERE name = ? AND category_id = 5`,
        [item.price, item.name],
        function(err) {
          if (err) {
            console.error(`Lỗi cập nhật ${item.name}:`, err.message);
            reject(err);
          } else {
            console.log(`✓ Đã cập nhật: ${item.name} → ${item.price.toLocaleString('vi-VN')}đ/con`);
            resolve();
          }
        }
      );
    });
  }

  console.log('\n✓ Hoàn tất cập nhật giá cá nuôi cảnh!');
  db.close();
};

updatePrices().catch(console.error);
