"use client"
import { useState } from "react";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";

export default function CartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Signature Gold",
      volume: "50ml",
      type: "Eau de Parfum",
      price: 1250000,
      quantity: 1,
      image: "https://fimgs.net/mdimg/perfume/375x500.42575.jpg"
    },
    {
      id: 2,
      name: "Velvet Rose",
      volume: "200g",
      type: "Soy Wax Candle",
      price: 450000,
      quantity: 1,
      image: "https://fimgs.net/mdimg/perfume/375x500.7955.jpg"
    }
  ]);

  const [shippingFee, setShippingFee] = useState(35000);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('card');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingFee - discount;

  const steps = [
    {number: 1, label: 'Giỏ hàng', icon: 'shopping_cart'},
    {number: 2, label: 'Địa chỉ', icon: 'location_on'},
    {number: 3, label: 'Vận chuyển', icon: 'local_shipping'},
    {number: 4, label: 'Thanh toán', icon: 'payment'}
  ];

  return (
    <>
      <LuxuryHeader cartCount={cartItems.length} />
      
      <main style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
        {/* Progress Steps */}
        <div style={{marginBottom: '50px'}}>
          <div style={{position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
            {/* Progress Line */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: 0,
              width: '100%',
              height: '2px',
              background: 'rgba(10, 61, 42, 0.1)'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '16px',
              left: 0,
              width: `${((currentStep - 1) / 3) * 100}%`,
              height: '2px',
              background: 'var(--emerald-green)',
              transition: 'width 0.5s ease'
            }}></div>

            {steps.map((step) => (
              <div key={step.number} style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                zIndex: 1
              }}>
                <div style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  background: currentStep >= step.number ? 'var(--emerald-green)' : 'rgba(10, 61, 42, 0.1)',
                  color: currentStep >= step.number ? 'white' : '#999',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '14px',
                  border: '4px solid var(--cream-white)',
                  transition: 'all 0.3s ease'
                }}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: currentStep >= step.number ? '700' : '500',
                  color: currentStep >= step.number ? 'var(--emerald-green)' : '#999'
                }}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Cart Items */}
            <section style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '25px',
              border: '1px solid rgba(10, 61, 42, 0.1)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--emerald-green)',
                marginBottom: '25px'
              }}>
                Giỏ hàng của bạn ({cartItems.length} sản phẩm)
              </h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: '20px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(10, 61, 42, 0.1)'
                  }}>
                    <img 
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        background: 'rgba(10, 61, 42, 0.05)'
                      }}
                    />
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h3 style={{fontSize: '16px', fontWeight: '600', marginBottom: '5px'}}>
                            {item.name}
                          </h3>
                          <p style={{fontSize: '14px', color: '#888', margin: 0}}>
                            {item.volume} | {item.type}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            color: '#999',
                            cursor: 'pointer',
                            fontSize: '20px'
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          border: '1px solid rgba(10, 61, 42, 0.2)',
                          borderRadius: '25px',
                          padding: '5px 10px'
                        }}>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: '25px',
                              height: '25px',
                              borderRadius: '50%',
                              border: 'none',
                              background: 'transparent',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            -
                          </button>
                          <input 
                            type="number"
                            value={item.quantity}
                            readOnly
                            style={{
                              width: '35px',
                              border: 'none',
                              textAlign: 'center',
                              fontSize: '14px',
                              fontWeight: '600'
                            }}
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '25px',
                              height: '25px',
                              borderRadius: '50%',
                              border: 'none',
                              background: 'transparent',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: 'var(--emerald-green)',
                          margin: 0
                        }}>
                          {(item.price * item.quantity).toLocaleString()}₫
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Shipping Calculator */}
            <section style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '25px',
              border: '1px solid rgba(10, 61, 42, 0.1)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <span style={{fontSize: '24px'}}>🚚</span>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--emerald-green)',
                  margin: 0
                }}>
                  Tính phí vận chuyển
                </h2>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#888',
                    marginBottom: '8px',
                    display: 'block',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Tỉnh / Thành phố
                  </label>
                  <select className="form-select" style={{
                    border: '1px solid rgba(10, 61, 42, 0.2)',
                    borderRadius: '10px',
                    padding: '12px',
                    fontSize: '14px'
                  }}>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#888',
                    marginBottom: '8px',
                    display: 'block',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Quận / Huyện
                  </label>
                  <select className="form-select" style={{
                    border: '1px solid rgba(10, 61, 42, 0.2)',
                    borderRadius: '10px',
                    padding: '12px',
                    fontSize: '14px'
                  }}>
                    <option>Quận 1</option>
                    <option>Quận 3</option>
                    <option>Quận 7</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(10, 61, 42, 0.1)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <span style={{fontSize: '24px'}}>💳</span>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--emerald-green)',
                  margin: 0
                }}>
                  Phương thức thanh toán
                </h2>
              </div>

              <div className="row g-3">
                {/* MoMo */}
                <div className="col-sm-6">
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    border: selectedPayment === 'momo' ? '2px solid var(--emerald-green)' : '1px solid #e5e5e5',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: selectedPayment === 'momo' ? 'rgba(10, 61, 42, 0.05)' : 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="radio"
                      name="payment"
                      value="momo"
                      checked={selectedPayment === 'momo'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      style={{accentColor: 'var(--emerald-green)'}}
                    />
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '8px',
                      background: '#A50064',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: '700'
                    }}>
                      MoMo
                    </div>
                    <span style={{fontSize: '14px', fontWeight: '600'}}>Ví MoMo</span>
                  </label>
                </div>

                {/* VNPay */}
                <div className="col-sm-6">
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    border: selectedPayment === 'vnpay' ? '2px solid var(--emerald-green)' : '1px solid #e5e5e5',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: selectedPayment === 'vnpay' ? 'rgba(10, 61, 42, 0.05)' : 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="radio"
                      name="payment"
                      value="vnpay"
                      checked={selectedPayment === 'vnpay'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      style={{accentColor: 'var(--emerald-green)'}}
                    />
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '8px',
                      background: '#005baa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: '700'
                    }}>
                      VNPay
                    </div>
                    <span style={{fontSize: '14px', fontWeight: '600'}}>VNPay / QR Code</span>
                  </label>
                </div>

                {/* Credit Card */}
                <div className="col-sm-6">
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    border: selectedPayment === 'card' ? '2px solid var(--emerald-green)' : '1px solid #e5e5e5',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: selectedPayment === 'card' ? 'rgba(10, 61, 42, 0.05)' : 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === 'card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      style={{accentColor: 'var(--emerald-green)'}}
                    />
                    <span style={{fontSize: '24px'}}>💳</span>
                    <span style={{fontSize: '14px', fontWeight: '600'}}>Thẻ tín dụng / Ghi nợ</span>
                  </label>
                </div>
              </div>

              {/* Notice about COD */}
              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(197, 160, 89, 0.1)',
                border: '1px solid rgba(197, 160, 89, 0.2)',
                borderRadius: '10px',
                display: 'flex',
                gap: '10px'
              }}>
                <span style={{fontSize: '18px'}}>ℹ️</span>
                <p style={{
                  fontSize: '13px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}>
                  Mong quý khách thông cảm, do giá trị mặt hàng cao nên chúng tôi không hỗ trợ phương thức thanh toán khi nhận hàng (COD).
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="col-lg-4">
            <div style={{position: 'sticky', top: '100px'}}>
              <section style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(10, 61, 42, 0.1)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                marginBottom: '20px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--emerald-green)',
                  marginBottom: '25px'
                }}>
                  Tổng đơn hàng
                </h2>

                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                  <div className="d-flex justify-content-between" style={{fontSize: '14px'}}>
                    <span style={{color: '#888'}}>Tạm tính</span>
                    <span style={{fontWeight: '600'}}>{subtotal.toLocaleString()}₫</span>
                  </div>
                  <div className="d-flex justify-content-between" style={{fontSize: '14px'}}>
                    <span style={{color: '#888'}}>Phí vận chuyển</span>
                    <span style={{fontWeight: '600'}}>{shippingFee.toLocaleString()}₫</span>
                  </div>
                  <div className="d-flex justify-content-between" style={{fontSize: '14px'}}>
                    <span style={{color: '#888'}}>Giảm giá</span>
                    <span style={{fontWeight: '600', color: '#22c55e'}}>-{discount.toLocaleString()}₫</span>
                  </div>

                  <div style={{height: '1px', background: 'rgba(10, 61, 42, 0.1)', margin: '10px 0'}}></div>

                  <div className="d-flex justify-content-between align-items-baseline">
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'var(--emerald-green)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Tổng cộng
                    </span>
                    <span style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: 'var(--emerald-green)'
                    }}>
                      {total.toLocaleString()}₫
                    </span>
                  </div>

                  <div style={{marginTop: '20px'}}>
                    <div className="d-flex gap-2 mb-3">
                      <input 
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Mã giảm giá"
                        style={{
                          flex: 1,
                          padding: '12px',
                          border: '1px solid rgba(10, 61, 42, 0.2)',
                          borderRadius: '10px',
                          fontSize: '14px'
                        }}
                      />
                      <button style={{
                        padding: '12px 20px',
                        background: 'rgba(10, 61, 42, 0.1)',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'var(--emerald-green)',
                        fontWeight: '700',
                        fontSize: '14px',
                        cursor: 'pointer'
                      }}>
                        Áp dụng
                      </button>
                    </div>

                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="luxury-btn"
                      style={{
                        width: '100%',
                        padding: '16px',
                        fontSize: '14px',
                        letterSpacing: '1px'
                      }}
                    >
                      TIẾP TỤC THANH TOÁN
                    </button>

                    <p style={{
                      textAlign: 'center',
                      fontSize: '11px',
                      color: '#999',
                      marginTop: '15px',
                      lineHeight: '1.5'
                    }}>
                      Bằng việc nhấn Thanh toán, bạn đồng ý với Điều khoản mua hàng của Luxe Scent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Trust Badges */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                background: 'rgba(10, 61, 42, 0.05)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid rgba(10, 61, 42, 0.05)'
              }}>
                {[
                  {icon: '🔒', text: 'Thanh toán bảo mật SSL 256-bit'},
                  {icon: '🔄', text: 'Đổi trả miễn phí trong 7 ngày'},
                  {icon: '✓', text: 'Cam kết 100% hàng chính hãng'}
                ].map((badge, index) => (
                  <div key={index} className="d-flex align-items-center gap-2">
                    <span style={{fontSize: '18px'}}>{badge.icon}</span>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--emerald-green)'
                    }}>
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <LuxuryFooter />
    </>
  );
}
