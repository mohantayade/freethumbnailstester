import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className='h-full bg-[#FF1616] text-white '>
        <div className='flex items-center justify-between p-10'>
        <div>
        <p className='font-black text-2xl'>Free Thumbnails Tester</p>
        </div>
        <div className='font-bold flex flex-col'>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/term-and-conditions">Term and Conditions</Link>
            <Link href="/about">About</Link>
            
        </div>
        </div>
        
        <div className='flex justify-center pb-3'>© 2024 Free Thumbnail Tester ALL RIGHTS RESERVED.</div>
    </div>
  )
}

export default Footer