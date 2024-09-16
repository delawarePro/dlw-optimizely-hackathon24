'use client'
 
import { useSearchParams } from 'next/navigation'

export function SearchParam({ param }: { param: string }) {
    const searchParams = useSearchParams();
    const orderID = searchParams.get(param);

    return <>
        {orderID}
    </>
}
