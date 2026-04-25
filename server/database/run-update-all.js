const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const allProductDetails = require('./all-products-data');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

const updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE products SET 
        scientific_name = ?,
        breeding_model = ?,
        economic_value = ?,
        key_features = ?,
        food = ?,
        breeding_time = ?,
        difficulty = ?,
        suitable_for = ?,
        detailed_description = ?,
        images = ?
      WHERE name = ?`,
      [
        product.scientific_name,
        product.breeding_model,
        product.economic_value,
        product.key_features,
        product.food,
        product.breeding_time,
        product.difficulty,
        product.suitable_for,
        product.detailed_description,
        product.images,
        product.name
      ],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

const update = async () => {
  try {
    console.log(`Đang cập nhật ${allProductDetails.length} sản phẩm...`);
    
    let count = 0;
    for (const product of allProductDetails) {
      await updateProduct(product);
      count++;
      console.log(`✓ [${count}/${allProductDetails.length}] ${product.name}`);
    }

    console.log(`\n✓ Đã cập nhật thành công ${count} sản phẩm!`);
    db.close();
  } catch (error) {
    console.error('Lỗi khi cập nhật:', error);
    db.close();
  }
};

update();
