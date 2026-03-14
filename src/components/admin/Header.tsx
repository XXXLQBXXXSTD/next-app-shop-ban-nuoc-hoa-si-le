"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminHeader() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('admin_user');
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/login');
  };

  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '20px',
        fontWeight: '700',
        color: '#0f172a',
        margin: 0,
      }}>Tổng quan Dashboard</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <span className="material-symbols-outlined" style={{
            position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
            color: '#94a3b8', fontSize: '18px',
          }}>search</span>
          <input
            style={{
              paddingLeft: '40px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px',
              background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px',
              width: '260px', fontSize: '14px', color: '#0f172a', outline: 'none',
            }}
            placeholder="Tìm kiếm đơn hàng, khách hàng..."
            type="text"
            onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '1px solid #e2e8f0', paddingLeft: '32px' }}>
          {/* Bell */}
          <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#64748b' }}>
            <span className="material-symbols-outlined">notifications</span>
            <span style={{
              position: 'absolute', top: '8px', right: '8px',
              width: '8px', height: '8px', background: '#ef4444',
              borderRadius: '50%', border: '2px solid #fff',
            }}></span>
          </button>

          {/* User */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                {user?.name || 'Admin Luxe'}
              </div>
              <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Manager
              </div>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #D4AF37', padding: '2px' }}>
              <img
                alt="Profile"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzfItdv_1bo4af9U6gMnvEAR_jq00UXuLmClCHehz-l21ppdXbhCvV_OnrQm41mAstnIfYHhp5UPx2QdPAucDr6cXBgzo4F5EspWiKqqT_6DboFHig8FRQrt2XE8R3VW2bbEaq9_NJ2S-nTLJ_EHlVqgIaclQOVpPaoepd4lys5W30qfxeejvKD8xWCOW4cED6CWcy5ASAXe3Iaov0zTSBSS-sngT6-0qKiMUmSgnH5QVif4he9cEDqUaNd09SZiklHLiQhNw73E"
              />
            </div>
            <button
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#94a3b8' }}
              title="Đăng xuất"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
