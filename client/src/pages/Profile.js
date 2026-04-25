import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(true); // Mặc định là chế độ chỉnh sửa
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      toast.error('Vui lòng đăng nhập để xem thông tin tài khoản');
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    setFormData({
      fullName: parsedUser.fullName || '',
      email: parsedUser.email || '',
      phone: parsedUser.phone || '',
      address: parsedUser.address || ''
    });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original user data
    setFormData({
      fullName: user.fullName || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('/api/customers/profile', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Update user data in localStorage
      const updatedUser = { ...user, ...formData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      // Dispatch event to update Header
      window.dispatchEvent(new Event('authChange'));

      toast.success('Cập nhật thông tin thành công!');
      setIsEditing(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.error || 'Cập nhật thất bại. Vui lòng thử lại.');
    }
  };

  if (!user) {
    return <div className="profile-loading">Đang tải...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUser />
          </div>
          <h1>Thông Tin Tài Khoản</h1>
          <p>Quản lý thông tin cá nhân của bạn</p>
        </div>

        <div className="profile-card">
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>
                <FaUser className="label-icon" />
                Họ và tên
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope className="label-icon" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="input-disabled"
              />
              <small className="input-note">Email không thể thay đổi</small>
            </div>

            <div className="form-group">
              <label>
                <FaPhone className="label-icon" />
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaMapMarkerAlt className="label-icon" />
                Địa chỉ
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                rows="3"
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>

            <div className="profile-actions">
              <button type="submit" className="btn-save" disabled={loading}>
                <FaSave /> {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
              </button>
            </div>
          </form>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Ngày tham gia:</span>
            <span className="info-value">
              {user.created_at ? new Date(user.created_at).toLocaleDateString('vi-VN') : 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Loại tài khoản:</span>
            <span className="info-value">Khách hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
