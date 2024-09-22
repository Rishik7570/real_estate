import Image from "next/image"
import Link from "next/link"
import { countryhouse } from "../assets/assets"

const Latestrental = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <div className="">
        <p className="text-2xl sm:text-3xl font-bold text-[#344465]">LATEST RENTAL PROPERTIES</p>
      </div>

      <div className="up w-full mt-16 bg-[#1e3054] flex justify-center gap-8 sm:gap-12 py-4 p-2">
        <div className="relative">
          <Link href={`/products/${countryhouse[6].id}`}><Image src={countryhouse[6].image} alt="" className="h-60 w-40 sm:h-80 sm:w-56" /></Link>
        </div>
        <div className="text-white w-80 flex flex-col gap-3">
          <p className="text-2xl font-bold">{countryhouse[6].name}</p>
          <p className="text-xl font-bold">{countryhouse[6].location}</p>
          <p className="text-[#cbb48e]">{countryhouse[6].rooms}</p>
          <p className="">{countryhouse[6].description}</p>
          <p className="text-[#5272b2] font-bold text-lg">Rs. 20000/per week</p>
        </div>
      </div>

      <div className="down w-full bg-[#344465] flex justify-center gap-8 sm:gap-12 pt-3 p-2">
        <div className="text-white w-80 flex flex-col gap-3">
            <p className="text-2xl font-bold">{countryhouse[3].name}</p>
            <p className="text-xl font-bold">{countryhouse[3].location}</p>
            <p className="text-[#cbb48e]">{countryhouse[3].rooms}</p>
            <p className="">{countryhouse[3].description}</p>
            <p className="text-[#5272b2] font-bold text-lg">Rs. 18000/per week</p>
          </div>
          <Link href={`/products/${countryhouse[3].id}`}><Image src={countryhouse[3].image} alt="" className="h-60 w-40 sm:h-80 sm:w-56" /></Link>
      </div>
    </div>
  )
}

export default Latestrental
