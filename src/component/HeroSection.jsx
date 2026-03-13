"use client"
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            title: "NƯỚC HOA CAO CẤP",
            subtitle: "Hương Thơm Vĩnh Cửu",
            description: "Khám phá bộ sưu tập nước hoa sang trọng, lưu hương lâu dài",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200"
        },
        {
            title: "BÁN SỈ GIÁ TỐT",
            subtitle: "Đối Tác Tin Cậy",
            description: "Chương trình bán sỉ hấp dẫn cho đại lý toàn quốc",
            image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="position-relative" style={{height: '90vh', overflow: 'hidden'}}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(rgba(10, 61, 42, 0.4), rgba(10, 61, 42, 0.6)), url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div className="container text-center text-white fade-in">
                        <p style={{
                            fontSize: '16px',
                            letterSpacing: '4px',
                            fontWeight: '300',
                            marginBottom: '20px',
                            color: 'var(--soft-gold)'
                        }}>
                            {slide.subtitle}
                        </p>
                        <h1 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(40px, 8vw, 80px)',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '3px'
                        }}>
                            {slide.title}
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            margin: '0 auto 40px'
                        }}>
                            {slide.description}
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <button className="luxury-btn">
                                MUA LẺ NGAY
                            </button>
                            <button className="luxury-btn-outline">
                                ĐĂNG KÝ BÁN SỈ
                            </button>
                        </div>
                    </div>
                    
                    {/* Scent Particles */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="scent-particle"
                            style={{
                                left: `${20 + i * 10}%`,
                                bottom: '10%',
                                animationDelay: `${i * 0.5}s`
                            }}
                        />
                    ))}
                </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <div className="d-flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                width: currentSlide === index ? '40px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                border: 'none',
                                background: currentSlide === index ? 'var(--soft-gold)' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
