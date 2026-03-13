"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { href: '/admin/orders', icon: 'shopping_bag', label: 'Đơn hàng' },
    { href: '/admin/customers', icon: 'group', label: 'Khách hàng' },
    { href: '/admin/collections', icon: 'auto_awesome_motion', label: 'Bộ sưu tập' },
    { href: '/admin/products', icon: 'inventory_2', label: 'Sản phẩm' },
    { href: '/admin/settings', icon: 'settings', label: 'Cài đặt' },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      
      <aside className="sticky top-0 h-screen w-72 bg-[#0a3d2b] flex flex-col justify-between py-8 border-r border-[#D4AF37]/20">
        <div>
          {/* Logo */}
          <div className="px-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0a3d2b] font-serif text-xl font-bold">
                L
              </div>
              <div>
                <h1 className="font-serif text-xl tracking-widest text-[#D4AF37] uppercase">Luxe Scent</h1>
                <p className="text-[10px] tracking-[0.2em] text-[#D4AF37]/60 uppercase">Management</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-8 py-4 transition-all ${
                    isActive
                      ? 'bg-[#D4AF37]/15 border-r-4 border-[#D4AF37] text-[#D4AF37]'
                      : 'text-[#D4AF37]/70 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="text-sm font-medium tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Button */}
        <div className="px-6">
          <button className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c49d2f] text-[#0a3d2b] font-bold py-3 px-4 rounded-lg transition-colors shadow-lg">
            <span className="material-symbols-outlined">add</span>
            <span className="text-xs uppercase tracking-tighter">Sản phẩm mới</span>
          </button>
        </div>
      </aside>
    </>
  );
}
