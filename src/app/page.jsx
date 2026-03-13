"use client"
import { useState } from "react";
import ProductItem from "@/component/ProductItem"
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Banner from "@/component/Banner";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }

  const productList = [
    {
      id: 1, 
      name: "Chanel No.5 EDP", 
      price: 3500000, 
      brand: "Chanel",
      discount: 15,
      image: "https://via.placeholder.com/300x400?text=Chanel+No.5"
    },
    {
      id: 2, 
      name: "Dior Sauvage EDT", 
      price: 2800000, 
      brand: "Dior",
      discount: 20,
      image: "https://via.placeholder.com/300x400?text=Dior+Sauvage"
    },
    {
      id: 3, 
      name: "Versace Eros", 
      price: 2200000, 
      brand: "Versace",
      image: "https://via.placeholder.com/300x400?text=Versace+Eros"
    },
    {
      id: 4, 
      name: "Tom Ford Black Orchid", 
      price: 4500000, 
      brand: "Tom Ford",
      discount: 10,
      image: "https://via.placeholder.com/300x400?text=Tom+Ford"
    },
    {
      id: 5, 
      name: "Gucci Bloom", 
      price: 2900000, 
      brand: "Gucci",
      image: "https://via.placeholder.com/300x400?text=Gucci+Bloom"
    },
    {
      id: 6, 
      name: "YSL Black Opium", 
      price: 3200000, 
      brand: "YSL",
      discount: 25,
      image: "https://via.placeholder.com/300x400?text=YSL"
    },
  ]

  return (
    <>
      <Header cartCount={cartCount} />
      
      <Banner />

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-3">
            <div className="p-3">
              <h1>✓</h1>
              <h6>Hàng chính hãng 100%</h6>
              <small className="text-muted">Cam kết nguồn gốc rõ ràng</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <h1>🚚</h1>
              <h6>Miễn phí vận chuyển</h6>
              <small className="text-muted">Đơn hàng từ 500k</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <h1>💰</h1>
              <h6>Giá bán sỉ tốt nhất</h6>
              <small className="text-muted">Hỗ trợ đại lý toàn quốc</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <h1>🔄</h1>
              <h6>Đổi trả trong 7 ngày</h6>
              <small className="text-muted">Nếu có lỗi từ nhà sản xuất</small>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Sản phẩm nổi bật</h2>
          <a href="#" className="btn btn-outline-dark">Xem tất cả →</a>
        </div>
        
        <div className="row g-4">
          {productList.map((p) => (
            <div key={p.id} className="col-md-4 col-lg-3">
              <ProductItem 
                name={p.name} 
                price={p.price} 
                brand={p.brand}
                discount={p.discount}
                image={p.image}
                onAdd={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Wholesale Section */}
      <div className="bg-light py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-dark">Chương trình bán sỉ</h2>
              <p className="text-secondary">
                Đăng ký trở thành đại lý của chúng tôi để nhận được giá sỉ tốt nhất, 
                hỗ trợ kinh doanh và chính sách ưu đãi đặc biệt.
              </p>
              <ul className="text-dark">
                <li>Giá sỉ cạnh tranh nhất thị trường</li>
                <li>Hỗ trợ vận chuyển toàn quốc</li>
                <li>Tư vấn kinh doanh miễn phí</li>
                <li>Chính sách đổi trả linh hoạt</li>
              </ul>
              <button className="btn btn-primary btn-lg">Đăng ký ngay</button>
            </div>
            <div className="col-md-6 text-center">
              <div className="bg-white p-5 rounded shadow">
                <h1 className="display-1">📦</h1>
                <h4 className="text-dark">Liên hệ ngay</h4>
                <p className="text-secondary">Hotline: 1900-xxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
