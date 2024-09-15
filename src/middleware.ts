import { NextRequest, NextResponse } from 'next/server';
import { FlagOverridesType, decrypt } from '@vercel/flags';
import { cookies } from 'next/headers';

async function getFlags(request: NextRequest) {
  const overrideCookie = cookies().get('vercel-flag-overrides')?.value;
  const overrides = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {};

  const flags = {
    'sale-price': overrides?.['sale-price'] === 'true' || overrides?.['sale-price'] === true,
  };

  return flags;
}

export async function middleware(request: NextRequest) {
  
  const flags = await getFlags(request);

  console.log('flags middleware');
  console.log(flags);
  
  // You can use the flags here to modify the response or request
  return NextResponse.next();
}

export const config = {
  matcher: ['/search', '/dashboard']
}