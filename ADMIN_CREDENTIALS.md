# LUXE SCENT - Thông tin đăng nhập Admin

## Tài khoản Admin mặc định

**Email:** admin@luxescent.com  
**Mật khẩu:** Admin@123456

## Hướng dẫn đăng nhập Admin

1. Truy cập trang đăng nhập chính: http://localhost:3000/login
2. Nhập email và mật khẩu admin ở trên
3. Nhấn "Đăng nhập ngay"
4. Hệ thống sẽ tự động nhận diện và chuyển bạn đến Dashboard Admin tại: http://localhost:3000/admin/dashboard

## Hướng dẫn đăng nhập Khách hàng

1. Truy cập: http://localhost:3000/login
2. Chuyển sang tab "Đăng ký" để tạo tài khoản mới
3. Hoặc đăng nhập bằng tài khoản đã tạo trước đó
4. Sau khi đăng nhập thành công, bạn sẽ được chuyển về trang chủ

## Lưu ý

- Tài khoản admin được cấu hình cố định trong code
- Tài khoản khách hàng được lưu trong localStorage
- Đăng nhập admin sẽ lưu token vào localStorage với key `admin_token`
- Đăng nhập khách hàng sẽ lưu token vào localStorage với key `user_token`
- Token có hiệu lực 7 ngày
- Để đăng xuất admin, nhấn nút "Đăng xuất" ở góc trên bên phải Dashboard

## Tính năng hiện tại

✅ Đăng nhập/Đăng ký khách hàng  
✅ Đăng nhập Admin (tự động phát hiện)  
✅ Dashboard Admin với thống kê  
✅ Bảo vệ route Admin (redirect nếu chưa đăng nhập)  
✅ Đăng xuất Admin  

## Tính năng sắp tới

⏳ Quản lý đơn hàng  
⏳ Quản lý sản phẩm  
⏳ Quản lý khách hàng  
⏳ Quản lý bộ sưu tập  
⏳ Cài đặt hệ thống  

---

© 2026 LUXE SCENT - Admin Panel
