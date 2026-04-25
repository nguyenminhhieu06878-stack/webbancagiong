const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Thông tin chi tiết cho từng sản phẩm
const productDetails = [
  {
    name: 'Cá Mè Hoa Giống',
    scientific_name: 'Cá Mè Hoa giống (còn gọi là cá mè trứng đầu to – Hypophthalmichthys nobilis)',
    breeding_model: 'Ao đất truyền thống, ao bán xi nhiên, mô hình nuôi ghép với cá trắm, cá chép',
    economic_value: 'Giá trị kinh tế cao khi thành phẩm',
    key_features: 'Tăng trưởng nhanh – ít bệnh – dễ nuôi ghép – giá bán thương phẩm tốt hơn mè trắng',
    food: 'Chủ yếu ăn sinh vật phù du, mùn bã hữu cơ, có thể bổ sung thêm cám viên hoặc bột cám',
    breeding_time: '6 – 8 tháng đạt trọng lượng 1.5 – 2.5kg/con',
    difficulty: 'Dễ – phù hợp nhiều mô hình quý mô nhỏ – vừa',
    suitable_for: 'Hộ gia đình truyền thống, hộ VAC, trại mỗ – trung muốn tăng sản lượng tổng thể trong mô hình ghép',
    detailed_description: 'Cá Mè Hoa giống là lựa chọn hàng đầu cho những ai muốn làm sạch ao, vừa tăng sản lượng mà không phải lo lắng về kỹ thuật hay đầu ra.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Cá Rô Phi Đơn Tính Giống',
    scientific_name: 'Oreochromis niloticus',
    breeding_model: 'Ao đất, bể xi măng, lồng bè',
    economic_value: 'Giá trị kinh tế cao, thị trường tiêu thụ ổn định',
    key_features: 'Tốc độ sinh trưởng nhanh, khả năng thích nghi cao, dễ chăm sóc',
    food: 'Ăn tạp, thức ăn công nghiệp, rau xanh, bã đậu',
    breeding_time: '5 – 6 tháng đạt 500-800g/con',
    difficulty: 'Rất dễ – phù hợp người mới bắt đầu',
    suitable_for: 'Hộ gia đình, trang trại nhỏ, nuôi thương phẩm',
    detailed_description: 'Cá Rô Phi đơn tính là giống cá được ưa chuộng nhất trong nuôi trồng thủy sản hiện nay.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Cá Tra giống',
    scientific_name: 'Pangasianodon hypophthalmus',
    breeding_model: 'Ao đất, lồng bè sông',
    economic_value: 'Giá trị xuất khẩu cao',
    key_features: 'Tăng trưởng nhanh, thịt trắng ngon, xuất khẩu tốt',
    food: 'Thức ăn viên công nghiệp, cá tạp',
    breeding_time: '6 – 8 tháng đạt 1-1.5kg/con',
    difficulty: 'Trung bình – cần kinh nghiệm',
    suitable_for: 'Trang trại thương phẩm, xuất khẩu',
    detailed_description: 'Cá Tra là loại cá nước ngọt có giá trị kinh tế cao, được xuất khẩu nhiều.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Cá Chình Trắng Giống',
    scientific_name: 'Monopterus albus',
    breeding_model: 'Bể xi măng, ao bùn',
    economic_value: 'Giá trị cao, thị trường ổn định',
    key_features: 'Giá bán cao, dễ tiêu thụ',
    food: 'Cá tạp, thịt động vật, thức ăn viên',
    breeding_time: '8 – 10 tháng đạt 200-300g/con',
    difficulty: 'Khó – cần kỹ thuật cao',
    suitable_for: 'Người có kinh nghiệm, trang trại chuyên nghiệp',
    detailed_description: 'Cá Chình Trắng là loại cá đặc sản có giá trị kinh tế rất cao.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Lươn giống',
    scientific_name: 'Monopterus albus',
    breeding_model: 'Bể xi măng không bùn, ao bùn',
    economic_value: 'Giá trị cao, nhu cầu lớn',
    key_features: 'Giá bán cao, dễ tiêu thụ, nuôi không cần nước chảy',
    food: 'Cá tạp, thịt động vật, giun, dế',
    breeding_time: '6 – 8 tháng đạt 100-150g/con',
    difficulty: 'Trung bình – cần kỹ thuật',
    suitable_for: 'Hộ gia đình, trang trại nhỏ',
    detailed_description: 'Lươn là loại thủy sản có giá trị dinh dưỡng cao, thị trường tiêu thụ ổn định.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Ếch Thái giống',
    scientific_name: 'Hoplobatrachus rugulosus',
    breeding_model: 'Bể xi măng, ao đất có lưới che',
    economic_value: 'Giá trị rất cao, xuất khẩu tốt',
    key_features: 'Tăng trưởng nhanh, thịt ngon, giá cao',
    food: 'Thức ăn viên, cá tạp, côn trùng',
    breeding_time: '3 – 4 tháng đạt 200-300g/con',
    difficulty: 'Trung bình – cần kỹ thuật',
    suitable_for: 'Trang trại chuyên nghiệp, xuất khẩu',
    detailed_description: 'Ếch Thái là loại ếch nhập khẩu có giá trị kinh tế rất cao.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  },
  {
    name: 'Cá Koi Việt',
    scientific_name: 'Cyprinus carpio koi',
    breeding_model: 'Hồ cảnh, ao trang trí',
    economic_value: 'Giá trị cao, thị trường cảnh quan',
    key_features: 'Màu sắc đẹp, dễ nuôi, tuổi thọ cao',
    food: 'Thức ăn viên chuyên dụng, rau xanh',
    breeding_time: 'Nuôi cảnh lâu dài',
    difficulty: 'Dễ – phù hợp người mới',
    suitable_for: 'Hồ cảnh gia đình, resort, khách sạn',
    detailed_description: 'Cá Koi Việt là giống cá cảnh được lai tạo tại Việt Nam, màu sắc đẹp, giá cả phải chăng.',
    images: JSON.stringify([
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'
    ])
  }
];

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
    console.log('Đang cập nhật thông tin chi tiết sản phẩm...');
    
    for (const product of productDetails) {
      await updateProduct(product);
      console.log(`✓ Đã cập nhật: ${product.name}`);
    }

    console.log(`\n✓ Đã cập nhật ${productDetails.length} sản phẩm thành công!`);
    db.close();
  } catch (error) {
    console.error('Lỗi khi cập nhật:', error);
    db.close();
  }
};

update();
