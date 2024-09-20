import Image from "next/image"
import { icons } from "../assets/assets"
import Link from "next/link"

const Navbar = () => {

  return (
    <div className="flex justify-evenly">
        <div className="nav-left flex gap-5">
            <Link href={'/'}><Image className="w-28 md:w-14" src={icons.company_logo} alt="" /></Link>
            <div className="flex items-center gap-3">
                <Image className="w-10" src={icons.profile} alt=""/>
                <Link href={''}>Log in</Link>
            </div>
        </div>

      <div className="nav-right flex items-center">
        <ul className="flex gap-10">
            <Link href={'/'}><li className="">HOME</li></Link>
            <Link href={'/agents'}><li className="">AGENTS</li></Link>
            <Link href={''}><li className="">CONTACT</li></Link>
            <Link href={'/book-online'}><li className="">BOOK ONLINE</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
