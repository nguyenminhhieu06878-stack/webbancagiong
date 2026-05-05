const { PayOS } = require('@payos/node');

let payos = null;

try {
  if (process.env.PAYOS_CLIENT_ID && 
      process.env.PAYOS_API_KEY && 
      process.env.PAYOS_CHECKSUM_KEY &&
      process.env.PAYOS_CLIENT_ID !== 'your_client_id_here') {
    
    payos = new PayOS(
      process.env.PAYOS_CLIENT_ID,
      process.env.PAYOS_API_KEY,
      process.env.PAYOS_CHECKSUM_KEY
    );
    
    console.log('✅ PayOS đã được khởi tạo');
  } else {
    console.log('⚠️  PayOS chưa được cấu hình. Vui lòng cập nhật thông tin trong file .env');
  }
} catch (error) {
  console.log('⚠️  Không thể khởi tạo PayOS:', error.message);
}

module.exports = payos;
