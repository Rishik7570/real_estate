'use client'
import { useContext } from "react"
import { Context } from "../context/context"
import { icons } from "../assets/assets"
import Image from "next/image"


const Cart = () => {

    const context = useContext(Context)

  return context?.visibleCart ? (
    <div className="absolute h-full w-full bg-black opacity-85 z-10">
        <div className="back=button">
          <div className="flex items-center gap-2 w-20 py-2 bg-gray-200" onClick={()=>context.setVisibleCart(false)}>
            <Image src={icons.arrow_left} alt="" className="w-5"/>
            <p>Back</p>
          </div>
        </div>

        <div className="cart bg-white flex flex-col items-center w-[80%] mx-auto">
          <p className="text-3xl font-bold mt-3">Cart</p>
          <hr className="bg-black w-[90%] h-0.5 mt-1"/>
          <div className="w-full">
            {
            context.cart ? 
            <div className="">
              
              <div className="">
                {
                  context.cart.map((item,index)=>{
                    console.log(item);
                    return(
                    <div key={index} className="">
                      <div className="flex items-center justify-around">
                        <Image src={item.product?.image} alt="" unoptimized className="w-10 md:w-40 aspect-square"/>
                        <p className="text-xs sm:text-lg font-bold">{item.product?.name}</p>
                        <div className="">
                          <p className="font-semibold text-xs sm:text-base">{item.date}</p>
                          <p className="font-semibold text-xs sm:text-base">Time: {item.time}</p>
                        </div>
                        <p className="font-bold text-xs sm:text-base">Rs.{item.product?.price}</p>
                        <p className="cursor-pointer text-base md:text-2xl" onClick={()=>context.removeFromCart(item.product?.id)}>X</p>
                      </div>
                      <hr className="bg-gray-500 w-[90%] h-0.5 mt-1 mx-auto"/>
                    </div>
                  )})
                }
              </div>

            </div>
             : 
            <div className="text-xl p-10">
              Cart empty
            </div>
            }
          </div>
        </div>
    </div>
  ) : <></>
}

export default Cart
