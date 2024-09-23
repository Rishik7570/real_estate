'use client'
import Image from "next/image"
import { countryhouse, luxhouse } from "../assets/assets"
import Link from "next/link"
import { useEffect, useState } from "react"




const Book_online = () => {

  const originalproducts = countryhouse.concat(luxhouse)
  const [products,setProducts] = useState(originalproducts)
  const [type,setType] = useState("")

  const filterdata = ()=>{

    let data = originalproducts.slice()
    
    if(type){
      data = data.filter((item)=>item.type === type)
    }
    
    setProducts(data)
    
  }

  useEffect(()=>{
    filterdata()
  },[type])

  return (
    <div className="flex flex-col w-[80%] mx-auto items-center gap-14 sm:gap-20">

      <div className="mt-14 flex gap-10">
        <div className="cursor-pointer" onClick={()=>setType("")}>
          <p className="">ALL SERVICES</p>
          <hr className={type === ""?"border-black transition ease-in-out duration-300":"border-transparent"}/>
        </div>
        <div className="cursor-pointer" onClick={()=>setType("sales")}>
          <p className="">SALES</p>
          <hr className={type === "sales"?"border-black transition ease-in-out duration-300":"border-transparent"}/>
        </div>
        <div className="cursor-pointer" onClick={()=>setType("rental")}>
          <p className="">RENTAL</p>
          <hr className={type === "rental"?"border-black transition ease-in-out duration-300":"border-transparent"}/>
        </div>
      </div>


      <div className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">

          {
            products.map((item,index)=>(
              <div key={index} className="flex flex-col items-center gap-3 border border-slate-400">
                <Link href={`/products/${item.id}`}><Image src={item.image} alt="" className="w-60 lg:w-80 h-40 lg:h-52" /></Link>
                <p className="text-lg sm:text-xl font-bold">{item.name}</p>
                <p className="text-base text-[#344465]">{item.location}</p>
                <p className="text-sm text-gray-500">{item.rooms}</p>
                <p className="font-bold">Rs. {item.price}</p>
                <Link href={`/products/${item.id}`}><button className="bg-[#344465] text-white py-2 px-4 my-2 hover:bg-[#6281bf] transition ease-in-out duration-300"
                  >BOOK NOW</button></Link>
              </div>
            ))
          }

        </div>
      </div>
      
    </div>
  )
}

export default Book_online
