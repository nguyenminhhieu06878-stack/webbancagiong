const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Dữ liệu chi tiết cho cá nuôi kết hợp (category_id: 4)
const combinedFishData = [
  {
    name: 'Cá Hô giống',
    scientific_name: 'Catlocarpio siamensis',
    breeding_model: 'Ao đất lớn, lồng bè trên sông',
    economic_value: 'Rất cao (cá quý hiếm, giá rất cao)',
    key_features: 'Kích thước khổng lồ, thịt ngon, quý hiếm, tăng trưởng chậm',
    food: 'Thức ăn viên cao cấp, rau, trái cây',
    breeding_time: '36 – 60 tháng đạt 10 – 30 kg/con',
    difficulty: 'Rất khó ⭐⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, đầu tư dài hạn, ao rộng',
    detailed_description: 'Cá Hô là loài cá nước ngọt lớn nhất Đông Nam Á, quý hiếm, giá trị rất cao. Nuôi rất khó, thời gian dài nhưng lợi nhuận khổng lồ.'
  },
  {
    name: 'Cá Tai Tượng giống',
    scientific_name: 'Osphronemus goramy',
    breeding_model: 'Ao đất, bể xi măng, nuôi kết hợp',
    economic_value: 'Cao (thịt ngon, thị trường ổn định)',
    key_features: 'Thịt trắng ngon, ăn tạp, dễ nuôi kết hợp',
    food: 'Rau, cỏ, thức ăn công nghiệp, phụ phẩm',
    breeding_time: '12 – 18 tháng đạt 1 – 2 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nông hộ, trang trại, nuôi kết hợp với cá khác',
    detailed_description: 'Cá Tai Tượng là loài cá ăn tạp, dễ nuôi, thích hợp nuôi kết hợp với các loài cá khác. Thịt trắng ngon, giá bán ổn định.'
  },
  {
    name: 'Cá Chép Đỏ giống',
    scientific_name: 'Cyprinus carpio (dòng đỏ)',
    breeding_model: 'Ao đất, hồ cảnh quan, nuôi kết hợp',
    economic_value: 'Trung bình – Cao (cảnh quan và thực phẩm)',
    key_features: 'Màu sắc đẹp, phong thủy, ăn tạp, dễ nuôi',
    food: 'Thức ăn công nghiệp, cám, rau, giun',
    breeding_time: '8 – 12 tháng đạt 0.5 – 1 kg/con',
    difficulty: 'Rất dễ ⭐',
    suitable_for: 'Hồ cảnh quan, nuôi phong thủy, nông hộ',
    detailed_description: 'Cá Chép Đỏ vừa có giá trị cảnh quan, phong thủy, vừa có thể nuôi thương phẩm. Dễ nuôi, thích nghi tốt, màu sắc đẹp mắt.'
  },
  {
    name: 'Cá Chim Trắng Giống',
    scientific_name: 'Chitala ornata',
    breeding_model: 'Ao đất, bể xi măng, nuôi kết hợp',
    economic_value: 'Cao (thịt ngon, giá trị cảnh)',
    key_features: 'Thịt trắng ngon, hình dáng đẹp, dễ nuôi',
    food: 'Cá tạp, tôm, thức ăn viên',
    breeding_time: '10 – 14 tháng đạt 0.8 – 1.5 kg/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại, nông hộ, nuôi kết hợp',
    detailed_description: 'Cá Chim Trắng có thịt trắng ngon, hình dáng đẹp, vừa có giá trị thương phẩm vừa có thể nuôi cảnh. Phù hợp nuôi kết hợp.'
  },
  {
    name: 'Cá Trắm Cỏ giống',
    scientific_name: 'Ctenopharyngodon idella',
    breeding_model: 'Ao đất, hồ, nuôi kết hợp',
    economic_value: 'Trung bình (lọc cỏ, thịt ngon)',
    key_features: 'Ăn cỏ, lọc ao, giảm chi phí thức ăn, thịt ngon',
    food: 'Cỏ, rau xanh, thức ăn công nghiệp',
    breeding_time: '10 – 14 tháng đạt 1 – 2 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Nuôi kết hợp, ao có cỏ, nông hộ',
    detailed_description: 'Cá Trắm Cỏ là loài cá ăn cỏ, giúp làm sạch ao, giảm chi phí thức ăn. Thích hợp nuôi kết hợp với các loài cá khác, thịt ngon.'
  }
];

// Dữ liệu chi tiết cho cá nuôi cảnh (category_id: 5)
const ornamentalFishData = [
  {
    name: 'Cá Koi Việt',
    scientific_name: 'Cyprinus carpio koi (dòng Việt)',
    breeding_model: 'Hồ cảnh quan, ao đất',
    economic_value: 'Cao (cảnh quan, phong thủy)',
    key_features: 'Màu sắc đẹp, giá phải chăng, dễ nuôi',
    food: 'Thức ăn viên chuyên dụng cho Koi',
    breeding_time: '12 – 24 tháng đạt 0.5 – 1.5 kg/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Hồ cảnh quan, biệt thự, công viên',
    detailed_description: 'Cá Koi Việt là dòng Koi được lai tạo và nuôi tại Việt Nam, giá phải chăng hơn Koi Nhật, màu sắc đẹp, phù hợp hồ cảnh quan.'
  },
  {
    name: 'Cá Koi 15-20 con/kg',
    scientific_name: 'Cyprinus carpio koi',
    breeding_model: 'Hồ cảnh quan chuyên nghiệp',
    economic_value: 'Rất cao (cảnh quan cao cấp)',
    key_features: 'Size trung, màu sắc đẹp, phong thủy',
    food: 'Thức ăn viên cao cấp cho Koi',
    breeding_time: '18 – 30 tháng',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Hồ cảnh quan cao cấp, biệt thự',
    detailed_description: 'Cá Koi size 15-20 con/kg là size trung bình, phù hợp cho hồ cảnh quan, màu sắc đẹp, giá trị phong thủy cao.'
  },
  {
    name: 'Cá Chép Nhật',
    scientific_name: 'Cyprinus carpio (dòng Nhật)',
    breeding_model: 'Hồ cảnh quan, ao đất',
    economic_value: 'Cao (cảnh quan, phong thủy)',
    key_features: 'Màu sắc đẹp, hình dáng chuẩn, chất lượng cao',
    food: 'Thức ăn viên chuyên dụng',
    breeding_time: '12 – 24 tháng',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Hồ cảnh quan, sân vườn, công viên',
    detailed_description: 'Cá Chép Nhật là dòng cá cảnh chất lượng cao, màu sắc đẹp, hình dáng chuẩn, được ưa chuộng trong trang trí cảnh quan.'
  },
  {
    name: 'Cá Koi 1-5 con/kg',
    scientific_name: 'Cyprinus carpio koi',
    breeding_model: 'Hồ cảnh quan lớn, chuyên nghiệp',
    economic_value: 'Rất cao (cảnh quan siêu cao cấp)',
    key_features: 'Size jumbo, màu sắc chuẩn, giá trị rất cao',
    food: 'Thức ăn viên cao cấp nhập khẩu',
    breeding_time: '36 – 60 tháng',
    difficulty: 'Khó ⭐⭐⭐',
    suitable_for: 'Hồ cảnh quan siêu cao cấp, resort, khách sạn',
    detailed_description: 'Cá Koi size jumbo 1-5 con/kg là size lớn nhất, giá trị rất cao, phù hợp cho hồ cảnh quan siêu cao cấp, resort, khách sạn 5 sao.'
  },
  {
    name: 'Cá Koi 6-10 con/kg',
    scientific_name: 'Cyprinus carpio koi',
    breeding_model: 'Hồ cảnh quan cao cấp',
    economic_value: 'Rất cao (cảnh quan cao cấp)',
    key_features: 'Size lớn, màu sắc đẹp, phong thủy tốt',
    food: 'Thức ăn viên cao cấp cho Koi',
    breeding_time: '24 – 36 tháng',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Hồ cảnh quan cao cấp, biệt thự, resort',
    detailed_description: 'Cá Koi size 6-10 con/kg là size lớn, màu sắc đẹp, giá trị cao, phù hợp cho hồ cảnh quan cao cấp, biệt thự, resort.'
  }
];

const updateFish = async () => {
  console.log('Đang cập nhật dữ liệu cá nuôi kết hợp...');
  
  for (const fish of combinedFishData) {
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
        WHERE name = ? AND category_id = 4`,
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

  console.log('\nĐang cập nhật dữ liệu cá nuôi cảnh...');
  
  for (const fish of ornamentalFishData) {
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
        WHERE name = ? AND category_id = 5`,
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

  console.log('\n✓ Hoàn tất cập nhật dữ liệu cá nuôi kết hợp và cá nuôi cảnh!');
  db.close();
};

updateFish().catch(console.error);
