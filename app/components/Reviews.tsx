'use client'
import Image from "next/image"
import { icons } from "../assets/assets"



const Reviews = () => {


  return (
    <div className="flex flex-col items-center mt-20 sm:mt-28 h-[70%] w-full bg-cover bg-fixed bg-parallax" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/bg2.jpg)'}}>
      <div className="text-white font-bold text-2xl sm:text-3xl mt-10 sm:mt-16">
        <p className="">WHAT OUR CLIENTS THINK</p>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row mb-10 sm:mb-16">

        <div className="flex flex-col items-center gap-5">
            <Image src={icons.apostrophe} alt="" className="w-12" />
            <p className="text-base lg:text-xl text-white text-center w-[50%]">`I am a testimonial.Click to edit me and add text that says something nice about you and your services`</p>
            <p className="text-[#cbb48e] font-bold">- Tina & James Heart</p>
        </div>

        <div className="flex flex-col items-center gap-5">
            <Image src={icons.apostrophe} alt="" className="w-12" />
            <p className="text-base lg:text-xl text-white text-center w-[50%]">`I am a testimonial.Click to edit me and add text that says something nice about you and your services`</p>
            <p className="text-[#cbb48e] font-bold">- Mary van den Reich</p>
        </div>

        <div className="flex flex-col items-center gap-5">
            <Image src={icons.apostrophe} alt="" className="w-12" />
            <p className="text-base lg:text-xl text-white text-center w-[50%]">`I am a testimonial.Click to edit me and add text that says something nice about you and your services`</p>
            <p className="text-[#cbb48e] font-bold">- Paul & Susan Taylor</p>
        </div>

      </div>
    </div>
  )
}

export default Reviews
