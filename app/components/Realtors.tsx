import Image from "next/image"
import { icons } from "../assets/assets"


const Realtors = () => {
  return (
    <div className="flex flex-col items-center mt-20 sm:mt-28">
      <div className="">
        <p className="text-[#344465] font-bold text-2xl sm:text-3xl">REALTORS YOU CAN TRUST</p>
      </div>

      <div className="flex flex-col sm:flex-row mt-12 sm:mt-16 justify-around">

        <div className="flex flex-col items-center gap-4  py-5">
            <Image src={icons.memo} alt="" className="w-14"/>
            <div className="text-[#344465] font-bold text-xl text-center">
                <p className="">FREE REGISTRATION</p>
                <p className="">NO HIDDEN FEES</p>
            </div>
            <div className="w-[50%]">I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
        </div>

        <div className="flex flex-col items-center gap-4 py-5">
            <Image src={icons.stack} alt="" className="w-14"/>
            <div className="text-[#344465] font-bold text-xl text-center">
                <p className="">PROPERTY APPRAISAL</p>
                <p className="">FREE OF CHARGE</p>
            </div>
            <div className="w-[50%]">I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
        </div>

        <div className="flex flex-col items-center gap-4 py-5">
            <Image src={icons.location_map} alt="" className="w-14"/>
            <div className="text-[#344465] font-bold text-xl text-center">
                <p className="">LARGE COVERAGE</p>
                <p className="">OFFICES IN 4 LOCATIONS</p>
            </div>
            <div className="w-[50%]">I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
        </div>

      </div>
    </div>
  )
}

export default Realtors
