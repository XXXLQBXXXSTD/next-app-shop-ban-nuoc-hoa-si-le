"use client"
import Link from 'next/link';
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";

export default function CollectionsPage() {
  const seasons = [
    {
      id: 'spring',
      name: 'Xuân',
      nameEn: 'Spring',
      subtitle: 'Giai đoạn chuyển mình',
      description: 'Sự bùng nổ của hoa anh đào và cỏ xanh mới nhú. Những nốt hương phấn nhẹ nhàng, thuần khiết như hơi thở buổi sớm.',
      image: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg',
      color: '#FFB6C1'
    },
    {
      id: 'summer',
      name: 'Hạ',
      nameEn: 'Summer',
      subtitle: 'Năng lượng rực rỡ',
      description: 'Tươi mát với cam Bergamot, quýt mọng và hương muối biển mặn mà. Khơi gợi tinh thần tự do dưới ánh nắng vàng.',
      image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg',
      color: '#FFA500'
    },
    {
      id: 'autumn',
      name: 'Thu',
      nameEn: 'Autumn',
      subtitle: 'Hoài niệm tĩnh lặng',
      description: 'Ấm áp với hổ phách, gỗ tuyết tùng và lá khô. Một bản giao hưởng nồng nàn, sâu lắng dành cho những tâm hồn mơ mộng.',
      image: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg',
      color: '#D2691E'
    },
    {
      id: 'winter',
      name: 'Đông',
      nameEn: 'Winter',
      subtitle: 'Huyền bí quyến rũ',
      description: 'Sâu đậm với xạ hương, trầm và gia vị phương đông. Hương thơm bao bọc, quyền quý giữa cái lạnh giá băng.',
      image: 'https://fimgs.net/mdimg/perfume/375x500.73669.jpg',
      color: '#4682B4'
    }
  ];

  return (
    <>
      <LuxuryHeader cartCount={0} />
      
      <main>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(10, 61, 42, 0.9), rgba(10, 61, 42, 0.7)), url(https://fimgs.net/mdimg/perfume/375x500.42575.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(10, 61, 42, 0.2), rgba(246, 248, 247, 0.8))',
            backdropFilter: 'blur(4px)'
          }}></div>
          
          <div className="container text-center" style={{position: 'relative', zIndex: 10}}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '25px',
              background: 'var(--emerald-green)',
              color: 'white',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              The seasonal experience
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '25px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Bộ Sưu Tập Theo Mùa
            </h1>
            <p style={{
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.7',
              fontStyle: 'italic'
            }}>
              "Hành trình khám phá những nốt hương tinh tế, được tinh tuyển để hòa quyện hoàn hảo với từng khoảnh khắc của thời gian."
            </p>
          </div>
        </section>

        {/* Seasonal Grid */}
        <section style={{maxWidth: '1400px', margin: '0 auto', padding: '100px 20px'}}>
          <div className="text-center mb-5">
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 42px)',
              color: 'var(--emerald-green)',
              marginBottom: '15px',
              fontWeight: '700'
            }}>
              Giai Điệu Bốn Mùa
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'var(--emerald-green)',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div className="row g-4 mt-5">
            {seasons.map((season) => (
              <div key={season.id} className="col-md-6">
                <Link href={`/collections/${season.id}`} style={{textDecoration: 'none'}}>
                  <div className="group" style={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${season.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 1s ease'
                    }}
                    className="group-hover:scale-110"
                    ></div>
                    
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(0deg, rgba(10, 61, 43, 0.9) 0%, rgba(10, 61, 43, 0) 60%)',
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease'
                    }}
                    className="group-hover:opacity-90"
                    ></div>

                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '40px'
                    }}>
                      <span style={{
                        color: season.color,
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '10px'
                      }}>
                        {season.subtitle}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '42px',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '15px',
                        fontStyle: 'italic'
                      }}>
                        {season.name} ({season.nameEn})
                      </h3>
                      <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '25px',
                        maxWidth: '450px',
                        lineHeight: '1.6',
                        fontSize: '15px',
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.5s ease'
                      }}
                      className="group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        {season.description}
                      </p>
                      <button style={{
                        width: 'fit-content',
                        padding: '14px 30px',
                        background: 'white',
                        color: 'var(--emerald-green)',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: '700',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--emerald-green)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--emerald-green)';
                      }}
                      >
                        Khám phá BST {season.name}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'rgba(10, 61, 42, 0.05)',
          padding: '80px 20px',
          borderTop: '1px solid rgba(10, 61, 42, 0.1)',
          borderBottom: '1px solid rgba(10, 61, 42, 0.1)'
        }}>
          <div className="container text-center" style={{maxWidth: '900px'}}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: 'var(--emerald-green)',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              Bạn chưa biết chọn mùi hương nào?
            </h2>
            <p style={{
              color: '#666',
              marginBottom: '35px',
              fontSize: '16px',
              lineHeight: '1.7'
            }}>
              Hãy để chúng tôi tư vấn mùi hương riêng biệt dựa trên sở thích và phong cách của bạn.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="luxury-btn" style={{padding: '16px 35px'}}>
                Làm Quiz Tìm Mùi Hương
              </button>
              <button className="luxury-btn-outline" style={{padding: '16px 35px'}}>
                Nhận Catalog Miễn Phí
              </button>
            </div>
          </div>
        </section>
      </main>

      <LuxuryFooter />
    </>
  );
}
