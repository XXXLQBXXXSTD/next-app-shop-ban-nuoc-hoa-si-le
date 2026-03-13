"use client"

export default function DashboardPage() {
  return (
    <div className="p-10 space-y-10 bg-slate-50">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
              <span className="material-symbols-outlined text-2xl">payments</span>
            </div>
            <span className="text-green-500 text-xs font-bold">+15.4%</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
            Tổng doanh thu
          </p>
          <h3 className="text-2xl font-serif font-bold mt-1 text-slate-900">250.000.000đ</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </div>
            <span className="text-green-500 text-xs font-bold">+8.2%</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
            Đơn hàng mới
          </p>
          <h3 className="text-2xl font-serif font-bold mt-1 text-slate-900">128</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
              <span className="material-symbols-outlined text-2xl">inventory</span>
            </div>
            <span className="text-slate-400 text-xs font-bold">Ổn định</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
            Tổng sản phẩm
          </p>
          <h3 className="text-2xl font-serif font-bold mt-1 text-slate-900">452</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
              <span className="material-symbols-outlined text-2xl">storefront</span>
            </div>
            <span className="text-green-500 text-xs font-bold">+5%</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
            Khách sỉ mới
          </p>
          <h3 className="text-2xl font-serif font-bold mt-1 text-slate-900">12</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">Doanh thu hàng tháng</h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                Thống kê 6 tháng gần nhất
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold border border-yellow-200 rounded-md bg-yellow-50 text-yellow-700">
                Năm 2024
              </button>
              <button className="px-3 py-1 text-xs font-bold text-slate-400 hover:text-yellow-600 transition-colors">
                Xuất báo cáo
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end gap-6 px-4">
            {[
              { month: 'THÁNG 1', height: '40%', fill: '70%' },
              { month: 'THÁNG 2', height: '60%', fill: '85%' },
              { month: 'THÁNG 3', height: '45%', fill: '60%' },
              { month: 'THÁNG 4', height: '80%', fill: '95%' },
              { month: 'THÁNG 5', height: '70%', fill: '80%' },
              { month: 'THÁNG 6', height: '90%', fill: '100%', active: true },
            ].map((bar, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className={`w-full bg-slate-100 rounded-t-lg relative group-hover:bg-yellow-100 transition-all ${
                    bar.active ? 'border-b-4 border-yellow-500' : ''
                  }`}
                  style={{ height: bar.height }}>
                  <div
                    className={`absolute inset-0 ${
                      bar.active ? 'bg-yellow-400' : 'bg-yellow-200'
                    } bottom-0 mt-auto rounded-t-lg`}
                    style={{ height: bar.fill }}></div>
                </div>
                <span
                  className={`text-[10px] font-bold ${
                    bar.active ? 'text-yellow-600' : 'text-slate-400 group-hover:text-yellow-600'
                  }`}>
                  {bar.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Pie */}
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h4 className="font-serif text-lg font-bold mb-6 text-slate-900">Sản phẩm bán chạy</h4>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="16"
                  stroke="#D4AF37"
                  strokeDasharray="40 100"
                  strokeLinecap="round"
                  strokeWidth="4"></circle>
                <circle
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="16"
                  stroke="#0a3d2b"
                  strokeDasharray="25 100"
                  strokeDashoffset="-40"
                  strokeLinecap="round"
                  strokeWidth="4"></circle>
                <circle
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="16"
                  stroke="#2563eb"
                  strokeDasharray="20 100"
                  strokeDashoffset="-65"
                  strokeLinecap="round"
                  strokeWidth="4"></circle>
                <circle
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="16"
                  stroke="#9333ea"
                  strokeDasharray="15 100"
                  strokeDashoffset="-85"
                  strokeLinecap="round"
                  strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold font-serif text-yellow-600">85%</span>
                <span className="text-[8px] uppercase tracking-widest text-slate-400">Mục tiêu</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                  <span className="text-xs font-medium text-slate-600">Midnight Rose</span>
                </div>
                <span className="text-xs font-bold text-slate-900">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0a3d2b]"></div>
                  <span className="text-xs font-medium text-slate-600">Emerald Forest</span>
                </div>
                <span className="text-xs font-bold text-slate-900">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-xs font-medium text-slate-600">Ocean Breeze</span>
                </div>
                <span className="text-xs font-bold text-slate-900">20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="font-serif text-lg font-bold text-slate-900">Đơn hàng gần đây</h4>
          <button className="text-yellow-600 text-xs font-bold hover:underline">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <tr>
                <th className="px-6 py-4">Mã đơn hàng</th>
                <th className="px-6 py-4">Khách hàng</th>
                <th className="px-6 py-4">Sản phẩm</th>
                <th className="px-6 py-4">Giá trị</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4">Ngày đặt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  id: '#LS-9021',
                  customer: 'Lê Nam',
                  initials: 'LN',
                  product: 'Midnight Rose EDP x2',
                  price: '3.200.000đ',
                  status: 'Hoàn thành',
                  statusColor: 'green',
                  date: '22/05/2024',
                },
                {
                  id: '#LS-9022',
                  customer: 'Hà Thảo',
                  initials: 'HT',
                  product: 'Emerald Forest x1',
                  price: '1.550.000đ',
                  status: 'Đang giao',
                  statusColor: 'blue',
                  date: '23/05/2024',
                },
                {
                  id: '#LS-9023',
                  customer: 'Phan Vinh',
                  initials: 'PV',
                  product: 'Set Discovery x3',
                  price: '2.850.000đ',
                  status: 'Chờ xử lý',
                  statusColor: 'yellow',
                  date: '24/05/2024',
                },
                {
                  id: '#LS-9024',
                  customer: 'Minh Anh',
                  initials: 'MA',
                  product: 'Gold Scent V1 x1',
                  price: '4.200.000đ',
                  status: 'Đã hủy',
                  statusColor: 'red',
                  date: '24/05/2024',
                },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-[10px] text-yellow-700 font-bold">
                        {order.initials}
                      </div>
                      <span className="text-sm text-slate-900">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                        order.statusColor === 'green'
                          ? 'bg-green-100 text-green-700'
                          : order.statusColor === 'blue'
                          ? 'bg-blue-100 text-blue-700'
                          : order.statusColor === 'yellow'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-10 text-center border-t border-slate-100">
        <p className="text-xs text-slate-400 uppercase tracking-widest">
          © 2026 Luxe Scent Perfumery. Bản quyền được bảo lưu.
        </p>
      </footer>
    </div>
  );
}
