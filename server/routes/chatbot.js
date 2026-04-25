const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../services/groq');

// POST - Gửi tin nhắn đến chatbot
router.post('/message', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Tin nhắn không được để trống' });
    }

    // Giới hạn lịch sử hội thoại (chỉ giữ 10 tin nhắn gần nhất)
    const limitedHistory = conversationHistory 
      ? conversationHistory.slice(-10) 
      : [];

    const response = await getChatResponse(message, limitedHistory);

    res.json({
      success: response.success,
      message: response.message,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Lỗi chatbot API:', error);
    res.status(500).json({ 
      error: 'Có lỗi xảy ra',
      message: 'Xin lỗi, tôi không thể trả lời lúc này. Vui lòng liên hệ hotline: 076 999 9295'
    });
  }
});

module.exports = router;
