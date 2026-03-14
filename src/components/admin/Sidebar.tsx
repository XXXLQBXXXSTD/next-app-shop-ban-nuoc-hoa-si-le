"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { href: '/admin/orders', icon: 'shopping_bag', label: 'Đơn hàng' },
  { href: '/admin/customers', icon: 'group', label: 'Khách hàng' },
  { href: '/admin/collections', icon: 'auto_awesome_motion', label: 'Bộ sưu tập' },
  { href: '/admin/products', icon: 'inventory_2', label: 'Sản phẩm' },
  { href: '/admin/settings', icon: 'settings', label: 'Cài đặt' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: '288px',
      minWidth: '288px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0a3d2b',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: '32px',
      paddingBottom: '32px',
      borderRight: '1px solid rgba(212,175,55,0.2)',
    }}>
      <div>
        {/* Logo */}
        <div style={{ padding: '0 32px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#0a3d2b',
              fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700',
            }}>L</div>
            <div>
              <div style={{
                fontFamily: 'Playfair Display, serif', fontSize: '18px',
                letterSpacing: '0.15em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: '700',
              }}>Luxe Scent</div>
              <div style={{
                fontSize: '9px', letterSpacing: '0.2em',
                color: 'rgba(212,175,55,0.6)', textTransform: 'uppercase',
              }}>Management</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-link${isActive ? ' active' : ''}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
                <span style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.02em' }}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Button */}
      <div style={{ padding: '0 24px' }}>
        <button className="new-product-btn">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
          Sản phẩm mới
        </button>
      </div>
    </aside>
  );
}
