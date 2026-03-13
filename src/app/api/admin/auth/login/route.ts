import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simple check - no case sensitivity issues
    if (email === 'admin@luxescent.com' && password === 'Admin@123456') {
      return NextResponse.json({
        success: true,
        token: 'admin-token-' + Date.now(),
        user: {
          id: 'admin-default',
          email: 'admin@luxescent.com',
          name: 'Admin Luxe Scent',
          role: 'admin',
        },
      });
    }

    return NextResponse.json(
      { error: 'Email hoặc mật khẩu không đúng' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Lỗi server' },
      { status: 500 }
    );
  }
}
