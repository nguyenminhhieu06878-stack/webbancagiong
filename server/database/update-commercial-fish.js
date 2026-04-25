const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'thuysan.db');
const db = new sqlite3.Database(dbPath);

// Dữ liệu chi tiết cho các loại cá nuôi thương phẩm (category_id: 2)
const commercialFishData = [
  {
    name: 'Cá Nheo Lai giống',
    scientific_name: 'Clarias macrocephalus × C. gariepinus',
    breeding_model: 'Ao đất, bể xi măng, lồng bè',
    economic_value: 'Cao (thị trường nội địa và xuất khẩu)',
    key_features: 'Tăng trưởng nhanh, thịt ngon, kháng bệnh tốt, chịu mật độ cao',
    food: 'Thức ăn công nghiệp, cá tạp, phụ phẩm động vật',
    breeding_time: '4 – 6 tháng đạt 500 – 800g/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại thâm canh, nông hộ, nuôi lồng bè',
    detailed_description: 'Cá Nheo Lai là giống cá lai tạo giữa cá nheo vàng và cá nheo phi, kết hợp ưu điểm của cả hai dòng. Tốc độ tăng trưởng nhanh, thịt ngon, giá trị thương phẩm cao.'
  },
  {
    name: 'Cá Tầm giống',
    scientific_name: 'Acipenser spp.',
    breeding_model: 'Bể xi măng tuần hoàn, ao đất nước mát',
    economic_value: 'Rất cao (thịt và trứng cá muối cao cấp)',
    key_features: 'Giá trị xuất khẩu cao, thịt và trứng đắt tiền, nuôi nước mát',
    food: 'Thức ăn viên chuyên dụng, cá tạp, tôm',
    breeding_time: '18 – 36 tháng đạt 2 – 5 kg/con',
    difficulty: 'Khó ⭐⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, vùng nước mát, đầu tư dài hạn',
    detailed_description: 'Cá Tầm là loài cá cao cấp, được nuôi để lấy thịt và trứng cá muối (caviar). Yêu cầu kỹ thuật cao, nước mát sạch, nhưng lợi nhuận rất lớn.'
  },
  {
    name: 'Cá Chình Hoa giống',
    scientific_name: 'Anguilla marmorata',
    breeding_model: 'Bể xi măng, ao đất có lưới che',
    economic_value: 'Rất cao (xuất khẩu Nhật, Hàn, Đài Loan)',
    key_features: 'Giá xuất khẩu cao, thịt béo ngon, tăng trưởng tốt',
    food: 'Cá tạp, tôm, thức ăn công nghiệp dạng ẩm',
    breeding_time: '18 – 24 tháng đạt 400 – 700g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại có kinh nghiệm, xuất khẩu',
    detailed_description: 'Cá Chình Hoa có giá trị xuất khẩu rất cao, đặc biệt sang thị trường Đông Á. Thịt béo ngon, giàu dinh dưỡng, được ưa chuộng trong ẩm thực cao cấp.'
  },
  {
    name: 'Cá Lóc Bông giống',
    scientific_name: 'Channa micropeltes',
    breeding_model: 'Ao đất, bể xi măng, lồng bè',
    economic_value: 'Cao (thị trường nội địa và xuất khẩu)',
    key_features: 'Tăng trưởng nhanh, thịt trắng ngon, giá bán cao',
    food: 'Cá tạp, ếch, thức ăn công nghiệp',
    breeding_time: '8 – 12 tháng đạt 1 – 2 kg/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại, nông hộ có kinh nghiệm',
    detailed_description: 'Cá Lóc Bông là loài cá có giá trị thương phẩm cao, thịt trắng ngon, ít xương. Được thị trường ưa chuộng, giá bán ổn định.'
  },
  {
    name: 'Cá Basa giống',
    scientific_name: 'Pangasius bocourti',
    breeding_model: 'Ao đất, lồng bè trên sông',
    economic_value: 'Cao (xuất khẩu chính sang Mỹ, EU)',
    key_features: 'Tăng trưởng nhanh, thịt trắng, phi lê cao, xuất khẩu tốt',
    food: 'Thức ăn công nghiệp 28 – 32% đạm',
    breeding_time: '6 – 8 tháng đạt 0.8 – 1.2 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại thâm canh, xuất khẩu, nông hộ chuyên nghiệp',
    detailed_description: 'Cá Basa là loài cá xuất khẩu chủ lực của Việt Nam, thịt trắng, tỷ lệ phi lê cao, được thị trường quốc tế ưa chuộng.'
  },
  {
    name: 'Cá Tra Dầu giống',
    scientific_name: 'Pangasius hypophthalmus (dòng dầu)',
    breeding_model: 'Ao đất, lồng bè',
    economic_value: 'Cao (thị trường nội địa và xuất khẩu)',
    key_features: 'Thịt béo ngon hơn cá tra thường, giá bán cao',
    food: 'Thức ăn công nghiệp 28 – 30% đạm',
    breeding_time: '7 – 9 tháng đạt 1 – 1.5 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại, nông hộ, nuôi lồng bè',
    detailed_description: 'Cá Tra Dầu là dòng cá tra có hàm lượng mỡ cao hơn, thịt béo ngon, được thị trường nội địa ưa chuộng. Giá bán cao hơn cá tra thường.'
  },
  {
    name: 'Lươn giống',
    scientific_name: 'Monopterus albus',
    breeding_model: 'Bể xi măng, ao đất có bùn',
    economic_value: 'Cao (thị trường nội địa và xuất khẩu Trung Quốc)',
    key_features: 'Giá bán cao, thịt bổ dưỡng, dễ tiêu thụ',
    food: 'Giun đất, cá tạp, thức ăn công nghiệp',
    breeding_time: '6 – 8 tháng đạt 100 – 150g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Nông hộ, trang trại nhỏ, nuôi kết hợp',
    detailed_description: 'Lươn là loài thủy sản có giá trị dinh dưỡng cao, được ưa chuộng trong ẩm thực. Giá bán ổn định, dễ tiêu thụ, phù hợp nuôi quy mô nhỏ.'
  },
  {
    name: 'Ếch Thái giống',
    scientific_name: 'Rana tigerina',
    breeding_model: 'Bể xi măng, ao đất có lưới che',
    economic_value: 'Rất cao (xuất khẩu và nhà hàng cao cấp)',
    key_features: 'Tăng trưởng nhanh, thịt ngon, giá xuất khẩu cao',
    food: 'Côn trùng, giun, thức ăn viên chuyên dụng',
    breeding_time: '3 – 4 tháng đạt 200 – 300g/con',
    difficulty: 'Trung bình ⭐⭐',
    suitable_for: 'Trang trại chuyên nghiệp, xuất khẩu',
    detailed_description: 'Ếch Thái là giống ếch nhập khẩu từ Thái Lan, có kích thước lớn, thịt ngon, tốc độ tăng trưởng nhanh. Giá trị xuất khẩu và tiêu thụ nội địa cao.'
  },
  {
    name: 'Cá Tra giống',
    scientific_name: 'Pangasius hypophthalmus',
    breeding_model: 'Ao đất, lồng bè trên sông',
    economic_value: 'Cao (xuất khẩu chính của Việt Nam)',
    key_features: 'Tăng trưởng nhanh, thịt trắng, tỷ lệ phi lê cao',
    food: 'Thức ăn công nghiệp 26 – 30% đạm',
    breeding_time: '6 – 8 tháng đạt 0.8 – 1.2 kg/con',
    difficulty: 'Dễ ⭐',
    suitable_for: 'Trang trại thâm canh, xuất khẩu, nông hộ',
    detailed_description: 'Cá Tra là loài cá xuất khẩu chủ lực của Việt Nam, chiếm tỷ trọng lớn trong ngành thủy sản. Dễ nuôi, tăng trưởng nhanh, thị trường rộng.'
  }
];

const updateFish = async () => {
  console.log('Đang cập nhật dữ liệu cá nuôi thương phẩm...');
  
  for (const fish of commercialFishData) {
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
        WHERE name = ? AND category_id = 2`,
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

  console.log('\n✓ Hoàn tất cập nhật dữ liệu cá nuôi thương phẩm!');
  db.close();
};

updateFish().catch(console.error);
