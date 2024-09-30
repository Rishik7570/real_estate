'use client'
import Image from "next/image"
import { icons } from "../assets/assets"
import Link from "next/link"
import { useContext, useState } from "react"
import { Context } from "../context/context"


const Navbar = () => {

  const context = useContext(Context)

  const [visible,setVisible] = useState(false)

  return (
    <div className="flex justify-evenly">
        <div className="nav-left flex items-center gap-5">
            <Link href={'/'}><Image className="w-14 md:w-20 lg:w-24" src={icons.company_logo} alt="" /></Link>
            <Link href={''} className="flex items-center">
                <div className="flex items-center gap-3">
                  <Image className="w-6 md:w-8 lg:w-10" src={icons.profile} alt=""/>
                  <p className="hidden sm:block">Log in</p>
                </div>
            </Link>
            <Image src={icons.cart} alt="" className="w-6 md:w-8" onClick={()=>context?.setVisibleCart(! context.visibleCart)} />
            
        </div>

        <div className="nav-right sm:flex items-center hidden">
          <ul className="flex gap-10">
              <Link href={'/'}><li className="">HOME</li></Link>
              <Link href={'/agents'}><li className="">AGENTS</li></Link>
              <Link href={'/#contact'}><li className="">CONTACT</li></Link>
              <Link href={'/book-online'}><li className="">BOOK ONLINE</li></Link>
          </ul>
        </div>

        {/* Nav-right for smaller screen */}
        <div className={`sm:hidden items-center flex`}>
          <Image src={icons.menu} alt="" className="w-6" onClick={()=>setVisible(true)}/>
          <div className={`side-menu bg-sky-800 absolute top-0 bottom-0 right-0 ${visible ? 'w-full':'hidden'}`}>
            <Image src={icons.arrow_left} alt="" className="w-8" onClick={()=>setVisible(false)} />
            <ul className="flex flex-col items-center gap-6 text-white text-xl mt-5">
                <Link href={'/'} onClick={()=>setVisible(false)}><li className="">HOME</li></Link>
                <hr className="w-[90%]"/>
                <Link href={'/agents'} onClick={()=>setVisible(false)}><li className="">AGENTS</li></Link>
                <hr className="w-[90%]"/>
                <Link href={''} onClick={()=>setVisible(false)}><li className="">CONTACT</li></Link>
                <hr className="w-[90%]"/>
                <Link href={'/book-online'} onClick={()=>setVisible(false)}><li className="">BOOK ONLINE</li></Link>
                <hr className="w-[90%]"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
