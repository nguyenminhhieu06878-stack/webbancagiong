# Hệ Thống Xác Thực Người Dùng

## Tổng Quan
Hệ thống xác thực đã được triển khai hoàn chỉnh cho khách hàng với các tính năng:
- Đăng ký tài khoản mới
- Đăng nhập
- Xác thực JWT token
- Quản lý phiên đăng nhập
- Hiển thị thông tin người dùng trong header

## Cấu Trúc Database

### Bảng `customers`
```sql
CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL,
  password TEXT NOT NULL,
  address TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## API Endpoints

### 1. Đăng Ký Khách Hàng
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "fullName": "Nguyễn Văn A",
  "email": "example@email.com",
  "phone": "0123456789",
  "password": "password123"
}
```

**Response (Success):**
```json
{
  "message": "Đăng ký thành công!",
  "customerId": 1
}
```

**Response (Error):**
```json
{
  "error": "Email đã được sử dụng"
}
```

### 2. Đăng Nhập Khách Hàng
**POST** `/api/auth/customer/login`

**Request Body:**
```json
{
  "email": "example@email.com",
  "password": "password123"
}
```

**Response (Success):**
```json
{
  "message": "Đăng nhập thành công",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "fullName": "Nguyễn Văn A",
    "email": "example@email.com",
    "phone": "0123456789",
    "role": "customer"
  }
}
```

### 3. Xác Thực Token
**GET** `/api/auth/verify`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "message": "Token hợp lệ",
  "user": {
    "id": 1,
    "email": "example@email.com",
    "role": "customer"
  }
}
```

## Frontend Implementation

### 1. Đăng Ký (`/register`)
- Form với các trường: Họ tên, Email, Số điện thoại, Mật khẩu, Xác nhận mật khẩu
- Validation: Mật khẩu tối thiểu 6 ký tự, mật khẩu xác nhận phải khớp
- Sau khi đăng ký thành công, chuyển đến trang đăng nhập

### 2. Đăng Nhập (`/login`)
- Form với Email và Mật khẩu
- Tính năng hiện/ẩn mật khẩu
- Checkbox "Ghi nhớ đăng nhập"
- Lưu token và thông tin user vào localStorage
- Chuyển về trang chủ sau khi đăng nhập thành công

### 3. Header Component
- Hiển thị icon người dùng
- Dropdown menu:
  - **Chưa đăng nhập:** Hiển thị "Đăng ký" và "Đăng nhập"
  - **Đã đăng nhập:** Hiển thị tên người dùng, email, và các tùy chọn:
    - Thông tin tài khoản
    - Đơn hàng của tôi
    - Đăng xuất

### 4. LocalStorage
Sau khi đăng nhập thành công, hệ thống lưu:
- `token`: JWT token để xác thực các request
- `user`: Thông tin người dùng (JSON string)

## Bảo Mật

### 1. Mã Hóa Mật Khẩu
- Sử dụng `bcryptjs` với salt rounds = 10
- Mật khẩu không bao giờ được lưu dưới dạng plain text

### 2. JWT Token
- Secret key được lưu trong file `.env`
- Token có thời hạn 7 ngày cho khách hàng
- Token được gửi trong header `Authorization: Bearer <token>`

### 3. Validation
- Email phải unique
- Mật khẩu tối thiểu 6 ký tự
- Tất cả các trường bắt buộc phải được điền

## Testing

Chạy test script để kiểm tra các endpoint:
```bash
cd server
node test-auth.js
```

Test script sẽ kiểm tra:
1. ✅ Đăng ký tài khoản mới
2. ✅ Đăng nhập với tài khoản vừa tạo
3. ✅ Xác thực token
4. ✅ Từ chối mật khẩu sai
5. ✅ Từ chối email trùng lặp

## Files Liên Quan

### Backend
- `server/routes/auth.js` - Authentication routes
- `server/database/db.js` - Database initialization
- `server/database/add-customers-table.js` - Migration script
- `server/.env` - Environment variables (JWT_SECRET)

### Frontend
- `client/src/pages/Login.js` - Trang đăng nhập
- `client/src/pages/Register.js` - Trang đăng ký
- `client/src/pages/Auth.css` - Styles cho auth pages
- `client/src/components/Header.js` - Header với user dropdown
- `client/src/components/Header.css` - Header styles

## Các Bước Tiếp Theo (Optional)

1. **Quên mật khẩu**: Implement chức năng reset password qua email
2. **Xác thực email**: Gửi email xác thực khi đăng ký
3. **Refresh token**: Implement refresh token để tăng bảo mật
4. **Profile page**: Trang cập nhật thông tin cá nhân
5. **Order history**: Trang xem lịch sử đơn hàng
6. **Social login**: Đăng nhập qua Google, Facebook
