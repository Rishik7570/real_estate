'use client'
import Image from "next/image"
import Link from "next/link"
import { icons } from "../assets/assets"


const Footer = () => {
  return (
    <div className="flex items-center justify-around mt-20 sm:mt-28 bg-[#be9f6c] py-5">

      <div className="flex items-center">
        <Image src={icons.copyright} alt="" className="w-6"/>

        <p className="">2024 by Lorem Ipsum. Powered and secured by <Link href={``} target="_blank" rel=""
           className="underline">Lorem Ipsum</Link></p>

      </div>


      <div className="flex gap-5">
        <Link href={`https://www.facebook.com/`} target="_blank" rel=""><Image src={icons.facebook_icon} alt="" className="w-8"/></Link>
        <Link href={`https://www.instagram.com/`} target="_blank" rel=""><Image src={icons.insta} alt="" className="w-8"/></Link>
      </div>

    </div>
  )
}

export default Footer
