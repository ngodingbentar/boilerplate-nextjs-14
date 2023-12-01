'use client'
import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center justify-center items-center w-full max-w-[500px]">
        <div className="text-4xl font-bold">Ngodingbentar</div>
        <div>
          <img src={'/404.svg'} alt={'404'} />
        </div>
        <Link href={'/'} style={{ color: 'blue' }} >Back to Home</Link>
      </div>
    </div>
  )
}