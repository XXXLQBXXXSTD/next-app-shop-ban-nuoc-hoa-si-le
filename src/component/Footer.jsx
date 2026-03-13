export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5>🌸 Perfume Shop</h5>
                        <p className="text-muted">
                            Chuyên cung cấp nước hoa chính hãng, 
                            giá tốt nhất thị trường. Hỗ trợ bán sỉ 
                            cho đại lý toàn quốc.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h6>Danh mục</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">Nước hoa Nam</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Nước hoa Nữ</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Nước hoa Unisex</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Bán sỉ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Chính sách</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">Chính sách đổi trả</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Chính sách bảo mật</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Điều khoản sử dụng</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Hướng dẫn mua hàng</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Liên hệ</h6>
                        <ul className="list-unstyled text-muted">
                            <li>📍 123 Đường ABC, Q.1, TP.HCM</li>
                            <li>📞 Hotline: 1900-xxxx</li>
                            <li>📧 contact@perfumeshop.vn</li>
                            <li className="mt-3">
                                <a href="#" className="text-white me-2">📘</a>
                                <a href="#" className="text-white me-2">📷</a>
                                <a href="#" className="text-white">🎵</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black py-3">
                <div className="container text-center text-muted">
                    <small>© 2024 Perfume Shop. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}
