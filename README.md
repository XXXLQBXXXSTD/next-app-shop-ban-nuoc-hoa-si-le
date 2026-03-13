# LUXE SCENT - Nước Hoa Cao Cấp

![LUXE SCENT](https://img.shields.io/badge/LUXE%20SCENT-Hương%20Thơm%20Vĩnh%20Cửu-0A3D2A?style=for-the-badge)

## 🌟 Giới Thiệu

LUXE SCENT là website thương mại điện tử cao cấp chuyên bán nước hoa, hỗ trợ cả bán lẻ và bán sỉ. Thiết kế sang trọng, hiện đại với trải nghiệm người dùng tối ưu.

## 🚀 Công Nghệ

- **Framework:** Next.js 14 (React)
- **Styling:** Bootstrap 5 + Custom CSS
- **Fonts:** Playfair Display + Inter
- **Year:** 2026

## 🎨 Màu Sắc Thương Hiệu

- **Cream White:** #F8F4F0
- **Emerald Green:** #0A3D2A
- **Soft Gold:** #D4AF37
- **Rose Gold:** #B76E79

## 📦 Cài Đặt

```bash
# Clone repository
git clone [repository-url]

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu Trúc Dự Án

```
src/
├── app/                    # Pages
│   ├── about/             # Trang giới thiệu
│   ├── cart/              # Giỏ hàng & thanh toán
│   ├── collections/       # Bộ sưu tập 4 mùa
│   ├── product/[id]/      # Chi tiết sản phẩm
│   ├── shop/              # Cửa hàng (lẻ)
│   ├── wholesale/         # Bán sỉ
│   └── page.jsx           # Trang chủ
└── component/             # Components
    ├── LuxuryHeader.jsx   # Header chính
    ├── LuxuryFooter.jsx   # Footer chính
    ├── ProductItem.jsx    # Card sản phẩm
    ├── SeasonDetail.jsx   # Template trang mùa
    └── ...
```

## 🎯 Tính Năng Chính

### Trang Chủ
- Hero slider tự động
- Scent Families (4 nhóm hương)
- Best Sellers (8 sản phẩm)
- Customer testimonials

### Trang Cửa Hàng
- Filter sidebar đa dạng
- Toggle giá lẻ/sỉ
- Sort & pagination
- 9 sản phẩm/trang

### Chi Tiết Sản Phẩm
- Image gallery với zoom
- Scent Pyramid visualization
- Wholesale pricing table
- Customer reviews

### Giỏ Hàng
- Multi-step checkout (4 bước)
- Shipping calculator
- Payment: MoMo, VNPay, Credit Card
- **NO COD** (giá trị cao)

### Bán Sỉ
- 3 pricing tiers
- Quote request form
- Success stories
- B2B focused

### Bộ Sưu Tập
- 4 mùa: Xuân, Hạ, Thu, Đông
- Mỗi mùa có 4 sản phẩm đặc trưng
- Cross-linking giữa các mùa

## 📱 Responsive Design

- Mobile-first approach
- Bootstrap 5 grid system
- Sticky header & sidebar
- Touch-friendly interactions

## 🔧 Components Có Thể Tái Sử Dụng

### LuxuryHeader
```jsx
<LuxuryHeader cartCount={3} wishlistCount={5} />
```

### ProductItem
```jsx
<ProductItem
  name="Signature Gold"
  price={1250000}
  brand="LUXE SCENT"
  discount={15}
  volume="50ml"
  image="..."
  badge="Mới"
  onAdd={() => handleAdd()}
/>
```

### SeasonDetail
```jsx
<SeasonDetail
  season={seasonData}
  products={productList}
  otherSeasons={otherSeasonsList}
/>
```

## 📚 Tài Liệu

Xem [CLAUDE.md](./CLAUDE.md) để biết thêm chi tiết về:
- Cấu trúc components
- Props & API
- Styling guidelines
- Best practices
- Future improvements

## 🎨 Design System

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Buttons
- `.luxury-btn` - Primary button
- `.luxury-btn-outline` - Secondary button

### Animations
- `.fade-in` - Fade in effect
- `.hover-scale` - Scale on hover
- `.scent-particle` - Floating particles

## 🌐 Trang Web

### Trang Công Khai
- `/` - Trang chủ
- `/shop` - Cửa hàng
- `/wholesale` - Bán sỉ
- `/collections` - Bộ sưu tập
- `/collections/spring` - Mùa Xuân
- `/collections/summer` - Mùa Hạ
- `/collections/autumn` - Mùa Thu
- `/collections/winter` - Mùa Đông
- `/product/[id]` - Chi tiết sản phẩm
- `/cart` - Giỏ hàng
- `/about` - Giới thiệu

## 📞 Liên Hệ

**LUXE SCENT**  
Hương Thơm Vĩnh Cửu

- **Hotline:** 1900-LUXE (5893)
- **Email:** hello@luxescent.vn
- **Address:** 123 Đường Lê Lợi, Q.1, TP.HCM
- **Hours:** 8:00 - 22:00 (Tất cả các ngày)

## 📄 License

© 2026 LUXE SCENT. All rights reserved.

---

**Developed with ❤️ by Kiro AI Assistant**
