const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Xóa dữ liệu cũ
db.run('DELETE FROM products');
db.run('DELETE FROM categories');

// Thêm categories
const categories = [
  { id: 1, name: 'Cá Dễ Nuôi', description: 'Các loại cá dễ nuôi, phù hợp cho người mới bắt đầu' },
  { id: 2, name: 'Cá Nuôi Thương Phẩm', description: 'Các loại cá nuôi thương phẩm có giá trị kinh tế cao' },
  { id: 3, name: 'Cá Nuôi Đặc Sản', description: 'Các loại cá đặc sản có giá trị cao' },
  { id: 4, name: 'Cá Nuôi Kết Hợp', description: 'Các loại cá phù hợp nuôi kết hợp' },
  { id: 5, name: 'Cá Nuôi Cảnh', description: 'Các loại cá cảnh trang trí' }
];

const insertCategory = (category) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO categories (id, name, description) VALUES (?, ?, ?)',
      [category.id, category.name, category.description],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

// Danh sách sản phẩm đầy đủ
const products = [
  // Cá Dễ Nuôi (category_id: 1)
  { name: 'Cá Mè Hoa Giống', category_id: 1, price: 500, size: '3-5cm', description: 'Cá Mè Hoa giống (còn gọi là cá mè trứng đầu to – Hypophthalmichthys nobilis)', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 10000 },
  { name: 'Cá Rô Phi Lướng Tính Giống', category_id: 1, price: 400, size: '3-5cm', description: 'Cá Rô Phi Lướng Tính giống chất lượng cao', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 15000 },
  { name: 'Cá Rô Phi Bảo Lộc Giống', category_id: 1, price: 350, size: '3-5cm', description: 'Cá Rô Phi Bảo Lộc giống chất lượng', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 12000 },
  { name: 'Cá Mè Trắng Giống', category_id: 1, price: 450, size: '3-5cm', description: 'Cá Mè Trắng giống dễ nuôi', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 8000 },
  { name: 'Cá Diếc Giống', category_id: 1, price: 300, size: '2-4cm', description: 'Cá Diếc giống chất lượng cao', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 10000 },
  { name: 'Cá Rô Đồng Lai Giống', category_id: 1, price: 550, size: '3-5cm', description: 'Cá Rô Đồng Lai giống lai tạo', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 7000 },
  { name: 'Cá Diêu Hồng Giống', category_id: 1, price: 600, size: '4-6cm', description: 'Cá Diêu Hồng giống chất lượng', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 6000 },
  { name: 'Cá Chép Giống', category_id: 1, price: 250, size: '3-5cm', description: 'Cá Chép giống truyền thống', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 20000 },
  { name: 'Cá Chình Trắng Giống', category_id: 1, price: 800, size: '5-7cm', description: 'Cá Chình Trắng giống cao cấp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 5000 },
  { name: 'Cá Rô Phi Đơn Tính Giống', category_id: 1, price: 380, size: '3-5cm', description: 'Cá Rô Phi Đơn Tính giống năng suất cao', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 18000 },
  { name: 'Cá Trê Lai Giống', category_id: 1, price: 700, size: '4-6cm', description: 'Cá Trê Lai giống phát triển nhanh', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 9000 },

  // Cá Nuôi Thương Phẩm (category_id: 2)
  { name: 'Cá Nheo Lai giống', category_id: 2, price: 650, size: '4-6cm', description: 'Cá Nheo Lai giống thương phẩm', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 8000 },
  { name: 'Cá Tầm giống', category_id: 2, price: 1500, size: '5-8cm', description: 'Cá Tầm giống cao cấp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 3000 },
  { name: 'Cá Chình Hoa giống', category_id: 2, price: 900, size: '5-7cm', description: 'Cá Chình Hoa giống chất lượng', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 4000 },
  { name: 'Cá Lóc Bông giống', category_id: 2, price: 750, size: '4-6cm', description: 'Cá Lóc Bông giống thương phẩm', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 6000 },
  { name: 'Cá Basa giống', category_id: 2, price: 600, size: '4-6cm', description: 'Cá Basa giống xuất khẩu', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 10000 },
  { name: 'Cá Tra Dầu giống', category_id: 2, price: 550, size: '4-6cm', description: 'Cá Tra Dầu giống chất lượng', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 8000 },
  { name: 'Lươn giống', category_id: 2, price: 1200, size: '20-30cm', description: 'Lươn giống nuôi thương phẩm', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 5000 },
  { name: 'Ếch Thái giống', category_id: 2, price: 2000, size: '50-100g', description: 'Ếch Thái giống nhập khẩu', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 2000 },
  { name: 'Cá Tra giống', category_id: 2, price: 500, size: '4-6cm', description: 'Cá Tra giống F1', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 12000 },

  // Cá Nuôi Đặc Sản (category_id: 3)
  { name: 'Cá Chạch Lấu giống', category_id: 3, price: 1800, size: '5-7cm', description: 'Cá Chạch Lấu giống đặc sản', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 2000 },
  { name: 'Cá Vồ Đém giống', category_id: 3, price: 2500, size: '6-8cm', description: 'Cá Vồ Đém giống quý hiếm', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 1000 },
  { name: 'Cá Trầm Đen giống', category_id: 3, price: 2200, size: '5-7cm', description: 'Cá Trầm Đen giống đặc sản', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 1500 },
  { name: 'Cá Lăng Đuôi Đỏ giống', category_id: 3, price: 3000, size: '6-8cm', description: 'Cá Lăng Đuôi Đỏ giống cao cấp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 800 },
  { name: 'Cá Bống Tượng giống', category_id: 3, price: 2800, size: '5-7cm', description: 'Cá Bống Tượng giống đặc sản', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 1000 },
  { name: 'Cá Thát Lát Cườm giống', category_id: 3, price: 3500, size: '6-9cm', description: 'Cá Thát Lát Cườm giống quý', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 500 },

  // Cá Nuôi Kết Hợp (category_id: 4)
  { name: 'Cá Hô giống', category_id: 4, price: 4000, size: '7-10cm', description: 'Cá Hô giống cao cấp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 500 },
  { name: 'Cá Tai Tượng giống', category_id: 4, price: 2000, size: '5-7cm', description: 'Cá Tai Tượng giống kết hợp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 2000 },
  { name: 'Cá Chép Đỏ giống', category_id: 4, price: 300, size: '3-5cm', description: 'Cá Chép Đỏ giống phong thủy', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 15000 },
  { name: 'Cá Chim Trắng Giống', category_id: 4, price: 450, size: '3-5cm', description: 'Cá Chim Trắng giống nuôi kết hợp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 8000 },
  { name: 'Cá Trắm Cỏ giống', category_id: 4, price: 350, size: '3-5cm', description: 'Cá Trắm Cỏ giống ăn cỏ', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 10000 },

  // Cá Nuôi Cảnh (category_id: 5)
  { name: 'Cá Koi Việt', category_id: 5, price: 5000, size: '10-15cm', description: 'Cá Koi Việt Nam chất lượng', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 1000 },
  { name: 'Cá Koi 15-20 con/kg', category_id: 5, price: 8000, size: '15-20cm', description: 'Cá Koi size lớn', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 500 },
  { name: 'Cá Chép Nhật', category_id: 5, price: 6000, size: '12-18cm', description: 'Cá Chép Nhật cao cấp', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 800 },
  { name: 'Cá Koi 1-5 con/kg', category_id: 5, price: 15000, size: '25-35cm', description: 'Cá Koi size jumbo', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 200 },
  { name: 'Cá Koi 6-10 con/kg', category_id: 5, price: 10000, size: '20-25cm', description: 'Cá Koi size trung', image_url: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', stock_quantity: 400 }
];

const insertProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO products (name, category_id, price, size, description, image_url, stock_quantity) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [product.name, product.category_id, product.price, product.size, product.description, product.image_url, product.stock_quantity],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

// Chạy seed
const seed = async () => {
  try {
    console.log('Đang xóa dữ liệu cũ...');
    
    console.log('Đang thêm categories...');
    for (const category of categories) {
      await insertCategory(category);
    }
    console.log(`✓ Đã thêm ${categories.length} categories`);

    console.log('Đang thêm products...');
    for (const product of products) {
      await insertProduct(product);
    }
    console.log(`✓ Đã thêm ${products.length} products`);

    console.log('✓ Seed database thành công!');
    db.close();
  } catch (error) {
    console.error('Lỗi khi seed database:', error);
    db.close();
  }
};

seed();
