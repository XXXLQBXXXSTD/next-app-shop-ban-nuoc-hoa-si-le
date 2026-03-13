"use client"
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      return;
    }

    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/login');
    }
  }, [router, pathname]);

  // Don't show sidebar/header on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <AdminHeader />
        <div className="bg-slate-50">
          {children}
        </div>
      </main>
    </div>
  );
}
