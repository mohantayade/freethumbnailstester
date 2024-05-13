"use client"

import Youtube from "@/components/Youtube"
import { Suspense } from "react"


function Preview() {
  
  return (
    <Suspense fallback={<h1 className='w-full h-screen text-4xl text-center align-middle'>loading...</h1>}>
    <Youtube/>
    </Suspense>
  )
}


export default Preview