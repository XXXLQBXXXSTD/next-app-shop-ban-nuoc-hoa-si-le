"use client"
import { useState } from "react";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";

export default function ProductDetailPage() {
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showWholesale, setShowWholesale] = useState(false);

  const product = {
    name: "Elite Royal Oud",
    brand: "Parfum de Prestige",
    price: 4500000,
    salePrice: 3250000,
    rating: 4.9,
    reviews: 128,
    sold: 2400,
    images: [
      "https://fimgs.net/mdimg/perfume/375x500.73669.jpg",
      "https://fimgs.net/mdimg/perfume/375x500.1826.jpg",
      "https://fimgs.net/mdimg/perfume/375x500.2825.jpg",
      "https://fimgs.net/mdimg/perfume/375x500.14365.jpg"
    ],
    description: "Elite Royal Oud là bản giao hưởng của sự quyền quý, kết hợp giữa tinh túy của gỗ Trầm hương phương Đông và vẻ tươi mát của Cam Bergamot Ý. Một hương thơm dành riêng cho những quý ông lịch lãm.",
    longevity: 5,
    sillage: 4,
    notes: {
      top: "Cam Bergamot, Hồng tiêu, Cây bách",
      heart: "Hoa hồng Bulgary, Trầm hương, Gỗ tuyết tùng",
      base: "Hổ phách, Xạ hương trắng, Hoắc hương"
    }
  };

  const reviews = [
    {
      name: "Nguyễn Hoàng",
      initial: "NH",
      rating: 5,
      date: "2 ngày trước",
      verified: true,
      comment: "Mùi hương thực sự đẳng cấp. Độ bám tỏa cực tốt, mình dùng từ sáng sớm mà đến tối vẫn còn nghe mùi thoang thoảng. Đóng gói rất đẹp và sang trọng.",
      images: [
        "https://fimgs.net/mdimg/perfume/375x500.42575.jpg",
        "https://fimgs.net/mdimg/perfume/375x500.4861.jpg"
      ]
    },
    {
      name: "Trần Tiến",
      initial: "TT",
      rating: 5,
      date: "1 tuần trước",
      verified: true,
      comment: "Mùi trầm hương cực kỳ nịnh mũi. Giao hàng nhanh, nhân viên tư vấn nhiệt tình. Sẽ ủng hộ shop dài dài.",
      images: [
        "https://fimgs.net/mdimg/perfume/375x500.1825.jpg"
      ]
    }
  ];

  return (
    <>
      <LuxuryHeader cartCount={cartCount} />
      
      <main style={{maxWidth: '1400px', margin: '0 auto', padding: '40px 20px'}}>
        {/* Breadcrumb */}
        <nav style={{fontSize: '14px', color: '#999', marginBottom: '30px'}}>
          <a href="/" style={{color: '#999'}}>Trang chủ</a>
          <span className="mx-2">/</span>
          <a href="/shop" style={{color: '#999'}}>Nước hoa Nam</a>
          <span className="mx-2">/</span>
          <span style={{color: 'var(--emerald-green)', fontWeight: '600'}}>{product.name}</span>
        </nav>

        <div className="row g-5">
          {/* Gallery */}
          <div className="col-lg-6">
            <div style={{position: 'sticky', top: '100px'}}>
              {/* Main Image */}
              <div style={{
                position: 'relative',
                aspectRatio: '4/5',
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={product.images[selectedImage]}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    cursor: 'zoom-in'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--emerald-green)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1px'
                }}>
                  MỚI NHẤT
                </span>
              </div>

              {/* Thumbnails */}
              <div className="row g-3">
                {product.images.map((img, index) => (
                  <div key={index} className="col-3">
                    <div 
                      onClick={() => setSelectedImage(index)}
                      style={{
                        aspectRatio: '1',
                        background: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: selectedImage === index ? '3px solid var(--emerald-green)' : '3px solid transparent',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: selectedImage === index ? 1 : 0.6
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = selectedImage === index ? 1 : 0.6}
                    >
                      <img 
                        src={img}
                        alt={`View ${index + 1}`}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            <div style={{borderBottom: '1px solid #e5e5e5', paddingBottom: '25px', marginBottom: '25px'}}>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: 'var(--emerald-green)',
                marginBottom: '10px',
                fontWeight: '700'
              }}>
                {product.name}
              </h1>
              <p style={{
                color: 'var(--soft-gold)',
                fontSize: '18px',
                fontWeight: '600',
                letterSpacing: '2px',
                marginBottom: '20px'
              }}>
                {product.brand}
              </p>
              
              {/* Rating */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex" style={{color: 'var(--soft-gold)', fontSize: '20px'}}>
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && '☆'}
                </div>
                <span style={{fontSize: '14px', color: '#888'}}>
                  ({product.reviews} Đánh giá) | {product.sold.toLocaleString()} Đã bán
                </span>
              </div>
            </div>

            {/* Price */}
            <div style={{marginBottom: '30px'}}>
              <div className="d-flex align-items-baseline gap-3 mb-3">
                <span style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'var(--emerald-green)'
                }}>
                  {product.salePrice.toLocaleString()}₫
                </span>
                <span style={{
                  fontSize: '20px',
                  color: '#999',
                  textDecoration: 'line-through'
                }}>
                  {product.price.toLocaleString()}₫
                </span>
              </div>
              <p style={{color: '#666', lineHeight: '1.8', fontSize: '15px'}}>
                {product.description}
              </p>
            </div>

            {/* Characteristics */}
            <div style={{
              background: 'rgba(10, 61, 42, 0.05)',
              padding: '25px',
              borderRadius: '15px',
              border: '1px solid rgba(10, 61, 42, 0.1)',
              marginBottom: '30px'
            }}>
              <div className="row g-4">
                <div className="col-6">
                  <p style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--emerald-green)',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}>
                    Độ lưu hương
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{color: 'var(--soft-gold)', fontSize: '18px'}}>
                      {'★'.repeat(product.longevity)}
                    </div>
                    <span style={{fontSize: '14px', fontWeight: '600', color: '#555'}}>
                      Rất lâu (12h+)
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <p style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--emerald-green)',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}>
                    Độ tỏa hương
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{color: 'var(--soft-gold)', fontSize: '18px'}}>
                      {'★'.repeat(product.sillage)}
                      {'☆'.repeat(5 - product.sillage)}
                    </div>
                    <span style={{fontSize: '14px', fontWeight: '600', color: '#555'}}>
                      Xa (2m)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{marginBottom: '30px'}}>
              <div className="d-flex gap-3 mb-3">
                {/* Quantity */}
                <div className="d-flex align-items-center" style={{
                  border: '2px solid #e5e5e5',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: 'transparent',
                      fontSize: '18px',
                      cursor: 'pointer',
                      fontWeight: '700'
                    }}
                  >
                    -
                  </button>
                  <span style={{
                    padding: '12px 20px',
                    fontWeight: '700',
                    minWidth: '60px',
                    textAlign: 'center',
                    fontSize: '16px'
                  }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: 'transparent',
                      fontSize: '18px',
                      cursor: 'pointer',
                      fontWeight: '700'
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button 
                  onClick={() => setCartCount(cartCount + quantity)}
                  className="luxury-btn"
                  style={{
                    flex: 1,
                    padding: '15px',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{fontSize: '20px'}}>🛒</span>
                  THÊM VÀO GIỎ
                </button>
              </div>

              {/* Wholesale Button */}
              <button 
                onClick={() => setShowWholesale(!showWholesale)}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid var(--emerald-green)',
                  background: 'transparent',
                  color: 'var(--emerald-green)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--emerald-green)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--emerald-green)';
                }}
              >
                ĐẶT HÀNG SỈ (WHOLESALE)
              </button>

              {/* Wholesale Table */}
              {showWholesale && (
                <div style={{
                  marginTop: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e5e5'
                }}>
                  <table style={{width: '100%', fontSize: '14px'}}>
                    <thead style={{background: 'rgba(10, 61, 42, 0.05)'}}>
                      <tr>
                        <th style={{padding: '12px 15px', textAlign: 'left', fontWeight: '700', color: 'var(--emerald-green)'}}>
                          Số lượng
                        </th>
                        <th style={{padding: '12px 15px', textAlign: 'left', fontWeight: '700', color: 'var(--emerald-green)'}}>
                          Đơn giá
                        </th>
                        <th style={{padding: '12px 15px', textAlign: 'left', fontWeight: '700', color: 'var(--emerald-green)'}}>
                          Tiết kiệm
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{borderBottom: '1px solid #f5f5f5'}}>
                        <td style={{padding: '12px 15px'}}>50+ chai</td>
                        <td style={{padding: '12px 15px', fontWeight: '600'}}>2.450.000₫</td>
                        <td style={{padding: '12px 15px', color: '#22c55e', fontWeight: '600'}}>-25%</td>
                      </tr>
                      <tr style={{borderBottom: '1px solid #f5f5f5'}}>
                        <td style={{padding: '12px 15px'}}>100+ chai</td>
                        <td style={{padding: '12px 15px', fontWeight: '600'}}>1.950.000₫</td>
                        <td style={{padding: '12px 15px', color: '#22c55e', fontWeight: '600'}}>-40%</td>
                      </tr>
                      <tr>
                        <td style={{padding: '12px 15px'}}>300+ chai</td>
                        <td style={{padding: '12px 15px', fontWeight: '600', color: 'var(--emerald-green)'}}>
                          Liên hệ trực tiếp
                        </td>
                        <td style={{padding: '12px 15px', color: '#22c55e', fontWeight: '600'}}>VIP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scent Pyramid */}
        <section style={{marginTop: '100px'}}>
          <div className="text-center mb-5">
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 42px)',
              color: 'var(--emerald-green)',
              marginBottom: '15px',
              fontWeight: '700',
              letterSpacing: '-1px',
              textTransform: 'uppercase'
            }}>
              Scent Pyramid
            </h2>
            <div className="gold-divider" style={{width: '80px', margin: '0 auto'}}></div>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {/* Top Note */}
                <div style={{
                  background: 'rgba(10, 61, 42, 0.08)',
                  borderLeft: '4px solid var(--emerald-green)',
                  padding: '25px',
                  borderRadius: '0 15px 15px 0',
                  transform: 'translateX(50px)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(60px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(50px)'}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span style={{fontSize: '40px'}}>🌿</span>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--emerald-green)',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        marginBottom: '5px',
                        textTransform: 'uppercase'
                      }}>
                        Hương đầu (Top Notes)
                      </h4>
                      <p style={{color: '#666', margin: 0, fontSize: '15px'}}>
                        {product.notes.top}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heart Note */}
                <div style={{
                  background: 'rgba(10, 61, 42, 0.15)',
                  borderLeft: '4px solid var(--emerald-green)',
                  padding: '30px',
                  borderRadius: '0 15px 15px 0',
                  transform: 'translateX(25px)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(35px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(25px)'}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span style={{fontSize: '40px'}}>🌸</span>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--emerald-green)',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        marginBottom: '5px',
                        textTransform: 'uppercase'
                      }}>
                        Hương giữa (Heart Notes)
                      </h4>
                      <p style={{color: '#666', margin: 0, fontSize: '15px'}}>
                        {product.notes.heart}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Base Note */}
                <div style={{
                  background: 'rgba(10, 61, 42, 0.25)',
                  borderLeft: '4px solid var(--emerald-green)',
                  padding: '35px',
                  borderRadius: '0 15px 15px 0',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span style={{fontSize: '40px'}}>🌲</span>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--emerald-green)',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        marginBottom: '5px',
                        textTransform: 'uppercase'
                      }}>
                        Hương cuối (Base Notes)
                      </h4>
                      <p style={{color: '#666', margin: 0, fontSize: '15px'}}>
                        {product.notes.base}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '28px',
                color: 'var(--emerald-green)',
                marginBottom: '20px'
              }}>
                Cốt cách thượng lưu
              </h3>
              <p style={{color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '15px'}}>
                Cấu trúc tầng hương được thiết kế tinh vi để mang lại trải nghiệm đa chiều. 
                Những giây đầu tiên bùng nổ với sự sảng khoái của cam Bergamot, sau đó dần lắng xuống 
                và nhường chỗ cho trái tim ấm áp của Trầm hương huyền bí. Cuối cùng, Hổ phách và Xạ hương 
                sẽ vương vấn trên da thịt suốt cả ngày dài, tạo nên một dấu ấn cá nhân không thể nhầm lẫn.
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px'}}>
                  <span style={{color: 'var(--emerald-green)', fontSize: '20px'}}>✓</span>
                  Nguyên liệu cao cấp nhập khẩu từ Pháp & Ý
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px'}}>
                  <span style={{color: 'var(--emerald-green)', fontSize: '20px'}}>✓</span>
                  Công thức pha trộn thủ công bởi các chuyên gia
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section style={{marginTop: '100px', borderTop: '1px solid #e5e5e5', paddingTop: '60px'}}>
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 42px)',
                color: 'var(--emerald-green)',
                marginBottom: '15px',
                fontWeight: '700'
              }}>
                Đánh giá khách hàng
              </h2>
              <div className="d-flex align-items-center gap-4">
                <div style={{fontSize: '48px', fontWeight: '700', color: 'var(--emerald-green)'}}>
                  {product.rating}/5
                </div>
                <div>
                  <div style={{color: 'var(--soft-gold)', fontSize: '24px'}}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && '☆'}
                  </div>
                  <p style={{color: '#888', fontSize: '14px', margin: 0}}>
                    Dựa trên {product.reviews} đánh giá
                  </p>
                </div>
              </div>
            </div>
            <button className="luxury-btn" style={{padding: '12px 30px'}}>
              VIẾT ĐÁNH GIÁ
            </button>
          </div>

          <div className="row g-4">
            {reviews.map((review, index) => (
              <div key={index} className="col-md-6">
                <div style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: 'rgba(10, 61, 42, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        color: 'var(--emerald-green)',
                        fontSize: '16px'
                      }}>
                        {review.initial}
                      </div>
                      <div>
                        <p style={{fontWeight: '700', margin: 0, fontSize: '15px'}}>
                          {review.name}
                        </p>
                        <p style={{fontSize: '12px', color: '#888', margin: 0}}>
                          {review.date} • {review.verified && 'Đã mua hàng'}
                        </p>
                      </div>
                    </div>
                    <div style={{color: 'var(--soft-gold)', fontSize: '16px'}}>
                      {'★'.repeat(review.rating)}
                    </div>
                  </div>
                  <p style={{
                    color: '#555',
                    lineHeight: '1.7',
                    marginBottom: '15px',
                    fontStyle: 'italic',
                    fontSize: '14px'
                  }}>
                    "{review.comment}"
                  </p>
                  {review.images && (
                    <div className="d-flex gap-2">
                      {review.images.map((img, i) => (
                        <img 
                          key={i}
                          src={img}
                          alt="Review"
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <LuxuryFooter />
    </>
  );
}
