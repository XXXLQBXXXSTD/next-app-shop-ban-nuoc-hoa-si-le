"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminHeader() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('admin_user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/login');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      
      <header className="bg-white backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-10 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-slate-900">Tổng quan Dashboard</h2>
        </div>

        <div className="flex items-center gap-8">
          {/* Search Bar */}
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] w-64 text-sm transition-all outline-none text-slate-900 placeholder:text-slate-400"
              placeholder="Tìm kiếm đơn hàng, khách hàng..."
              type="text"
            />
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
            <button className="relative p-2 text-slate-500 hover:text-[#D4AF37] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">
                  {user?.name || 'Admin Luxe'}
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Manager</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] p-0.5">
                <img
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzfItdv_1bo4af9U6gMnvEAR_jq00UXuLmClCHehz-l21ppdXbhCvV_OnrQm41mAstnIfYHhp5UPx2QdPAucDr6cXBgzo4F5EspWiKqqT_6DboFHig8FRQrt2XE8R3VW2bbEaq9_NJ2S-nTLJ_EHlVqgIaclQOVpPaoepd4lys5W30qfxeejvKD8xWCOW4cED6CWcy5ASAXe3Iaov0zTSBSS-sngT6-0qKiMUmSgnH5QVif4he9cEDqUaNd09SZiklHLiQhNw73E"
                />
              </div>
              <button
                onClick={handleLogout}
                className="ml-2 p-2 text-slate-500 hover:text-red-500 transition-colors"
                title="Đăng xuất">
                <span className="material-symbols-outlined text-lg">logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
