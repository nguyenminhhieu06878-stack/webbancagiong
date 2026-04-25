const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Dữ liệu chi tiết cho các loại cá nuôi đặc sản (category_id: 3)
const specialtyFishData = [
  {
    name: 'Cá Chạch Lấu giống',
    scientific_name: 'Botia modesta',
    breeding_model: 'Bể xi măng, ao đất nước chảy',
    economic_value: 'Rất cao (đặc sản miền núi, giá cao)',
    key_features: 'Thịt ngon ngọt, ít xương, giá trị dinh dưỡng cao',
    food: 'Giun, côn trùng, thức ăn viên chuyên dụng',
    breeding_time: '12 – 18 tháng đạt 150 – 250g/con',
    difficulty: 'Khó ⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, vùng nước chảy, đầu tư dài hạn',
    detailed_description: 'Cá Chạch Lấu là đặc sản miền núi phía Bắc, thịt ngon ngọt, giá trị cao. Yêu cầu nước sạch, chảy, nhiệt độ thấp, kỹ thuật nuôi khó.'
  },
  {
    name: 'Cá Vồ Đém giống',
    scientific_name: 'Channa asiatica',
    breeding_model: 'Ao đất, bể xi măng',
    economic_value: 'Rất cao (đặc sản quý hiếm, giá rất cao)',
    key_features: 'Thịt trắng ngon, bổ dưỡng, quý hiếm',
    food: 'Cá tạp, ếch, tôm, thức ăn sống',
    breeding_time: '10 – 14 tháng đạt 300 – 500g/con',
    difficulty: 'Khó ⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, người có kinh nghiệm',
    detailed_description: 'Cá Vồ Đém là loài cá đặc sản quý hiếm, thịt trắng ngon, giá trị dinh dưỡng và dược liệu cao. Nuôi khó, giá bán rất cao.'
  },
  {
    name: 'Cá Trầm Đen giống',
    scientific_name: 'Channa striata',
    breeding_model: 'Ao đất, bể xi măng',
    economic_value: 'Cao (đặc sản, giá trị dược liệu)',
    key_features: 'Thịt ngon, giá trị dược liệu cao, chữa bệnh',
    food: 'Cá tạp, ếch, tôm, thức ăn sống',
    breeding_time: '8 – 12 tháng đạt 400 – 700g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại, nông hộ có kinh nghiệm',
    detailed_description: 'Cá Trầm Đen (cá lóc đen) là loài cá có giá trị dược liệu cao, thịt ngon, được dùng để chữa bệnh và bồi bổ sức khỏe.'
  },
  {
    name: 'Cá Lăng Đuôi Đỏ giống',
    scientific_name: 'Hemibagrus wyckioides',
    breeding_model: 'Ao đất nước chảy, bể xi măng tuần hoàn',
    economic_value: 'Rất cao (đặc sản cao cấp, giá rất cao)',
    key_features: 'Thịt trắng ngon, ít xương, đặc sản sông Đà',
    food: 'Cá tạp, tôm, thức ăn viên cao cấp',
    breeding_time: '18 – 24 tháng đạt 1 – 2 kg/con',
    difficulty: 'Rất khó ⭐⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, vùng nước chảy, đầu tư cao',
    detailed_description: 'Cá Lăng Đuôi Đỏ là đặc sản sông Đà, thịt trắng ngon tuyệt, giá rất cao. Nuôi rất khó, yêu cầu nước chảy sạch, nhiệt độ ổn định.'
  },
  {
    name: 'Cá Bống Tượng giống',
    scientific_name: 'Oxyeleotris marmorata',
    breeding_model: 'Ao đất, bể xi măng',
    economic_value: 'Rất cao (đặc sản miền Tây, xuất khẩu)',
    key_features: 'Thịt trắng ngon, béo, giá trị cao',
    food: 'Cá tạp, tôm, ốc, thức ăn công nghiệp',
    breeding_time: '12 – 18 tháng đạt 500 – 800g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại, nông hộ miền Tây, xuất khẩu',
    detailed_description: 'Cá Bống Tượng là đặc sản miền Tây, thịt trắng béo ngon, được xuất khẩu sang Trung Quốc với giá cao. Nuôi tương đối dễ ở miền Tây.'
  },
  {
    name: 'Cá Thát Lát Cườm giống',
    scientific_name: 'Notopterus notopterus',
    breeding_model: 'Ao đất, lồng bè',
    economic_value: 'Rất cao (đặc sản quý, giá rất cao)',
    key_features: 'Thịt ngon ngọt, ít xương, quý hiếm',
    food: 'Cá tạp, tôm, thức ăn sống',
    breeding_time: '14 – 20 tháng đạt 1 – 1.5 kg/con',
    difficulty: 'Khó ⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, người có kinh nghiệm cao',
    detailed_description: 'Cá Thát Lát Cườm là loài cá đặc sản quý hiếm, thịt ngon ngọt, ít xương. Nuôi khó, tốc độ tăng trưởng chậm nhưng giá bán rất cao.'
  },
  {
    name: 'Baba giống',
    scientific_name: 'Pangasius sanitwongsei',
    breeding_model: 'Ao đất lớn, lồng bè trên sông',
    economic_value: 'Cao (đặc sản, thịt ngon)',
    key_features: 'Kích thước lớn, thịt trắng ngon, tăng trưởng nhanh',
    food: 'Cá tạp, thức ăn công nghiệp',
    breeding_time: '12 – 18 tháng đạt 3 – 5 kg/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại lớn, nuôi lồng bè, ao rộng',
    detailed_description: 'Cá Baba (cá tra dầu khổng lồ) là loài cá có kích thước lớn, thịt trắng ngon, giá trị thương phẩm cao. Phù hợp nuôi quy mô lớn.'
  }
];

const updateFish = async () => {
  console.log('Đang cập nhật dữ liệu cá nuôi đặc sản...');
  
  for (const fish of specialtyFishData) {
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
        WHERE name = ? AND category_id = 3`,
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

  console.log('\n✓ Hoàn tất cập nhật dữ liệu cá nuôi đặc sản!');
  db.close();
};

updateFish().catch(console.error);
