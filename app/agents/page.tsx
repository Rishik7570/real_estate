'use client'
import Image from "next/image"
import { agents } from "../assets/assets"
import Link from "next/link"
import { useContext } from "react"
import { Context } from "../context/context"


const Agentpage = () => {

  const context = useContext(Context)

  return (
    <div className="bg-[#1e3054] text-white w-full flex flex-col items-center">
        
        <div className="my-16 sm:my-24">
          <p className="text-3xl font-bold">OUR AGENTS</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-16 mb-20 sm:mb-28">

            {
                agents.map((agent,index)=>(
                    <div key={index} className="flex flex-col gap-4">
                        <Image src={agent.image} alt="" className="w-52 h-72"/>
                        <p className="text-[#5272b2] text-xl font-bold">{agent.name}</p>
                        <p className="text-[#cba882]">{agent.type}</p>
                        <Link href={`/book-online`}><button className="w-full py-2 bg-[#939cb2] text-[#1e3054] hover:text-[#fff]
                           hover:bg-black transition ease-in-out duration-500" onClick={()=>context?.setAgent(agent.name)}>Book now</button></Link>
                        
                    </div>
                ))
            }

        </div>
      
    </div>
  )
}

export default Agentpage