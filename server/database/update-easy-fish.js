const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Dữ liệu chi tiết cho các loại cá dễ nuôi (category_id: 1)
const easyFishData = [
  {
    name: 'Cá Mè Hoa Giống',
    scientific_name: 'Hypophthalmichthys nobilis',
    breeding_model: 'Ao đất, hồ lớn, nuôi ghép',
    economic_value: 'Trung bình – Cao (thịt ngon, thị trường rộng)',
    key_features: 'Lọc tảo tự nhiên, tăng trưởng nhanh, ít bệnh',
    food: 'Tảo, phù du sinh vật, thức ăn công nghiệp',
    breeding_time: '8 – 12 tháng đạt 1 – 2 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Người mới bắt đầu, nông hộ, trang trại vừa và nhỏ',
    detailed_description: 'Cá Mè Hoa (Hypophthalmichthys nobilis) là loài cá nước ngọt phổ biến, dễ nuôi và có giá trị kinh tế tốt. Thích hợp nuôi ghép với các loài cá khác để tận dụng nguồn thức ăn tự nhiên trong ao.'
  },
  {
    name: 'Cá Rô Phi Lướng Tính Giống',
    scientific_name: 'Oreochromis niloticus (lưỡng tính)',
    breeding_model: 'Ao đất, bể xi măng, lồng bè',
    economic_value: 'Trung bình – Cao (xuất khẩu tốt)',
    key_features: 'Tăng trưởng đồng đều, kháng bệnh tốt, thịt trắng ngon',
    food: 'Thức ăn công nghiệp, cám gạo, bã đậu nành',
    breeding_time: '5 – 7 tháng đạt 400 – 600g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nông hộ, trang trại, người mới nuôi cá',
    detailed_description: 'Cá Rô Phi Lưỡng Tính là giống cá được lai tạo để tăng tỷ lệ cá đực, giúp kiểm soát sinh sản và tăng năng suất. Phù hợp với nhiều mô hình nuôi khác nhau.'
  },
  {
    name: 'Cá Rô Phi Bảo Lộc Giống',
    scientific_name: 'Oreochromis niloticus (dòng Bảo Lộc)',
    breeding_model: 'Ao đất, hồ, lồng bè',
    economic_value: 'Trung bình (tiêu thụ nội địa tốt)',
    key_features: 'Thích nghi tốt với khí hậu miền Nam, tăng trưởng ổn định',
    food: 'Thức ăn công nghiệp, rau xanh, bã đậu',
    breeding_time: '6 – 8 tháng đạt 400 – 700g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nông hộ miền Nam, người mới bắt đầu',
    detailed_description: 'Cá Rô Phi dòng Bảo Lộc được chọn lọc và thuần hóa phù hợp với điều kiện khí hậu miền Nam Việt Nam, cho năng suất ổn định và dễ chăm sóc.'
  },
  {
    name: 'Cá Mè Trắng Giống',
    scientific_name: 'Hypophthalmichthys molitrix',
    breeding_model: 'Ao đất, nuôi ghép với cá khác',
    economic_value: 'Trung bình (giá thành thấp, dễ tiêu thụ)',
    key_features: 'Lọc nước tốt, ăn tảo và phù du, ít tốn chi phí thức ăn',
    food: 'Tảo, phù du thực vật, cám gạo',
    breeding_time: '8 – 10 tháng đạt 0.8 – 1.5 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Người mới nuôi, mô hình nuôi ghép, cải thiện chất lượng nước ao',
    detailed_description: 'Cá Mè Trắng là loài cá lọc nước hiệu quả, thường được nuôi ghép để cải thiện chất lượng nước ao và tận dụng nguồn thức ăn tự nhiên. Chi phí nuôi thấp, dễ chăm sóc.'
  },
  {
    name: 'Cá Diếc Giống',
    scientific_name: 'Carassius auratus gibelio',
    breeding_model: 'Ao đất, ruộng lúa, hồ nhỏ',
    economic_value: 'Trung bình (thịt ngon, được ưa chuộng)',
    key_features: 'Chịu đựng môi trường khắc nghiệt, ít bệnh, dễ nuôi',
    food: 'Thức ăn công nghiệp, cám, rau xanh, giun đất',
    breeding_time: '6 – 9 tháng đạt 200 – 400g/con',
    difficulty: 'Rất dễ ⭐',
    suitable_for: 'Nông hộ nhỏ, nuôi kết hợp ruộng lúa, người mới bắt đầu',
    detailed_description: 'Cá Diếc là loài cá nước ngọt rất dễ nuôi, có khả năng chịu đựng môi trường nước kém chất lượng. Thịt ngon, được nhiều người tiêu dùng ưa chuộng.'
  },
  {
    name: 'Cá Rô Đồng Lai Giống',
    scientific_name: 'Anabas testudineus (lai)',
    breeding_model: 'Ao đất, bể xi măng, ruộng lúa',
    economic_value: 'Cao (giá bán tốt, thịt thơm ngon)',
    key_features: 'Tăng trưởng nhanh hơn cá rô tự nhiên, kháng bệnh tốt',
    food: 'Thức ăn công nghiệp, cá tạp, giun, côn trùng',
    breeding_time: '4 – 6 tháng đạt 150 – 300g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nông hộ, trang trại nhỏ, nuôi kết hợp lúa – cá',
    detailed_description: 'Cá Rô Đồng Lai là giống cá được lai tạo từ cá rô đồng tự nhiên, cho tốc độ tăng trưởng nhanh hơn và năng suất cao hơn. Thịt thơm ngon, được thị trường ưa chuộng.'
  },
  {
    name: 'Cá Diêu Hồng Giống',
    scientific_name: 'Oreochromis sp. (dòng đỏ)',
    breeding_model: 'Ao đất, lồng bè, bể xi măng',
    economic_value: 'Cao (xuất khẩu, nhà hàng, siêu thị)',
    key_features: 'Màu sắc đẹp, thịt trắng ngon, tăng trưởng nhanh',
    food: 'Thức ăn công nghiệp, cám gạo, bã đậu nành',
    breeding_time: '5 – 7 tháng đạt 500 – 800g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại, nông hộ, nuôi lồng bè trên sông',
    detailed_description: 'Cá Diêu Hồng (cá rô phi đỏ) là loài cá có giá trị kinh tế cao, được xuất khẩu nhiều. Màu sắc đẹp, thịt trắng ngon, dễ nuôi và cho năng suất cao.'
  },
  {
    name: 'Cá Chép Giống',
    scientific_name: 'Cyprinus carpio',
    breeding_model: 'Ao đất, hồ, ruộng lúa, lồng bè',
    economic_value: 'Trung bình – Cao (tiêu thụ rộng rãi)',
    key_features: 'Ăn tạp, thích nghi tốt, ít bệnh, dễ chăm sóc',
    food: 'Thức ăn công nghiệp, cám, rau, giun, ốc',
    breeding_time: '6 – 10 tháng đạt 0.5 – 1.5 kg/con',
    difficulty: 'Rất dễ ⭐',
    suitable_for: 'Tất cả đối tượng, đặc biệt người mới bắt đầu',
    detailed_description: 'Cá Chép là loài cá truyền thống, dễ nuôi nhất trong các loài cá nước ngọt. Ăn tạp, thích nghi với nhiều điều kiện môi trường, phù hợp với mọi quy mô nuôi.'
  },
  {
    name: 'Cá Chình Trắng Giống',
    scientific_name: 'Anguilla bicolor',
    breeding_model: 'Bể xi măng, ao đất có lưới che',
    economic_value: 'Rất cao (xuất khẩu Nhật Bản, Hàn Quốc)',
    key_features: 'Giá trị xuất khẩu cao, thịt béo ngon, ít xương',
    food: 'Cá tạp, tôm, giun, thức ăn công nghiệp dạng ẩm',
    breeding_time: '18 – 24 tháng đạt 300 – 500g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại có kinh nghiệm, đầu tư dài hạn',
    detailed_description: 'Cá Chình Trắng là loài cá có giá trị kinh tế rất cao, được xuất khẩu sang các thị trường Đông Á. Tuy thời gian nuôi dài hơn nhưng lợi nhuận rất tốt.'
  },
  {
    name: 'Cá Rô Phi Đơn Tính Giống',
    scientific_name: 'Oreochromis niloticus (toàn đực)',
    breeding_model: 'Ao đất, lồng bè, bể tuần hoàn',
    economic_value: 'Cao (năng suất vượt trội, xuất khẩu)',
    key_features: 'Toàn đực 95%+, tăng trưởng nhanh, không sinh sản trong ao',
    food: 'Thức ăn công nghiệp 28 – 32% đạm',
    breeding_time: '5 – 6 tháng đạt 500 – 700g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại thâm canh, xuất khẩu, nông hộ chuyên nghiệp',
    detailed_description: 'Cá Rô Phi Đơn Tính (toàn đực) cho năng suất vượt trội so với cá rô phi thường do không tốn năng lượng sinh sản. Tỷ lệ cá đực đạt 95% trở lên, tăng trưởng đồng đều.'
  },
  {
    name: 'Cá Trê Lai Giống',
    scientific_name: 'Clarias macrocephalus × C. gariepinus',
    breeding_model: 'Ao đất, bể xi măng, bể nhựa',
    economic_value: 'Trung bình – Cao (tiêu thụ nội địa tốt)',
    key_features: 'Tăng trưởng rất nhanh, chịu mật độ cao, ít bệnh',
    food: 'Thức ăn công nghiệp, cá tạp, phụ phẩm nông nghiệp',
    breeding_time: '3 – 5 tháng đạt 300 – 600g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nông hộ, trang trại nhỏ, người mới bắt đầu',
    detailed_description: 'Cá Trê Lai là giống lai giữa cá trê vàng và cá trê phi, cho tốc độ tăng trưởng rất nhanh. Dễ nuôi, chịu được mật độ cao và điều kiện môi trường khắc nghiệt.'
  }
];

const updateFish = async () => {
  console.log('Đang cập nhật dữ liệu cá dễ nuôi...');
  
  for (const fish of easyFishData) {
    await new Promise((resolve, reject) => {
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
          detailed_description = ?
        WHERE name = ? AND category_id = 1`,
        [
          fish.scientific_name,
          fish.breeding_model,
          fish.economic_value,
          fish.key_features,
          fish.food,
          fish.breeding_time,
          fish.difficulty,
          fish.suitable_for,
          fish.detailed_description,
          fish.name
        ],
        function(err) {
          if (err) {
            console.error(`Lỗi cập nhật ${fish.name}:`, err.message);
            reject(err);
          } else {
            console.log(`✓ Đã cập nhật: ${fish.name} (${this.changes} dòng)`);
            resolve();
          }
        }
      );
    });
  }

  console.log('\n✓ Hoàn tất cập nhật dữ liệu cá dễ nuôi!');
  db.close();
};

updateFish().catch(console.error);
