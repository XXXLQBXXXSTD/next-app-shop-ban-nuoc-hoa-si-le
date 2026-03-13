"use client"
import { useState } from "react";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    region: 'Miền Nam',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc.');
  };

  return (
    <>
      <LuxuryHeader />
      
      <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(10, 61, 42, 0.95) 0%, rgba(10, 61, 42, 0.85) 100%), url(https://fimgs.net/mdimg/perfume/375x500.42575.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          position: 'relative'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  background: 'rgba(197, 160, 89, 0.2)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  marginBottom: '25px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--soft-gold)',
                    animation: 'pulse 2s infinite'
                  }}></span>
                  <span style={{
                    color: 'var(--soft-gold)',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    CƠ HỘI HỢP TÁC B2B
                  </span>
                </div>

                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  color: 'white',
                  marginBottom: '25px',
                  fontWeight: '700',
                  lineHeight: '1.1'
                }}>
                  Nâng Tầm Kinh Doanh Với <span style={{color: 'var(--soft-gold)', fontStyle: 'italic'}}>Nước Hoa</span> Cao Cấp
                </h1>

                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '35px',
                  lineHeight: '1.7',
                  maxWidth: '600px'
                }}>
                  Cung cấp nguồn hàng nước hoa chính ngạch với chiết khấu lên đến 45%. 
                  Hỗ trợ đào tạo bán hàng, marketing và thiết kế cửa hàng cho đại lý.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <button className="luxury-btn" style={{padding: '16px 35px', fontSize: '16px'}}>
                    Xem bảng giá sỉ 2024 📊
                  </button>
                  <button className="luxury-btn-outline" style={{
                    padding: '16px 35px',
                    fontSize: '16px',
                    background: 'white',
                    borderColor: 'white',
                    color: 'var(--emerald-green)'
                  }}>
                    Đặt mẫu thử
                  </button>
                </div>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="d-flex" style={{marginLeft: '-10px'}}>
                    {[1,2,3].map((i) => (
                      <div key={i} style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '3px solid white',
                        background: 'var(--soft-gold)',
                        marginLeft: '-10px'
                      }}></div>
                    ))}
                  </div>
                  <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0, fontStyle: 'italic'}}>
                    +500 nhà bán lẻ đã tin dùng
                  </p>
                </div>
              </div>

              <div className="col-lg-5 mt-5 mt-lg-0">
                <div style={{position: 'relative'}}>
                  <div style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '25px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }}>
                    <img 
                      src="https://fimgs.net/mdimg/perfume/375x500.73669.jpg"
                      alt="Luxury Perfume Collection"
                      style={{
                        width: '100%',
                        aspectRatio: '4/5',
                        objectFit: 'cover',
                        borderRadius: '15px'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      left: '-20px',
                      background: 'white',
                      padding: '25px',
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      maxWidth: '180px'
                    }}>
                      <p style={{
                        color: 'var(--soft-gold)',
                        fontSize: '36px',
                        fontWeight: '700',
                        margin: 0,
                        lineHeight: '1'
                      }}>
                        45%
                      </p>
                      <p style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: 'var(--emerald-green)',
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Chiết khấu tối đa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{background: 'var(--emerald-green)', padding: '60px 0'}}>
          <div className="container">
            <div className="row text-center g-4">
              {[
                {number: '50+', label: 'Mùi hương độc bản'},
                {number: '12h+', label: 'Độ lưu hương lâu'},
                {number: '24h', label: 'Xử lý đơn hàng'},
                {number: 'Free', label: 'Giao hàng toàn quốc'}
              ].map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <p style={{
                    color: 'var(--soft-gold)',
                    fontSize: '42px',
                    fontWeight: '700',
                    marginBottom: '10px'
                  }}>
                    {stat.number}
                  </p>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section style={{padding: '100px 0', background: 'var(--cream-white)'}} id="pricing">
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: 'var(--emerald-green)',
                marginBottom: '15px',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                Bảng Giá Sỉ Theo Số Lượng
              </h2>
              <p style={{color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '16px'}}>
                Chúng tôi cung cấp lộ trình chiết khấu linh hoạt giúp tối ưu hóa lợi nhuận cho đối tác từ quy mô nhỏ đến lớn.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {/* Tier 1 */}
              <div className="col-md-4">
                <div style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid #e5e5e5',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--emerald-green)',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Gói Bắt Đầu
                  </h3>
                  <div style={{marginBottom: '25px'}}>
                    <span style={{fontSize: '48px', fontWeight: '700', color: 'var(--emerald-green)'}}>25%</span>
                    <span style={{color: '#999', marginLeft: '10px'}}>Chiết khấu</span>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px', flex: 1}}>
                    {[
                      'Tối thiểu từ 50 sản phẩm',
                      'Hỗ trợ hình ảnh marketing',
                      'Tư vấn chọn mùi bán chạy'
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                        color: '#666'
                      }}>
                        <span style={{color: 'var(--soft-gold)', fontSize: '20px'}}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid var(--emerald-green)',
                    background: 'transparent',
                    color: 'var(--emerald-green)',
                    borderRadius: '10px',
                    fontWeight: '700',
                    cursor: 'pointer',
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
                    Chọn gói này
                  </button>
                </div>
              </div>

              {/* Tier 2 - Featured */}
              <div className="col-md-4">
                <div style={{
                  background: 'var(--emerald-green)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '4px solid var(--soft-gold)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transform: 'scale(1.05)',
                  boxShadow: '0 20px 60px rgba(10, 61, 42, 0.3)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--soft-gold)',
                    color: 'var(--emerald-green)',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    PHỔ BIẾN NHẤT
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--soft-gold)',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Gói Đại Lý
                  </h3>
                  <div style={{marginBottom: '25px'}}>
                    <span style={{fontSize: '48px', fontWeight: '700', color: 'white'}}>35%</span>
                    <span style={{color: 'rgba(255,255,255,0.6)', marginLeft: '10px'}}>Chiết khấu</span>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px', flex: 1}}>
                    {[
                      'Từ 200 - 500 sản phẩm',
                      'Tặng kệ trưng bày cao cấp',
                      'Đào tạo kiến thức nước hoa',
                      'Hỗ trợ chạy quảng cáo khu vực'
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                        color: 'rgba(255,255,255,0.9)'
                      }}>
                        <span style={{color: 'var(--soft-gold)', fontSize: '20px'}}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: '100%',
                    padding: '16px',
                    border: 'none',
                    background: 'linear-gradient(135deg, var(--soft-gold) 0%, #e8d092 50%, var(--soft-gold) 100%)',
                    color: 'var(--emerald-green)',
                    borderRadius: '10px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '15px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 5px 20px rgba(197, 160, 89, 0.3)'
                  }}>
                    Liên hệ hợp tác
                  </button>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="col-md-4">
                <div style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid #e5e5e5',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--emerald-green)',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Gói Phân Phối
                  </h3>
                  <div style={{marginBottom: '25px'}}>
                    <span style={{fontSize: '48px', fontWeight: '700', color: 'var(--emerald-green)'}}>45%</span>
                    <span style={{color: '#999', marginLeft: '10px'}}>Chiết khấu</span>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px', flex: 1}}>
                    {[
                      'Trên 1000 sản phẩm',
                      'Độc quyền phân phối khu vực',
                      'Thiết kế showroom miễn phí',
                      'Thưởng doanh số quý/năm'
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                        color: '#666'
                      }}>
                        <span style={{color: 'var(--soft-gold)', fontSize: '20px'}}>★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid var(--emerald-green)',
                    background: 'transparent',
                    color: 'var(--emerald-green)',
                    borderRadius: '10px',
                    fontWeight: '700',
                    cursor: 'pointer',
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
                    Yêu cầu báo giá riêng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section style={{padding: '100px 0'}}>
          <div className="container">
            <div className="row g-0" style={{
              background: 'white',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              {/* Left Side - Info */}
              <div className="col-lg-5" style={{
                background: 'var(--emerald-green)',
                padding: '60px 50px',
                color: 'white'
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  marginBottom: '20px',
                  fontWeight: '700'
                }}>
                  Yêu Cầu Tư Vấn & Báo Giá
                </h2>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '40px',
                  lineHeight: '1.7'
                }}>
                  Để lại thông tin, đội ngũ chuyên viên của LUXE SCENT sẽ liên hệ với bạn trong vòng 2 giờ làm việc 
                  để tư vấn giải pháp kinh doanh tối ưu.
                </p>

                <div style={{marginBottom: '30px'}}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(197, 160, 89, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--soft-gold)',
                      fontSize: '24px'
                    }}>
                      📞
                    </div>
                    <div>
                      <p style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.5)',
                        margin: 0,
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>
                        HOTLINE B2B
                      </p>
                      <p style={{fontSize: '18px', fontWeight: '700', margin: 0}}>
                        1900 6789 (Nhánh 2)
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(197, 160, 89, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--soft-gold)',
                      fontSize: '24px'
                    }}>
                      📧
                    </div>
                    <div>
                      <p style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.5)',
                        margin: 0,
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>
                        EMAIL PHÂN PHỐI
                      </p>
                      <p style={{fontSize: '18px', fontWeight: '700', margin: 0}}>
                        wholesale@luxescent.vn
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '50px',
                  padding: '25px',
                  borderRadius: '15px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: '15px',
                    lineHeight: '1.6'
                  }}>
                    "Quyết định nhập sỉ tại LUXE SCENT là bước ngoặt cho cửa hàng của tôi. 
                    Doanh thu tăng 200% sau 3 tháng."
                  </p>
                  <p style={{
                    color: 'var(--soft-gold)',
                    fontSize: '12px',
                    fontWeight: '700',
                    margin: 0,
                    letterSpacing: '0.5px'
                  }}>
                    — CHỊ LAN ANH, CHỦ CHUỖI MỸ PHẨM TẠI TP.HCM
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="col-lg-7" style={{padding: '60px 50px'}}>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <label style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        color: 'var(--emerald-green)',
                        marginBottom: '8px',
                        display: 'block',
                        letterSpacing: '0.5px'
                      }}>
                        HỌ VÀ TÊN *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Nguyễn Văn A"
                        style={{
                          width: '100%',
                          padding: '14px',
                          border: '1px solid #e5e5e5',
                          borderRadius: '10px',
                          fontSize: '15px',
                          background: '#f9f9f9'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        color: 'var(--emerald-green)',
                        marginBottom: '8px',
                        display: 'block',
                        letterSpacing: '0.5px'
                      }}>
                        SỐ ĐIỆN THOẠI *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0901 234 xxx"
                        style={{
                          width: '100%',
                          padding: '14px',
                          border: '1px solid #e5e5e5',
                          borderRadius: '10px',
                          fontSize: '15px',
                          background: '#f9f9f9'
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: 'var(--emerald-green)',
                      marginBottom: '8px',
                      display: 'block',
                      letterSpacing: '0.5px'
                    }}>
                      TÊN DOANH NGHIỆP / CỬA HÀNG
                    </label>
                    <input 
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      placeholder="Luxe Beauty Store"
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '10px',
                        fontSize: '15px',
                        background: '#f9f9f9'
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: 'var(--emerald-green)',
                      marginBottom: '8px',
                      display: 'block',
                      letterSpacing: '0.5px'
                    }}>
                      KHU VỰC KINH DOANH
                    </label>
                    <select 
                      value={formData.region}
                      onChange={(e) => setFormData({...formData, region: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '10px',
                        fontSize: '15px',
                        background: '#f9f9f9'
                      }}
                    >
                      <option>Miền Bắc</option>
                      <option>Miền Trung</option>
                      <option>Miền Nam</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: 'var(--emerald-green)',
                      marginBottom: '8px',
                      display: 'block',
                      letterSpacing: '0.5px'
                    }}>
                      NỘI DUNG YÊU CẦU
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tôi muốn nhận báo giá sỉ cho 100 sản phẩm..."
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '10px',
                        fontSize: '15px',
                        background: '#f9f9f9',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <button 
                      type="submit"
                      className="luxury-btn"
                      style={{width: '100%', padding: '16px', fontSize: '15px'}}
                    >
                      Gửi yêu cầu báo giá
                    </button>
                    <button 
                      type="button"
                      style={{
                        width: '100%',
                        padding: '16px',
                        border: '2px solid #e5e5e5',
                        background: 'transparent',
                        color: 'var(--emerald-green)',
                        borderRadius: '10px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                      }}
                    >
                      <span style={{fontSize: '20px'}}>🧪</span>
                      Đăng ký nhận bộ mẫu thử (Free Trial Kit)
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section style={{padding: '100px 0', background: 'white'}}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 42px)',
                color: 'var(--emerald-green)',
                marginBottom: '15px',
                fontWeight: '700'
              }}>
                Câu Chuyện Thành Công
              </h2>
              <p style={{color: '#666', fontSize: '16px'}}>
                Hành trình phát triển cùng mạng lưới đối tác rộng khắp cả nước.
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  name: 'Anh Minh Tuấn',
                  role: 'Chủ đại lý tại Đà Nẵng',
                  comment: 'Chất lượng mùi hương của LUXE SCENT cực kỳ ổn định, khách hàng quay lại mua rất nhiều. Dịch vụ hỗ trợ của team B2B vô cùng chuyên nghiệp.'
                },
                {
                  name: 'Chị Thu Thủy',
                  role: 'Boutique Owner, Hà Nội',
                  comment: 'Sản phẩm có bao bì sang trọng, dễ bán. Đặc biệt là chính sách đổi trả hàng linh hoạt giúp tôi yên tâm khi nhập số lượng lớn.'
                },
                {
                  name: 'Anh Hoàng Nam',
                  role: 'Nhà phân phối miền Tây',
                  comment: 'Từ khi hợp tác với LUXE SCENT, tôi được hỗ trợ thiết kế quầy kệ rất đẹp, thu hút được nhiều khách cao cấp hơn hẳn.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="col-md-4">
                  <div style={{
                    padding: '35px',
                    borderRadius: '20px',
                    background: 'var(--cream-white)',
                    border: '1px solid rgba(10, 61, 42, 0.05)',
                    height: '100%'
                  }}>
                    <div className="d-flex gap-1 mb-3" style={{color: 'var(--soft-gold)', fontSize: '18px'}}>
                      {'★★★★★'}
                    </div>
                    <p style={{
                      color: '#555',
                      fontStyle: 'italic',
                      marginBottom: '25px',
                      lineHeight: '1.7',
                      fontSize: '15px'
                    }}>
                      "{testimonial.comment}"
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(10, 61, 42, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        color: 'var(--emerald-green)',
                        fontSize: '18px'
                      }}>
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[testimonial.name.split(' ').length - 1][0]}
                      </div>
                      <div>
                        <p style={{fontWeight: '700', color: 'var(--emerald-green)', margin: 0, fontSize: '15px'}}>
                          {testimonial.name}
                        </p>
                        <p style={{
                          fontSize: '12px',
                          color: '#999',
                          margin: 0,
                          fontWeight: '600',
                          letterSpacing: '0.3px'
                        }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LuxuryFooter />
    </>
  );
}
