export default function LuxuryFooter() {
    return (
        <footer style={{background: 'var(--emerald-green)', color: 'white', marginTop: '80px'}}>
            {/* Newsletter */}
            <div style={{background: 'var(--soft-gold)', padding: '50px 0'}}>
                <div className="container text-center">
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '32px',
                        color: 'white',
                        marginBottom: '15px'
                    }}>
                        Đăng Ký Nhận Ưu Đãi
                    </h3>
                    <p style={{color: 'white', marginBottom: '30px'}}>
                        Nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Nhập email của bạn..."
                                    style={{
                                        padding: '15px 20px',
                                        border: 'none',
                                        borderRadius: '30px 0 0 30px'
                                    }}
                                />
                                <button 
                                    className="btn"
                                    style={{
                                        background: 'var(--emerald-green)',
                                        color: 'white',
                                        padding: '15px 30px',
                                        border: 'none',
                                        borderRadius: '0 30px 30px 0',
                                        fontWeight: '600'
                                    }}
                                >
                                    ĐĂNG KÝ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '28px',
                            letterSpacing: '2px',
                            marginBottom: '15px'
                        }}>
                            LUXE SCENT
                        </h4>
                        <p style={{fontSize: '14px', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)'}}>
                            Thương hiệu nước hoa cao cấp Việt Nam, mang đến những hương thơm tinh tế, 
                            sang trọng và lưu hương lâu dài. Chúng tôi tự hào là đối tác tin cậy của 
                            hàng ngàn khách hàng và đại lý trên toàn quốc.
                        </p>
                        <div className="mt-3">
                            <a href="#" className="me-3" style={{fontSize: '24px'}}>📘</a>
                            <a href="#" className="me-3" style={{fontSize: '24px'}}>📷</a>
                            <a href="#" className="me-3" style={{fontSize: '24px'}}>🎵</a>
                            <a href="#" style={{fontSize: '24px'}}>📺</a>
                        </div>
                    </div>
                    
                    <div className="col-md-2">
                        <h6 style={{fontWeight: '600', marginBottom: '20px', fontSize: '16px'}}>
                            Danh Mục
                        </h6>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Nước hoa Nam
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Nước hoa Nữ
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Nước hoa Unisex
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Bộ sưu tập
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3">
                        <h6 style={{fontWeight: '600', marginBottom: '20px', fontSize: '16px'}}>
                            Chính Sách
                        </h6>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Điều khoản sử dụng
                                </a>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                <a href="#" style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                                    Hướng dẫn mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3">
                        <h6 style={{fontWeight: '600', marginBottom: '20px', fontSize: '16px'}}>
                            Liên Hệ
                        </h6>
                        <ul style={{listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>
                            <li style={{marginBottom: '12px'}}>
                                📍 123 Đường Lê Lợi, Q.1, TP.HCM
                            </li>
                            <li style={{marginBottom: '12px'}}>
                                📞 Hotline: 1900-LUXE (5893)
                            </li>
                            <li style={{marginBottom: '12px'}}>
                                📧 hello@luxescent.vn
                            </li>
                            <li style={{marginBottom: '12px'}}>
                                🕐 8:00 - 22:00 (Tất cả các ngày)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <small style={{color: 'rgba(255,255,255,0.6)'}}>
                                © 2024 LUXE SCENT. All rights reserved.
                            </small>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <small style={{color: 'rgba(255,255,255,0.6)'}}>
                                💳 Thanh toán: VNPay • Momo • COD • Visa/Master
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
