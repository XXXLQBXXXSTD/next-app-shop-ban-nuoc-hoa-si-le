"use client"
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";

export default function FavoritePage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  const [priceType, setPriceType] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const togglePriceType = (id, type) => {
    setPriceType({...priceType, [id]: type});
  };

  return (
    <>
      <LuxuryHeader />
      
      <main style={{padding: '40px 24px', minHeight: '70vh'}}>
        <div className="container" style={{maxWidth: '1400px'}}>
          {/* Page Title Section */}
          <div className="row justify-content-between align-items-end g-4 mb-5">
            <div className="col-lg-8">
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '900',
                lineHeight: '1.2',
                letterSpacing: '-1px',
                color: 'var(--emerald-green)',
                marginBottom: '16px',
                fontFamily: 'var(--font-heading)'
              }}>
                Danh sách yêu thích của bạn
              </h1>
              <p style={{
                color: '#888',
                fontSize: '18px',
                fontWeight: '400',
                maxWidth: '700px'
              }}>
                {wishlistItems.length === 0 
                  ? 'Danh sách yêu thích của bạn đang trống. Hãy thêm những mùi hương yêu thích!'
                  : 'Lưu trữ những mùi hương đẳng cấp và tinh tế nhất dành riêng cho bạn. Hãy biến chúng thành hiện thực ngay hôm nay.'
                }
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div style={{
                display: 'inline-flex',
                background: 'rgba(10, 61, 42, 0.05)',
                padding: '4px',
                borderRadius: '10px'
              }}>
                <button style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: 'var(--emerald-green)',
                  color: 'white',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  boxShadow: '0 2px 8px rgba(10, 61, 42, 0.2)',
                  cursor: 'pointer'
                }}>
                  Tất cả ({wishlistItems.length})
                </button>
                <button style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: 'rgba(10, 61, 42, 0.6)',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}>
                  Mới thêm
                </button>
              </div>
            </div>
          </div>

          {/* Wishlist Grid */}
          {wishlistItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 24px',
              background: 'rgba(10, 61, 42, 0.03)',
              borderRadius: '20px',
              marginBottom: '40px'
            }}>
              <div style={{fontSize: '80px', marginBottom: '24px'}}>💝</div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--emerald-green)',
                marginBottom: '16px'
              }}>
                Chưa có sản phẩm yêu thích
              </h3>
              <p style={{color: '#888', marginBottom: '32px'}}>
                Khám phá và thêm những mùi hương tuyệt vời vào danh sách của bạn
              </p>
              <a href="/shop">
                <button className="luxury-btn">
                  Khám phá ngay
                </button>
              </a>
            </div>
          ) : (
            <div className="row g-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3">
                <div className="hover-scale" style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(10, 61, 42, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'}
                >
                  <div style={{position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', borderRadius: '12px'}}>
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      zIndex: 10
                    }}>
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        style={{
                          background: 'rgba(255,255,255,0.9)',
                          backdropFilter: 'blur(10px)',
                          padding: '8px',
                          borderRadius: '50%',
                          color: '#ef4444',
                          border: 'none',
                          cursor: 'pointer',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#ef4444';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                          e.currentTarget.style.color = '#ef4444';
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    <img 
                      alt={item.name}
                      src={item.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '16px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                      transform: 'translateY(100%)',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <button style={{
                        width: '100%',
                        background: 'white',
                        color: 'var(--emerald-green)',
                        fontWeight: '700',
                        padding: '10px',
                        borderRadius: '10px',
                        border: 'none',
                        fontSize: '14px',
                        cursor: 'pointer'
                      }}>
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px', flex: 1}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--emerald-green)',
                        margin: 0
                      }}>
                        {item.name}
                      </h3>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--emerald-green)',
                        background: 'rgba(10, 61, 42, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '6px'
                      }}>
                        {item.category}
                      </span>
                    </div>
                    <p style={{
                      color: 'var(--emerald-green)',
                      fontWeight: '700',
                      fontSize: '20px',
                      margin: '8px 0'
                    }}>
                      {item.price.toLocaleString()}₫
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '8px'
                    }}>
                      <span style={{fontSize: '12px', fontWeight: '500', color: '#888'}}>
                        Phân loại:
                      </span>
                      <div style={{
                        display: 'flex',
                        background: 'rgba(10, 61, 42, 0.05)',
                        borderRadius: '20px',
                        padding: '2px'
                      }}>
                        <button 
                          onClick={() => togglePriceType(item.id, 'retail')}
                          style={{
                            padding: '6px 12px',
                            fontSize: '10px',
                            fontWeight: '700',
                            borderRadius: '18px',
                            background: (priceType[item.id] || item.type) === 'retail' ? 'white' : 'transparent',
                            color: (priceType[item.id] || item.type) === 'retail' ? 'var(--emerald-green)' : '#888',
                            border: 'none',
                            boxShadow: (priceType[item.id] || item.type) === 'retail' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          Bán lẻ
                        </button>
                        <button 
                          onClick={() => togglePriceType(item.id, 'wholesale')}
                          style={{
                            padding: '6px 12px',
                            fontSize: '10px',
                            fontWeight: '700',
                            borderRadius: '18px',
                            background: (priceType[item.id] || item.type) === 'wholesale' ? 'white' : 'transparent',
                            color: (priceType[item.id] || item.type) === 'wholesale' ? 'var(--emerald-green)' : '#888',
                            border: 'none',
                            boxShadow: (priceType[item.id] || item.type) === 'wholesale' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          Bán sỉ
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      background: 'var(--emerald-green)',
                      color: 'white',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0d5738'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--emerald-green)'}
                  >
                    <span style={{fontSize: '20px'}}>🛒</span>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Empty State Suggestion */}
          <div style={{
            marginTop: '80px',
            textAlign: 'center',
            padding: '48px 24px',
            borderTop: '1px solid rgba(10, 61, 42, 0.1)'
          }}>
            <p style={{color: '#888', marginBottom: '24px', fontSize: '16px'}}>
              Bạn chưa tìm thấy mùi hương ưng ý khác?
            </p>
            <a 
              href="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--emerald-green)',
                fontWeight: '700',
                borderBottom: '2px solid var(--emerald-green)',
                textDecoration: 'none',
                paddingBottom: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'transparent'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--emerald-green)'}
            >
              Tiếp tục khám phá cửa hàng
              <span style={{fontSize: '20px'}}>→</span>
            </a>
          </div>
        </div>
      </main>

      <LuxuryFooter />
    </>
  );
}
