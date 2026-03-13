"use client"
import { useState } from 'react';

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            title: "Nước hoa cao cấp",
            subtitle: "Giảm giá đến 30% cho khách hàng mới",
            bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Bán sỉ giá tốt",
            subtitle: "Hỗ trợ đại lý toàn quốc",
            bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        }
    ];

    return (
        <div 
            className="text-white text-center py-5" 
            style={{
                background: slides[currentSlide].bg,
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="container">
                <h1 className="display-3 fw-bold mb-3">{slides[currentSlide].title}</h1>
                <p className="lead mb-4">{slides[currentSlide].subtitle}</p>
                <button className="btn btn-light btn-lg me-2">Mua ngay</button>
                <button className="btn btn-outline-light btn-lg">Xem thêm</button>
            </div>
        </div>
    );
}
