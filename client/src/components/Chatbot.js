import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Xin chào! Tôi là trợ lý ảo của Thuỷ Sản Tùng Anh được hỗ trợ bởi AI. Tôi có thể giúp gì cho bạn?',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Xem sản phẩm cá giống',
    'Bảng giá',
    'Thông tin liên hệ',
    'Kỹ thuật nuôi cá'
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    
    const newHistory = [...conversationHistory, { role: 'user', content: inputText }];
    setConversationHistory(newHistory);
    
    setInputText('');
    setIsTyping(true);

    try {
      const response = await axios.post('/api/chatbot/message', {
        message: inputText,
        conversationHistory: conversationHistory
      });

      const botMessage = {
        type: 'bot',
        text: response.data.message,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setConversationHistory([
        ...newHistory,
        { role: 'assistant', content: response.data.message }
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error('Lỗi chatbot:', error);
      const errorMessage = {
        type: 'bot',
        text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline: 089 958 9259 📞',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleQuickReply = (text) => {
    setInputText(text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      <button 
        className={`chatbot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        title="Chat với chúng tôi"
      >
        <FaComments />
        <span className="chat-badge">AI</span>
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-info">
              <FaRobot className="bot-icon" />
              <div>
                <h3>Trợ lý AI</h3>
                <span className="status">● Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.type === 'bot' && (
                  <div className="message-avatar">
                    <FaRobot />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.text}
                  </div>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-avatar">
                  <FaRobot />
                </div>
                <div className="message-content">
                  <div className="message-bubble typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              className="send-btn"
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
