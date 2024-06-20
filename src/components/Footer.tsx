import React from 'react'
import Link from 'next/link'
import logo from '../assets/icon.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='h-full bg-[#FF1616] text-white rounded-2xl mx-1 mb-1'>
        <div className='flex-col md:flex md:flex-row items-center justify-between p-10 '>
        <div className='flex items-center pb-4'>
          <div>
          <Image alt='logo' src={logo} width={40} height={40} className='mx-2'></Image>
          </div>
          <p className='font-black text-lg md:text-2xl'>Free Thumbnails Tester</p>
        </div>
        <div className='font-bold flex flex-col gap-2'>
            <Link className='underline-offset-2 hover:underline' href="/about">About →</Link>
            <Link className='underline-offset-2 hover:underline' href="/blogs">Blogs →</Link>
            <Link className='underline-offset-2 hover:underline' href="/privacy-policy">Privacy Policy →</Link>
            <Link className='underline-offset-2 hover:underline' href="/term-and-conditions">Term and Conditions →</Link>
        </div>
        </div>
        
        <div className='flex-col text-center justify-center pb-3 '>
          <hr className='mb-3' />
          <p>© 2024 Free Thumbnail Tester</p> 
          <p>ALL RIGHTS RESERVED.</p>
          </div>
    </div>
  )
}

export default Footer