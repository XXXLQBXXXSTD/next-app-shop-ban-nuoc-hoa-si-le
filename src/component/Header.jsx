"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ cartCount = 0 }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="bg-white shadow-sm sticky-top">
            {/* Top Bar */}
            <div className="bg-dark text-white py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <small>📞 Hotline: 1900-xxxx | 📧 contact@perfumeshop.vn</small>
                        </div>
                        <div className="col-md-6 text-end">
                            <small>Miễn phí vận chuyển đơn từ 500k</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container py-3">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <Link href="/" className="text-decoration-none">
                            <h2 className="mb-0 text-dark">🌸 Perfume Shop</h2>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tìm kiếm nước hoa..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-primary">
                                🔍 Tìm kiếm
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-end">
                        <button className="btn btn-outline-dark me-2">
                            👤 Tài khoản
                        </button>
                        <button className="btn btn-dark position-relative">
                            🛒 Giỏ hàng
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products" className="nav-link">Nước hoa Nam</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products" className="nav-link">Nước hoa Nữ</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products" className="nav-link">Nước hoa Unisex</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/wholesale" className="nav-link">Bán sỉ</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link">Về chúng tôi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
