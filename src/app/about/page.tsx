import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title:"About | freethumbnailstester",
  robots:"noindex",
  description:"This is about page",
  keywords:""
}


function about() {
  return (
    <div className='max-w-[1000px] flex flex-col mx-auto my-6 p-5'>

<h2 className='text-3xl md:text-4xl my-5 font-bold text-center underline'>Free Thumbnails Tester</h2>

<h2 className='text-xl font-semibold -ml-3'>I. About Company:</h2>
<li>Briefly introduce the company and its purpose</li>


<li>Highlight the main service provided by Free Thumbnails Tester</li>

<li>Emphasize the benefit of testing YouTube thumbnails live without uploading them on your channel</li>

<li>Mention the importance of measuring how thumbnails appear on YouTube for attracting viewers</li>

<h2 className='text-xl font-semibold -ml-3'>II. Mission and Vision:</h2>

<li>State the company's mission, which could be something like:
<p>"Our mission is to empower YouTube creators by providing them with a platform to test and optimize their thumbnails, ultimately enhancing their channel's visibility and audience engagement."</p></li>

<li>Present the company's vision, such as:
<p>"We envision a YouTube community where every creator can confidently present their content through captivating and effective thumbnails, resulting in increased viewership and success."</p></li>

<h2 className='text-xl font-semibold -ml-3'>III. Core Values:</h2>

<li>List the core values that guide Free Thumbnails Tester's operations, such as:
</li>
<li>Innovation: Continuously strive to develop cutting-edge solutions for thumbnail testing.
</li>
<li>User-Centric Approach: Prioritize the needs and preferences of YouTube creators.
</li>
<li>Reliability: Ensure the accuracy and consistency of thumbnail testing results.
</li>
<li>Accessibility: Make the platform easily accessible and user-friendly for all creators.
</li>
<li>Integrity: Maintain transparency and ethical practices in all interactions.
</li>
<h2 className='text-xl font-semibold -ml-3'>IV. Team:</h2>

<li>Introduce the dedicated team behind Free Thumbnails Tester</li>

<li>Highlight their expertise and qualifications in the field of YouTube marketing and technology
</li>

<li>Emphasize their commitment to providing exceptional service and support to users
</li>
<p className='text-red-500 text-xl text-center border border-gray-400 rounded-3xl my-2'>Email: mohanpixels@gmail.com</p>
    </div>
  )
}

export default about