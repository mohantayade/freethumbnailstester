import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'


import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All blogs related to YouTube thumbnails | freethumbnailtester.com',
  description: 'blogs for creating amazing thumbnail for your next youtube videos to gain more views',
  alternates:{
    canonical: 'https://freethumbnailstester.vercel.app/blogs'
  },
  keywords:[
    
  ]
}

const jsonld={
  
}

function blogs() {
  return (
    <div className='h-auto'>
      <div className='my-6 md:my-10'>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold underline decoration-red-600 underline-offset-4 uppercase'>All blogs related to YouTube thumbnails</h1>
      </div>
<hr />
<div className='mx-auto max-w-[1200px]'>


      <div className='lg:grid grid-cols-4'>   
     {/* blogs section */}


      <div className='col-span-3 ' >
        <div className='max-w-[800px] mx-auto px-5'>







 {/* ------------------------------------------------ */}


        {/* blog 1 */}

            <div className=' rounded-xl p-2 md:flex my-4  shadow-gray-600 shadow-md' >
              <div className='flex justify-center items-center md:min-w-[280px]'>
                <Link className='w-full' href='/blogs/how-to-create-attractive-thumbnail-for-youtube'>
                      <Image className='w-full hover:brightness-75 rounded-lg shadow-black shadow' alt='image' src={'/blogs-images/how-to-create-attractive-thumbnail.jpg'} width={200} height={100}></Image>
                </Link>
              </div>
              <div className='m-3 '>
              <h2 className=' text-lg font-bold hover:text-red-500 hover:cursor-pointer '><Link href="/blogs/how-to-create-attractive-thumbnail-for-youtube">How to create attractive thumbnail.</Link></h2>
              <p className='text-sm text-gray-500 mt-2 font-medium'>Thumbnail is one of the most crucial factors determining the success of your online content. A thumbnail is the first thing that a viewer comes across as he stumbles upon your videos or articles. </p>
              </div>
           </div>

        {/* blog2 */}

        <div className=' rounded-xl p-2 md:flex my-4  shadow-gray-600 shadow-md' >
              <div className='flex  justify-center items-center md:min-w-[280px]'>
                <Link className='w-full ' href='/blogs/5-steps-to-make-a-thumbnail-easy'>
                      <Image  className='w-full hover:brightness-75 rounded-lg shadow-black shadow' alt='image' src={'/blogs-images/5-steps-to-make-a-thumbnail-easy.jpg'} width={200} height={100}></Image>
                </Link>
              </div>
              <div className='m-3 '>
              <h2 className=' text-lg font-bold hover:text-red-500 hover:cursor-pointer '><Link href="/blogs/5-steps-to-make-a-thumbnail-easy">5 Steps to make a Thumbnail Easy ?</Link></h2>
              <p className='text-sm text-gray-500 mt-2 font-medium'>Thumbnail is also a crucial element that generates viewers’ interest toward the material and should be mastered by the content creator</p>
              </div>
           </div>
        {/* blog 3 */}
           <div className=' rounded-xl p-2 md:flex my-4  shadow-gray-600 shadow-md' >
              <div className='flex justify-center items-center md:min-w-[280px]'>
                <Link className='w-full' href='/blogs/top-10-fonts-for-youtube-thumbnails-for-youtube'>
                      <Image className='w-full hover:brightness-75 rounded-lg shadow-black shadow' alt='image' src={'/blogs-images/top-10-fonts-for-youtube-thumbnails.jpg'} width={200} height={100}></Image>
                </Link>
              </div>
              <div className='m-3 '>
              <h2 className=' text-lg font-bold hover:text-red-500 hover:cursor-pointer '><Link href="/blogs/top-10-fonts-for-youtube-thumbnails-for-youtube">Top 10 fonts for YouTube Thumbnails.</Link></h2>
              <p className='text-sm text-gray-500 mt-2 font-medium'>Choosing effective thumbnails for YouTube is not a small thing at all It is one of the most important factors that need to be considered while designing thumbnails This is all about the type face or font used on thumbnails. </p>
              </div>
           </div>

        {/* blog 4 */}
           <div className=' rounded-xl p-2 md:flex my-4  shadow-gray-600 shadow-md' >
              <div className='flex justify-center items-center md:min-w-[280px]'>
                <Link className='w-full' href='/blogs/how-to-create-high-quality-youtube-thumbnails'>
                      <Image className='w-full hover:brightness-75 rounded-lg shadow-black shadow' alt='image' src={'/blogs-images/how-to-create-high-quality-youtube-thumbnails.jpg'} width={200} height={100}></Image>
                </Link>
              </div>
              <div className='m-3 '>
              <h2 className=' text-lg font-bold hover:text-red-500 hover:cursor-pointer '><Link href="/blogs/how-to-create-high-quality-youtube-thumbnails">How to Create high-quality YouTube thumbnails?</Link></h2>
              <p className='text-sm text-gray-500 mt-2 font-medium'>For one, it is important to have high quality thumbnails to make people want to click on your YouTube videos. The working assumption here is that thumbnails act as the cover page of the video, controlling the desire of the viewer to watch the clip.</p>
              </div>
           </div>






{/* ----------------------------------------------------------------------------------- */}

   </div>

 </div>




     {/* side bar */}
     <div className='mt-5 mb-5  w-full  mx-auto'>
<div className='md:sticky top-20 my-10 md:my-1 border-4 border-red-500 pb-3 rounded-lg px-2 mx-2 '>
      <div className='text-center flex flex-col divide-y'>
      <Link className='font-bold py-3 bg-[#FF1616]  my-2 rounded-lg text-white hover:bg-red-700 ' href="/">Free Thumbnail Tester 👉</Link>
      <Link className='font-bold py-3 bg-[#FF1616]  my-2 rounded-lg text-white hover:bg-red-700 ' href="/thumbnail-downloader">Free Thumbnail Downloader 👉</Link>
      <p className='text-lg text-gray-600'>Thumbnail Tester lets you to test your YouTube Titles and Thumbnails in context of the current YouTube feed and layout. Compare your video's thumbnail and title in context to current content you can see how well your content stands out.</p>
      </div>
 </div>
      </div>
     </div>

</div>

    </div>
  )
}

export default blogs