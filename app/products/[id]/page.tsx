'use client'
import { icons } from "@/app/assets/assets"
import Product from "@/app/components/Product"
import ReactCalendar from "@/app/components/ReactCalendar"
import Image from "next/image"
import Link from "next/link"


const productpage = () => {
  
  return (
    <div className="">
      <hr />
      <div className="mt-5">
        <Link href={"/book-online"}>
          <div className="flex items-center gap-2 w-20 py-2 bg-gray-200">
            <Image src={icons.arrow_left} alt="" className="w-5"/>
            <p>Back</p>
          </div>
        </Link>
      </div>

     <Product />
     <ReactCalendar />
    </div>
  )
}

export default productpage
