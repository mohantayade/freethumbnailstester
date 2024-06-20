"use client";
import { useState } from "react";

import logo from '../assets/icon.png'
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='h-14 rounded-lg bg-[#FF1616] text-white flex items-center font-black justify-between px-5 sticky top-2 z-10 mx-2 mt-2'>
      <div className='flex items-center  md:text-base '>
        <Image alt='logo' src={logo} width={40} height={40} className='mx-2'></Image>
        <Link href="/">Free Thumbnails Tester</Link> </div>
      <div>



        <div className="">
          <ul
            className={
              isOpen
                ? 
                "md:flex md:relative md:mt-0 md:gap-10 md:bg-transparent w-full mt-10 rounded-lg bg-[#FF1616] py-5 absolute left-0 z-auto text-center font-bold transition-all text-lg divide-y "
                : 
                "md:flex hidden gap-10 font-bold text-lg  "
            }
          >
            <li className="py-5 hover:underline underline-offset-8  decoration-white">
              <Link href="/" onClick={() => {
              setIsOpen(!isOpen);
            }}>Home
            </Link>
            </li>
            <li className="py-5 hover:underline underline-offset-8  decoration-white">
              <Link href="/blogs" onClick={() => {
              setIsOpen(!isOpen);
            }}>Blogs
            </Link>
            </li>
            <li className="py-5 hover:underline underline-offset-8  decoration-white">
              <Link href="/privacy-policy" onClick={() => {
              setIsOpen(!isOpen);
            }}>Privacy Policy</Link>
            </li>
            <li className="py-5 hover:underline underline-offset-8  decoration-white">
              <Link href="/term-and-conditions" onClick={() => {
              setIsOpen(!isOpen);
            }}>Term and Conditions</Link>
            </li>
            <li className="py-5 hover:underline underline-offset-8  decoration-white">
              <Link href="/about" onClick={() => {
              setIsOpen(!isOpen);
            }}>About</Link>
            </li>
          </ul>
        </div>


        <div className="flex md:hidden">
          <button
            className=""
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <svg
                className="fill-current text-white transition-all"
                fill="#000000"
                height="20"
                width="20"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 490 490"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>{" "}
                </g>
              </svg>
            ) : (
              <svg
                className="fill-current text-white transition-all "
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      </div>
  )
}

export default Navbar