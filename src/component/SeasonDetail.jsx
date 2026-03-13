"use client"
import Link from 'next/link';
import ProductItem from './ProductItem';

export default function SeasonDetail({ season, otherSeasons, products, onAddToCart }) {

  return (
    <div>
      {/* Breadcrumb & Back Button */}
      <div className="container" style={{paddingTop: '30px', paddingBottom: '20px'}}>
        <div className="d-flex justify-content-between align-items-center">
          <nav style={{fontSize: '14px', color: '#888'}}>
            <Link href="/" style={{color: 'var(--emerald-green)', textDecoration: 'none'}}>Trang chủ</Link>
            <span style={{margin: '0 8px'}}>›</span>
            <Link href="/collections" style={{color: 'var(--emerald-green)', textDecoration: 'none'}}>Bộ sưu tập</Link>
            <span style={{margin: '0 8px'}}>›</span>
            <span style={{color: '#333', fontWeight: '600'}}>Mùa {season.name}</span>
          </nav>
          <Link href="/collections" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--emerald-green)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            <span style={{fontSize: '18px'}}>←</span>
            Quay về Bộ sưu tập
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container" style={{marginBottom: '60px'}}>
        <div style={{
          position: 'relative',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '20px',
          background: `linear-gradient(rgba(10, 61, 42, 0.4), rgba(10, 61, 42, 0.7)), url(${season.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: '40px'
        }}>
          <div style={{position: 'relative', zIndex: 10, maxWidth: '700px'}}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '25px',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Limited Edition
            </span>
            
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 7vw, 64px)',
              fontWeight: '900',
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Bộ Sưu Tập Mùa {season.name}
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: '1.7',
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              "{season.fullDescription}"
            </p>

            <button className="luxury-btn" style={{
              background: 'white',
              color: 'var(--emerald-green)',
              border: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              Khám phá ngay
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container" style={{paddingBottom: '100px'}}>
        <div className="d-flex justify-content-between align-items-end mb-5 pb-4" style={{
          borderBottom: '1px solid rgba(10, 61, 42, 0.1)'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: 'var(--emerald-green)',
              marginBottom: '8px',
              fontWeight: '700'
            }}>
              Hương Thơm Đặc Trưng
            </h2>
            <p style={{color: '#888', margin: 0, fontSize: '14px'}}>
              {products.length} sản phẩm được tuyển chọn đặc biệt
            </p>
          </div>
          <div className="d-flex gap-2">
            <button style={{
              padding: '10px 16px',
              border: '1px solid rgba(10, 61, 42, 0.2)',
              borderRadius: '10px',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              🎛️ Bộ lọc
            </button>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-lg-3">
              <ProductItem
                id={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                discount={product.discount}
                volume={product.volume}
                image={product.image}
                badge={product.badge}
                onAdd={() => onAddToCart(product)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Other Seasons */}
      <section style={{
        background: 'rgba(10, 61, 42, 0.03)',
        padding: '80px 0',
        borderTop: '1px solid rgba(10, 61, 42, 0.1)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: 'var(--emerald-green)',
              marginBottom: '10px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Khám Phá Các Mùa Khác
            </h2>
            <p style={{color: '#888', fontSize: '14px'}}>
              Mỗi khoảnh khắc trong năm là một tầng hương độc bản
            </p>
          </div>

          <div className="row g-4">
            {otherSeasons.map((otherSeason) => (
              <div key={otherSeason.id} className="col-md-4">
                <Link href={`/collections/${otherSeason.id}`} style={{textDecoration: 'none'}}>
                  <div className="hover-scale" style={{
                    position: 'relative',
                    height: '320px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                  }}>
                    <img 
                      src={otherSeason.image}
                      alt={otherSeason.name}
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
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 61, 43, 0.85), transparent)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '30px'
                    }}>
                      <span style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.8)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        BST {otherSeason.name}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'white',
                        margin: 0
                      }}>
                        {otherSeason.subtitle}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
