import React from 'react'
import logo from '../assets/icon.png'
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='h-14 bg-[#FF1616] text-white flex items-center font-black justify-between px-5'>
      <div className='flex items-center'><Image alt='logo' src={logo} width={40} height={40} className='mx-2'></Image><Link href="/">Free Thumbnails Tester</Link> </div>
      <div>
      <div className='text-sm flex gap-3'>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/term-and-conditions">Term and Conditions</Link>
            <Link href="/about">About</Link>
            
        </div>
      </div>
      </div>
  )
}

export default Navbar