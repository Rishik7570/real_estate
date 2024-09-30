'use client'
import Image from "next/image";
import { useParams } from "next/navigation"
import { countryhouse,luxhouse } from "../assets/assets";
import { useContext } from "react";
import { Context } from "../context/context";



const Product = () => {

  const context = useContext(Context)
    const params = useParams()
    const productId = Number(params.id)
    
    const product = countryhouse.find((item)=>item.id === productId) || luxhouse.find((item)=>item.id === productId)
    context?.setProduct(product)

    
  return product ? (
    <div className="">

      <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-20 sm:gap-40 my-14 sm:my-20">
        <Image src={product.image} alt="" className="items-center w-60 sm:w-[300px] md:w-[400px] aspect-square" />

        <div className="flex flex-col gap-6 sm:gap-10">
            <p className="text-3xl font-bold">Location- {product.name}</p>
            <p className="text-2xl">City- {product.location}</p>
            <p className="text-gray-500">Rooms- {product.rooms}</p>
            <p className="underline" style={{textTransform:"capitalize"}}>Type of service- {product.type}</p>
            <p className="font-semibold">Price- Rs.{product.price}</p>
            <p className="">About- {product.description}</p>
        </div>

      </div>
      
    </div>
  ) : <></>
}

export default Product
