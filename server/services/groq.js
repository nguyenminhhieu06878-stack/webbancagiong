const Groq = require('groq-sdk');

let groq = null;

try {
  if (process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'your_groq_api_key_here') {
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });
    console.log('✅ Groq AI đã được khởi tạo');
  } else {
    console.log('⚠️  Groq AI chưa được cấu hình. Vui lòng cập nhật GROQ_API_KEY trong file .env');
  }
} catch (error) {
  console.log('⚠️  Không thể khởi tạo Groq:', error.message);
}

const systemPrompt = `Bạn là trợ lý ảo của Thuỷ Sản Tùng Anh - công ty chuyên cung cấp cá giống chất lượng cao.

THÔNG TIN CÔNG TY:
- Tên: Thuỷ Sản Tùng Anh
- Hotline: 076 999 9295
- Chuyên: Cung cấp cá giống chất lượng cao
- Giao hàng: Toàn quốc

SẢN PHẨM:
1. Cá Dễ Nuôi: Mè Hoa (500đ), Rô Phi (400đ), Chép (250đ), Diếc (300đ)
2. Cá Thương Phẩm: Tra (500đ), Basa (600đ), Nheo (450đ), Trê (500đ)
3. Cá Đặc Sản: Chình (800đ), Lóc (600đ), Tầm (700đ)
4. Cá Nuôi Cảnh: Koi (50k-500k), Chép Nhật (100k-300k)

DỊCH VỤ:
- Giao hàng toàn quốc
- Miễn phí ship đơn trên 5 triệu
- Cam kết cá giống chất lượng
- Hỗ trợ kỹ thuật nuôi
- Bảo hành cá chết do vận chuyển

YÊU CẦU:
- Trả lời ngắn gọn, thân thiện
- Dùng emoji phù hợp
- Tư vấn sản phẩm phù hợp với nhu cầu
- Khuyến khích khách hàng liên hệ hotline nếu cần tư vấn chi tiết
- Trả lời bằng tiếng Việt`;

async function getChatResponse(userMessage, conversationHistory = []) {
  if (!groq) {
    return {
      success: false,
      message: 'Chatbot AI chưa được cấu hình. Vui lòng liên hệ hotline: 076 999 9295'
    };
  }

  try {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userMessage }
    ];

    const completion = await groq.chat.completions.create({
      messages: messages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      stream: false
    });

    return {
      success: true,
      message: completion.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời lúc này.'
    };
  } catch (error) {
    console.error('Lỗi Groq AI:', error);
    return {
      success: false,
      message: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline: 076 999 9295'
    };
  }
}

module.exports = { getChatResponse };
