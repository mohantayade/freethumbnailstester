"use client"
import React, { useState } from 'react'
import ytprofile from '@/assets/ytprofile.png'
import menu from '@/assets/menu.svg'
import youtube from '@/assets/YouTube-Logo.png'
import search from '@/assets/search.svg'
import mic from '@/assets/mic.svg'
import bell from '@/assets/bell.svg'
import homes from '@/assets/home.svg'
import shots from '@/assets/shorticon.png'
import subscribe from '@/assets/subscription.png'
import youlogo from '@/assets/You.png'
import Image from 'next/image';

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function Preview() {
  const [desktopbtnActive,setDesktopBtnActive] = useState(true);
  const [phonebtnActive,setPhoneBtnActive] = useState(false)
  const searchParams = useSearchParams()
  const imageyt = searchParams.get('images')
  const titleyt = searchParams.get('title')
  const channelyt = searchParams.get('channelName')
  console.log(imageyt);
  
  const ytVideo = [
    {id:1,
      title:"10 Minutes To Escape Or This Room Explodes!",channelName:"MrBeast",
      image:"/thum1.webp"},
    {id:2,
      title:`${titleyt}`,
      channelName:`${channelyt}`,
      image:`${imageyt}`},
    {id:3,
      title:"I BOUGHT A NEW HOUSE IN THE CITY",
      channelName:"Ujjwal",
      image:"/thum7.webp"},
    {id:4,
      title:"Our New Toy - Will It Fly ? Worth - ₹5 Lakhs",channelName:"MR. INDIAN HACKER",
      image:"/thum2.webp"},
    {id:5,
      title:"Non Stop Comedy Scenes - Paresh Rawal - Rajpal Yadav - Johny Lever - Akshay Kumar -",
      channelName:"Shemaroo Comedy",
      image:"/thum3.webp"},
    {id:6,
      title:"Rabbit R1: Barely Reviewable",
      channelName:"Marques Bronlee",
      image:"/thum4.webp"},
    {id:7,
      title:" Pehli Dafa Song (Video) | Ileana D’Cruz | Latest Hindi Song 2017 | T-Series",
      channelName:"T-Series",
      image:"/thum5.webp"},
    {id:8,
      title:"FINALE - 100 Days But Ores Are LUCKY BLOCK in Hardcore Minecraft 😰",
      channelName:"Anshu Bisht",
      image:"/thum6.webp"},
  ]
  return (
    <div>
      <div className='flex justify-center my-3'>
      <Link href='/' className='bg-[#FF1616] text-white text-xl font-bold p-3 px-4 rounded-3xl'>← Home</Link>
      </div>
     <div className='flex justify-center '>
      
      <div className='m-5 flex justify-center gap-5 rounded-full py-3  bg-gray-300 px-3'>

        <button className={desktopbtnActive === true ? 'bg-[#FF1616] text-white text-xl font-bold p-3 px-4 rounded-3xl': 'text-xl font-bold p-3 px-4'}
        onClick={()=>{
          setDesktopBtnActive(true)
          setPhoneBtnActive(false)}}
        >Desktop</button>

        <button 
        className={phonebtnActive === true ? 'bg-[#FF1616] text-white text-xl font-bold p-3 px-4 rounded-3xl': 'text-xl font-bold p-3 px-4 '}
        onClick={()=>{
          setPhoneBtnActive(true)
          setDesktopBtnActive(false)
        }}
        >Phone</button>
      </div>
    </div>
    <div className='flex justify-center my-8 '>
      
      <div className={phonebtnActive === true? 'border-black border rounded-3xl p-4 m-1 ':'border-black border rounded-3xl p-5 m-1 w-[1600px] overflow-x-scroll '}>


      <div className={phonebtnActive === true? 'flex items-center justify-between':'flex items-center justify-between w-[1500px]'}>
       <div className='flex items-center '>
       <Image src={menu} alt='menu' className={phonebtnActive == true? 'hidden':'w-7 h-7 mx-5'} />
        <Image src={youtube} alt='menu' className='w-24 mx-2' />
       </div>

       <div className='flex items-center '>
<div className={phonebtnActive == true? 'hidden':'border border-gray-400 w-[600px] flex justify-between pl-4 py-2 rounded-3xl'}>
        <p className='text-gray-400'>Search</p>
        <Image src={search} alt='menu' className='w-8 border-l-2 mx-5 text-gray-600 pl-3' />
        </div>
        <Image src={mic} alt='menu' className={phonebtnActive == true? 'hidden':'w-10 p-2 m-5 bg-slate-100 rounded-full '} />
      </div>
        
       
        <div className='flex items-center '>
        <Image src={bell} alt='menu' className='w-10 p-2 m-1' />
        <Image src={search} alt='menu' className={phonebtnActive == false? 'hidden':'w-8  mx-2 text-gray-600 p-1'} />
        <div className={phonebtnActive == true? 'hidden':'w-10 p-2 m-5 bg-blue-500 rounded-full text-center text-white font-bold'}>M</div>
        </div>
        
      </div>
   <div className={phonebtnActive === true? 'flex':'flex w-[1500px]'}>
    {
    phonebtnActive === true? <></> : <div className='flex flex-col gap-4 items-center text-[10px] mr-4 '>
      <div className='flex flex-col items-center gap-1'><Image src={homes} alt='menu' className='w-5 ' />Home</div>
      
      <div className='flex flex-col items-center gap-1'><Image src={shots} alt='menu' className='w-9 ' />Short</div>
      <div className='flex flex-col items-center gap-1'><Image src={subscribe} alt='menu' className='w-5 ' />Subscription</div>
      <div className='flex flex-col items-center gap-1'><Image src={youlogo} alt='menu' className='w-5 ' />You</div>
    </div>
    }
    <div className={desktopbtnActive == true ? 'grid grid-cols-4 gap-2 ':'grid grid-rows h-screen w-[400px] overflow-y-scroll mb-2 '}>
    {
      ytVideo.map((thumbnail)=>(
        <div key={thumbnail.id} className='thumbnail mx-auto my-2'>
        <div>
        <div style={{'--image-url': `url(${thumbnail.image})`}} className='w-[330px] h-[186px] bg-[image:var(--image-url)] rounded-lg flex justify-center items-center flex-col gap-2 border border-gray-400 bg-cover'>
              {/* you can add image here thumbnaol */}
            </div>
            <div className='flex w-[350px]'>
              <div className='mt-3 mr-3'>
              <Image src={ytprofile} alt="icon" width={35} height={35}/>
              </div>
              <div className='w-full flex-1 flex-col gap-3 items-center '>
              <p className='font-semibold mt-2 mb-1 pr-4'>{thumbnail.title.substring(0,60)} ...</p>
              <div className={desktopbtnActive == false ? 'flex' :'block' }>
              <p className='text-sm text-gray-500 mr-1'>{desktopbtnActive == true ?thumbnail.channelName: thumbnail.channelName + " •"}</p>
              <p className='text-sm text-gray-500'>143k views • 69 days ago</p>
              </div>
              
              </div>
              </div>
        </div>
           
      </div>
      ))
    }
    </div>
</div>
      </div>
    </div>
    
    


    </div>
    
  )
}

export default Preview