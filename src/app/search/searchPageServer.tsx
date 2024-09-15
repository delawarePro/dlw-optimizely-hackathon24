'use server';

import { cookies } from 'next/headers';
import { FlagOverridesType, decrypt } from '@vercel/flags';

export async function getServerData() {
    const cookieStore = cookies();
    const overrideCookie = cookieStore.get('vercel-flag-overrides');
    const overrides = overrideCookie ? await decrypt<FlagOverridesType>(overrideCookie.value) : {};
    const isSalePriceEnabled = overrides?.['sale-price'] === 'true' || overrides?.['sale-price'] === true;

    console.log('server: flags isSalePriceEnabled' + isSalePriceEnabled);
    
    return { isSalePriceEnabled };
}