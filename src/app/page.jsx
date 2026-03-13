"use client"
import { useState } from "react";
import ProductItem from "@/component/ProductItem";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";
import HeroSection from "@/component/HeroSection";
import ScentFamilies from "@/component/ScentFamilies";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }

  const featuredProducts = [
    {
      id: 1,
      name: "Velvet Rose Intense",
      price: 3500000,
      brand: "LUXE SCENT",
      discount: 15,
      volume: "50ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.7955.jpg"
    },
    {
      id: 2,
      name: "Oud Mystique",
      price: 4200000,
      brand: "LUXE SCENT",
      discount: 20,
      volume: "75ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.73669.jpg"
    },
    {
      id: 3,
      name: "Citrus Garden",
      price: 2800000,
      brand: "LUXE SCENT",
      volume: "50ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.1713.jpg"
    },
    {
      id: 4,
      name: "Amber Noir",
      price: 3900000,
      brand: "LUXE SCENT",
      discount: 10,
      volume: "100ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.14365.jpg"
    },
    {
      id: 5,
      name: "White Jasmine",
      price: 3200000,
      brand: "LUXE SCENT",
      volume: "50ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.1406.jpg"
    },
    {
      id: 6,
      name: "Sandalwood Dream",
      price: 3600000,
      brand: "LUXE SCENT",
      discount: 25,
      volume: "75ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.2825.jpg"
    },
    {
      id: 7,
      name: "Bergamot Bliss",
      price: 2900000,
      brand: "LUXE SCENT",
      volume: "50ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.41675.jpg"
    },
    {
      id: 8,
      name: "Midnight Orchid",
      price: 4500000,
      brand: "LUXE SCENT",
      discount: 15,
      volume: "100ml",
      image: "https://fimgs.net/mdimg/perfume/375x500.1543.jpg"
    },
  ];

  return (
    <>
      <LuxuryHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <HeroSection />

      {/* Features Section */}
      <section style={{padding: '60px 0', background: 'white'}}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div style={{padding: '20px'}}>
                <div style={{fontSize: '48px', marginBottom: '15px'}}>✓</div>
                <h6 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--emerald-green)',
                  marginBottom: '8px',
                  fontSize: '18px'
                }}>
                  Chính Hãng 100%
                </h6>
                <small style={{color: '#888'}}>Cam kết nguồn gốc rõ ràng</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={{padding: '20px'}}>
                <div style={{fontSize: '48px', marginBottom: '15px'}}>🚚</div>
                <h6 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--emerald-green)',
                  marginBottom: '8px',
                  fontSize: '18px'
                }}>
                  Miễn Phí Ship
                </h6>
                <small style={{color: '#888'}}>Đơn hàng từ 500.000đ</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={{padding: '20px'}}>
                <div style={{fontSize: '48px', marginBottom: '15px'}}>💰</div>
                <h6 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--emerald-green)',
                  marginBottom: '8px',
                  fontSize: '18px'
                }}>
                  Giá Sỉ Tốt Nhất
                </h6>
                <small style={{color: '#888'}}>Hỗ trợ đại lý toàn quốc</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={{padding: '20px'}}>
                <div style={{fontSize: '48px', marginBottom: '15px'}}>🔄</div>
                <h6 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--emerald-green)',
                  marginBottom: '8px',
                  fontSize: '18px'
                }}>
                  Đổi Trả 7 Ngày
                </h6>
                <small style={{color: '#888'}}>Nếu có lỗi sản xuất</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScentFamilies />

      {/* Best Sellers Section */}
      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{
              color: 'var(--soft-gold)',
              fontSize: '14px',
              letterSpacing: '3px',
              fontWeight: '500',
              marginBottom: '10px'
            }}>
              BÁN CHẠY NHẤT
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--emerald-green)',
              marginBottom: '15px'
            }}>
              Sản Phẩm Nổi Bật
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductItem 
                  name={product.name}
                  price={product.price}
                  brand={product.brand}
                  discount={product.discount}
                  volume={product.volume}
                  image={product.image}
                  onAdd={handleAddToCart}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button className="luxury-btn-outline">
              XEM TẤT CẢ SẢN PHẨM
            </button>
          </div>
        </div>
      </section>

      {/* Wholesale CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--emerald-green) 0%, #0d5738 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <p style={{
                color: 'var(--soft-gold)',
                fontSize: '14px',
                letterSpacing: '3px',
                fontWeight: '500',
                marginBottom: '15px'
              }}>
                CHƯƠNG TRÌNH ĐẶC BIỆT
              </p>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                marginBottom: '20px'
              }}>
                Đăng Ký Bán Sỉ
              </h2>
              <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '25px', opacity: '0.9'}}>
                Trở thành đối tác của LUXE SCENT để nhận được giá sỉ tốt nhất thị trường, 
                chính sách hỗ trợ đặc biệt và cơ hội kinh doanh bền vững.
              </p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                <li style={{marginBottom: '12px', fontSize: '15px'}}>
                  ✓ Giá sỉ cạnh tranh, chiết khấu cao
                </li>
                <li style={{marginBottom: '12px', fontSize: '15px'}}>
                  ✓ Hỗ trợ vận chuyển toàn quốc
                </li>
                <li style={{marginBottom: '12px', fontSize: '15px'}}>
                  ✓ Tư vấn kinh doanh miễn phí
                </li>
                <li style={{marginBottom: '12px', fontSize: '15px'}}>
                  ✓ Chính sách đổi trả linh hoạt
                </li>
              </ul>
              <button className="luxury-btn-outline">
                ĐĂNG KÝ NGAY
              </button>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '50px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{fontSize: '80px', marginBottom: '20px'}}>📦</div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'white',
                  marginBottom: '15px',
                  fontSize: '28px'
                }}>
                  Liên Hệ Ngay
                </h4>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '18px'}}>
                  Hotline: 1900-LUXE (5893)
                </p>
                <p style={{color: 'var(--soft-gold)', fontSize: '14px'}}>
                  Tư vấn miễn phí 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="scent-particle"
            style={{
              left: `${10 + i * 15}%`,
              bottom: '20%',
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </section>

      {/* Customer Stories */}
      <section style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{
              color: 'var(--soft-gold)',
              fontSize: '14px',
              letterSpacing: '3px',
              fontWeight: '500',
              marginBottom: '10px'
            }}>
              KHÁCH HÀNG NÓI GÌ
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--emerald-green)',
              marginBottom: '15px'
            }}>
              Câu Chuyện Thành Công
            </h2>
            <div className="gold-divider"></div>
          </div>

          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-4">
                <div style={{
                  background: 'var(--cream-white)',
                  padding: '30px',
                  borderRadius: '15px',
                  height: '100%'
                }}>
                  <div style={{color: 'var(--soft-gold)', fontSize: '32px', marginBottom: '15px'}}>
                    ★★★★★
                  </div>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.8',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                    color: '#555'
                  }}>
                    "Hương thơm rất sang trọng và lưu hương cực kỳ lâu. Tôi đã giới thiệu cho rất nhiều 
                    bạn bè và họ đều rất hài lòng. Dịch vụ chăm sóc khách hàng tuyệt vời!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'var(--soft-gold)',
                      marginRight: '15px'
                    }}></div>
                    <div>
                      <h6 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--emerald-green)',
                        marginBottom: '3px'
                      }}>
                        Nguyễn Minh Anh
                      </h6>
                      <small style={{color: '#888'}}>Khách hàng thân thiết</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </>
  );
}
