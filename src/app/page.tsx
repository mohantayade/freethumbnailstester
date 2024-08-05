"use client"

import Image from "next/image";

import { useRef, useState } from "react";
import ytimage from '../assets/ytprofile.png'
import Link from "next/link";
import Script from "next/script";

import hthumb1 from "@/assets/howto/how to create a new thumbnail preview.jpg"
import hthumb2 from "@/assets/howto/how look like your youtube video on thumbnail.jpg"

export default function Home() {

  const hiddenFileInput: React.MutableRefObject<any> = useRef(null);

  function handleClick(e: any) {
    hiddenFileInput.current.click();
  };

  const [file, setFile] = useState<any | null>(null);;
  const [title, setTitle] = useState("");
  const [channelName, setChannelName] = useState("")



  function handleChange(e: any) {

    setFile(URL.createObjectURL(e.target.files[0]));
    handleClick(e.target.files)
  }

  const jsonld = [
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Free Thumbnail Tester",
      "url": "https://freethumbnailstester.vercel.app/",
    }
  ]

  const jsonldA = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Free Thumbnail Tester",
      "operatingSystem": "Browser | Web Application - runs on your browser",
      "applicationCategory": "BrowserApplication",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "8864"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]


  const jsonldb = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Thumbnail Tester",
      "item": "https://freethumbnailstester.vercel.app/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Blogs",
      "item": "https://freethumbnailstester.vercel.app/blogs"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "About",
      "item": "https://freethumbnailstester.vercel.app/about"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Thumbnail Tips",
      "item": "https://freethumbnailstester.vercel.app/blogs/how-to-create-attractive-thumbnail-for-youtube"
    }]
  }

  return (
    <div className="mt-5 md:mt-2 ">
      <Script id="1" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }} />
      <Script id="2" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldA),
        }} />
      <Script id="3" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldb),
        }} />

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter w-full py-8 md:py-10  text-center rainbow-text ">Test Your Youtube Thumbnail <span>📽️</span> </h1>

      <div className=" md:border-2 md:bg-zinc-200 border-gray-300 mx-1 p-2 md:mx-auto  md:max-w-[1000px] my-5 rounded-xl py-6">


        <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter w-full py-5 md:py-5  text-center" >Upload an image to create a new Thumbnail preview 🧐 </h2>

        {/* <ImageUpload/> */}
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center md:my-8 '>

          <div className=" h-auto">
            <div style={{ ["--image-url" as string]: `url(${file})` }} className='mx-auto max-w-[350px] md:max-w-[380px] h-[197px] md:h-[214px] bg-[image:var(--image-url)] bg-cover rounded-lg flex justify-center items-center  flex-col gap-2 border-black border'>
              {/* <img src={file} alt="image" /> */}
              <p className={file ? 'hidden' : 'text-2xl font-bold text-gray-400'}>1920 x 1080 px or 16:9</p>
              <input type="file" name="Image" id="image" onChange={handleChange} ref={hiddenFileInput}
                style={{ display: 'none' }} />
              <button onClick={handleClick} className='bg-[#FF1616] text-white p-3 rounded-3xl font-bold'>{file ? 'Reupload Image' : 'Upload Image'}</button>
            </div>

            <div className='grid grid-cols-6 text-wrap items-center mx-3 '>

              <div className=" w-14 col-span-1">
                <Image src={ytimage} alt="icon" width={50} height={50} />
              </div>

              <div className=" col-span-5 ">

                <h3 className='max-w-[300px] text-wrap font-semibold  mt-2 truncate text-ellipsis'>
                  {title ? title.substring(0, 60) + ' ...' : 'Your Title is shows in this area..'}
                </h3>


                <p className='font-semibold text-gray-500 text-sm'>{channelName ? channelName.substring(0, 25) : 'Channel Name'}</p>
                <p className='text-sm text-gray-500'>143k views • 69 days ago</p>
              </div>

            </div>
          </div>





          <div className="grow-1" >

            <p className='text-xl font-semibold mb-2'>Title:</p>
            <input className='rounded-3xl text-xl font-semibold px-4 py-2 border border-black mb-3 text-gray-600 w-full' type="text" onChange={(event) => setTitle(event.target.value)} />
            <p className='text-xl font-semibold  mb-2'>Channel Name:</p>
            <input
              onChange={(event) => setChannelName(event.target.value)}
              className='text-gray-600 rounded-3xl text-xl font-semibold px-4 py-2 border border-black w-full' type="text" />

            <div className='mt-8'>

              <Link
                className={file ? 'bg-[#FF1616] text-white p-3 rounded-3xl font-bold px-4' : 'bg-[#FF1616] text-white p-3 rounded-3xl font-bold px-4 opacity-50 pointer-events-none'}
                href={{
                  pathname: '/preview',
                  query: {
                    images: file,
                    title: `${title}`,
                    channelName: channelName
                  }
                }}
              >Preview →</Link>

            </div>

          </div>

        </div>

      </div>
      <hr className="max-w-[300px] mx-auto px-5 border-2 rounded-lg" />

<h3 className="text-2xl font-bold mb-2 px-3 text-center p-6 mx-3 border-4 rounded-lg"><Link className=" hover:bg-red-500 hover:text-white p-5 rounded-lg" href="/thumbnail-downloader">Thumbnail Downloader 👉</Link></h3>
      <div className="text-center mb-12 mt-10">
        <p className="text-5xl mb-2">🤔</p>
        <h3 className="text-2xl font-bold mb-2 px-3">How Thumbnail Tester Works?</h3>
        <p className="max-w-[100] px-8 md:px-14 lg:px-48 font-bold text-gray-500">Thumbnail Tester lets you to test your YouTube Titles and Thumbnails in context of the current YouTube feed and layout.</p><p className="max-w-[100] px-8 md:px-14 lg:px-48 font-bold text-gray-500">
          Compare your video's thumbnail and title in context to current content you can see how well your content stands out.</p>

      </div>









      {/* <Preview titles={title} thumbimage={file} channelName={channelName} /> */}
      <div className="my-5 max-w-[1000px] mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#FF1616] bg-gray-200 p-5 rounded-lg">How to use thumbnails Tester</h2>


        <p className="text-base font-medium my-4">First, type your title and then type your YouTube channel name, and most importantly, upload your thumbnail in the upper section. If you submit all things, then simply click on the Preview button. After this submission, it shows your YouTube thumbnail and title in the YouTube simulator. You can view your thumbnail to see how it looks on YouTube after the video is uploaded.</p>

        <Image src={hthumb1} alt="1st step of thumbnail tester"></Image>

        <p className="text-base font-medium my-4">Next, your YouTube channel name plays a crucial role in establishing your brand identity and making it memorable for your audience. Choose a name that is catchy, easy to remember, and aligns with the theme or niche of your content. Consistency across your channel name, content, and branding elements helps reinforce your channel's identity and makes it easier for viewers to find and recognize your videos.</p>

        <p className="text-base font-medium my-4">Now, let’s talk about the importance of thumbnails. Beautiful thumbnails are like a visual invitation to record your video. It needs to be eye-catching, high-quality, and relevant to the content of your video. Use bright colors, clear images, and concise text to emphasize what your video is about and entice viewers to watch it. Remember to optimize your thumbnails for different devices and screen sizes to ensure they look good on all platforms.</p>
        <Image src={hthumb2} alt="2st you can view your video thumbnail on youtube simulation"></Image>
        <p className="text-base font-medium my-4">Once you've crafted your title, chosen your channel name, and created an attention-grabbing thumbnail, it's time to upload them to YouTube. Navigate to the upload section of your channel, select your video file, and fill in the relevant details, including your title, description, tags, and thumbnail. Take the time to optimize these elements for search and discoverability, as they can greatly impact the success of your video.</p>

        <p className="text-base font-medium my-4">Finally, as soon as you've got submitted all the essential statistics, recall to click at the Preview button to see how your video will appear to viewers on YouTube. The preview allows you to double-test everything and make any final-minute adjustments earlier than publishing your video to the world. Once you are happy with how the whole lot seems, cross in advance and hit the post button, and watch as your video is going stay for the world to see.</p>



      </div>


    </div>
  );
}
