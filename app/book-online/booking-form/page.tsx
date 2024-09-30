'use client'
import { icons } from "@/app/assets/assets"
import { Context } from "@/app/context/context"
import Image from "next/image"
import { useContext } from "react"
import { useRouter } from "next/navigation"


const Bookingform = () => {

const context = useContext(Context)
const router = useRouter() 

  return context?.cart ? (
    <div className="flex flex-col w-[90%] mx-auto mb-10">
      <hr className="bg-black h-0.5"/>
      <div className="back mt-12 sm:mt-16">    
        <div className="flex items-center gap-2 w-20 py-2 bg-gray-200" onClick={()=>router.back()}>
          <Image src={icons.arrow_left} alt="" className="w-5"/>
          <p>Back</p>
        </div>       
      </div>

      <form className="flex flex-col md:flex-row justify-normal md:justify-around mt-12 sm:mt-16">
          <div className="left flex flex-col gap-4 md:gap-6">
            <p className="text-2xl md:text-3xl font-bold">Client Details</p>
            <hr className="h-0.5 bg-gray-400"/>
            <div className="flex justify-between gap-5 md:gap-3">
              <input type="text" placeholder="Name" className="border border-gray-700 px-4 py-2 text-base" required/>
              <input type="email" placeholder="Email" className="border border-gray-700 px-4 py-2 text-base" required/>
            </div>
            <input type="text" placeholder="Phone" className="w-full border border-gray-700 px-4 py-2 text-base" required/>
            <textarea placeholder="Add a message" className="w-full border border-gray-700 px-4 py-2 text-base h-40" />
          </div>

          <div className="right flex flex-col gap-4 md:gap-6">
            <p className="text-2xl md:text-3xl font-bold">Booking Details</p>
            <hr className="h-0.5 bg-gray-400 w-full"/>
            {
              context.agent ? <p className="text-lg font-semibold">Agent- {context.agent}</p> : <p>Agent- Not selected</p>
            }
            {
              context.date ? <p className="">{context.date}</p> : <p>Date- Not selected</p>
            }
            <p className="">Time- {context.time}</p>
            <div className="flex items-center gap-2 border border-gray-500 rounded-2xl px-2 py-1">
              <Image src={icons.video_call} alt="" className="w-5" />
              <p className="">Available Online</p>
            </div>
            {
              context.product?.location ? <p className="">Location- {context.product?.location}</p> : <p>Location- Not selected</p>
            }
            <hr className="h-0.5 bg-gray-400 w-full"/>
            {
              context.product ? <button type="submit" className="py-2 bg-[#344465] text-white hover:bg-[#5772a8]">Submit</button>
              : <div className="text-lg bg-[#344465] text-white py-1 px-2 hover:bg-[#5772a8]" onClick={()=>router.push("/book-online")}>
                  Click me to redirect to Booking page
                </div>
            }
          </div>
      </form>
    </div>
  ) : (<>No product in the cart</>)
}

export default Bookingform
