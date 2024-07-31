"use client"
import Image from 'next/image';
import React, {  useEffect, useState } from 'react';

export default function Page() {
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=tVWWp1PqDus');
    const [imgSrc, setImgSrc] = useState('');
    const [activeB, setActiveB] = useState(0);

    // function fullPage() {
    //     const fullPage = document.querySelector('#fullpage');
    //     fullPage.style.backgroundImage = `url(${imgSrc})`;
    //     fullPage.style.display = 'block';
    // }
useEffect(()=>{
    dynamicUrl()
},[setImgSrc,url])

    function dynamicUrl(type) {
        const urlValue = document.getElementById('url').value;
        console.log('URL Value:', urlValue);
        const match = urlValue.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/);
        if (!match) {
            console.error('Invalid YouTube URL');
            return;
        }
        const id = match[6];
        console.log('Video ID:', id);
        let imgUrl;
        if (type === 1){
            setActiveB(1)
            imgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        }  
        else if (type === 2){
            setActiveB(2)
            imgUrl = `https://img.youtube.com/vi_webp/${id}/maxresdefault.webp`;
        }else{
            setActiveB(0)
            imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        }
        
        setImgSrc(imgUrl);
        // fullPage()
        document.getElementById('img').src = imgUrl;
        console.log('Image URL:', imgUrl);
    }
    
    function download() {
        let link = document.createElement('a');
        console.log("download",link);
        link.href = document.getElementById('img').src;
        link.download
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    

    return (
        <>
        <div className='mt-7'>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter w-full py-8 md:py-10  text-center rainbow-text ">Download Youtube Thumbnail <span>⬇️</span> </h1>
        </div>
<div className='flex flex-col  gap-10 justify-center items-center md:my-8 max-w-[800px] mx-auto'>

            <div className='flex flex-col justify-center items-center w-full p-3  '>
            <label className='text-xl font-extrabold text-[#FF1616] underline underline-offset-2 self-start px-2 my-7'>1. Past Your Youtube URL :</label>
            <input
                name="url"
                type="search"
                id="url"
                className="rounded-3xl  font-semibold px-4 py-2 border-2 border-red-500 grow  text-gray-600 w-full"
                defaultValue={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            </div>


            <div className='flex flex-col gap-6 justify-center items-center w-full'>
                <label className='text-xl font-extrabold text-[#FF1616] underline underline-offset-2 self-start px-3 my-4'>2. Select Quality :</label>
                    <div className="flex flex-wrap justify-center gap-5 text-xl ">
                        <button 
                        className={activeB==0?"border p-4 text-white bg-red-900 mx-3 rounded-lg":"border p-4 mx-3 bg-[#FF1616] text-white rounded-lg"} 
                        onClick={() => dynamicUrl(0)}>👀 Low quality.jpg  </button>

                        <button className={activeB==1?"border p-4 text-white bg-red-900 mx-3 rounded-lg":"border p-4 mx-3 bg-[#FF1616] text-white rounded-lg"} onClick={() => dynamicUrl(1) }>👀 Max quality.jpg  </button>

                        <button className={activeB==2?"border p-4 text-white bg-red-900 mx-3 rounded-lg":"border p-4 mx-3 bg-[#FF1616] text-white rounded-lg font-bold"} onClick={() => dynamicUrl(2) }>👀 Max quality.webp</button>
                    </div>

                    <label className='self-start text-xl font-extrabold text-[#FF1616] underline underline-offset-2  px-3 my-4'>3. Click Download :</label>
            <button className="border p-4 mx-3 bg-[#FF1616] text-white rounded-lg" onClick={() => download()}>⏬ Download</button>
            </div>
          

            <div className='flex flex-col justify-center items-center px-2 mb-5 '>
            <p className='text-xl font-extrabold text-[#FF1616] underline underline-offset-2 self-start px-2 my-4'>Preview :</p>
            <Image className='mx-auto w-[900px] h-auto rounded-lg' id="img"  alt="YouTube thumbnail" />
            </div>
            
        </div>



        </>
        
    );
}
