# 🐟 Website Thuỷ sản Tùng Anh

Website quản lý và cung cấp cá giống nước ngọt được xây dựng với React.js, Node.js và SQLite.

## 🚀 Tính năng chính

### Frontend (React.js)
- ✅ Trang chủ với hero section và sản phẩm nổi bật
- ✅ Danh sách sản phẩm với tìm kiếm và lọc theo loại
- ✅ Responsive design (tương thích mobile)
- ✅ Giao diện đăng nhập admin
- ✅ Navigation và footer hoàn chỉnh

### Backend (Node.js + Express + SQLite)
- ✅ API RESTful cho quản lý sản phẩm cá giống
- ✅ Database SQLite với dữ liệu mẫu
- ✅ Authentication JWT cho admin
- ✅ Upload hình ảnh với Multer
- ✅ CORS và middleware bảo mật

### Database (SQLite)
- ✅ Bảng sản phẩm (products)
- ✅ Bảng danh mục (categories) 
- ✅ Bảng người dùng (users)
- ✅ Bảng liên hệ (contacts)
- ✅ Dữ liệu mẫu các loại cá: tra, basa, rô phi, chép

## 🛠 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.x
- npm >= 8.x

### Cài đặt dependencies
```bash
# Cài đặt tất cả dependencies
npm run install-all

# Hoặc cài đặt từng phần:
npm install                    # Root dependencies
cd server && npm install       # Backend dependencies  
cd ../client && npm install    # Frontend dependencies
```

### Chạy ứng dụng

#### Chạy cả frontend và backend cùng lúc:
```bash
npm run dev
```

#### Hoặc chạy riêng từng phần:
```bash
# Chạy backend (Terminal 1)
npm run server

# Chạy frontend (Terminal 2) 
npm run client
```

### URLs
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001
- **Health Check**: http://localhost:5001/api/health

## 👤 Tài khoản Admin

Tài khoản admin mặc định đã được tạo:
- **Username**: `admin`
- **Password**: `admin123`
- **Email**: `admin@thuysan-tunganh.com`

## 📁 Cấu trúc dự án

```
thuy-san-tung-anh/
├── client/                 # React.js Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Các trang chính
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # Node.js Backend
│   ├── database/          # SQLite database
│   ├── routes/           # API routes
│   ├── uploads/          # Thư mục lưu hình ảnh
│   ├── index.js          # Server entry point
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Sản phẩm
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/:id` - Lấy chi tiết sản phẩm
- `POST /api/products` - Thêm sản phẩm mới (Admin)
- `PUT /api/products/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /api/products/:id` - Xóa sản phẩm (Admin)
- `GET /api/products/categories/all` - Lấy danh sách danh mục

### Authentication
- `POST /api/auth/login` - Đăng nhập admin
- `POST /api/auth/setup` - Tạo tài khoản admin đầu tiên
- `GET /api/auth/verify` - Xác thực token

### Khác
- `GET /api/health` - Health check

## 🎯 Các trang chính

1. **Trang chủ** (`/`) - Hero section, sản phẩm nổi bật, thống kê
2. **Sản phẩm** (`/products`) - Danh sách sản phẩm với tìm kiếm và lọc
3. **Chi tiết sản phẩm** (`/products/:id`) - Thông tin chi tiết sản phẩm
4. **Giới thiệu** (`/about`) - Thông tin về công ty
5. **Liên hệ** (`/contact`) - Form liên hệ và thông tin
6. **Đăng nhập Admin** (`/admin/login`) - Đăng nhập quản trị
7. **Dashboard Admin** (`/admin/dashboard`) - Quản lý sản phẩm

## 🔧 Tính năng sẽ phát triển

- [ ] Hoàn thiện trang chi tiết sản phẩm
- [ ] Hoàn thiện admin dashboard
- [ ] Form liên hệ với email
- [ ] Giỏ hàng và đặt hàng
- [ ] Quản lý đơn hàng
- [ ] Báo cáo thống kê
- [ ] Tối ưu SEO
- [ ] PWA support

## 🐛 Lỗi đã biết

- Một số warning ESLint về accessibility (không ảnh hưởng chức năng)
- Deprecation warnings từ webpack (không ảnh hưởng chức năng)

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng liên hệ:
- Email: admin@thuysan-tunganh.com
- Phone: 0123 456 789

---

**Công ty Thuỷ sản Tùng Anh** - Chuyên cung cấp cá giống nước ngọt chất lượng cao 🐟