import Image from "next/image"
import { luxhouse } from "../assets/assets"
import Link from "next/link"


const Latestproperty = () => {
  return (
    <div className="mt-[100px] sm:mt-[200px] md:mt-[250px] flex flex-col items-center">
      <div className="">
        <p className="text-[#344465] text-2xl sm:text-3xl font-bold">LATEST PROPERTIES</p>
      </div>
      <div className="mt-[100px] flex flex-col md:flex-row items-center gap-5">
        {
          luxhouse.slice(0,3).map((house,index)=>(
            <div key={index} className="max-w-[341px] flex flex-col gap-3">
              <Link href={`/products/${house.id}`}><Image src={house.image} alt="" className="max-w-[340px]" /></Link>
              <p className="text-[#344465] font-bold text-lg">{house.name}</p>
              <p className="text-[#344465] font-extrabold">{house.location}</p>
              <p className="text-[#344465] font-semibold">Rs. {house.price}</p>
              <p className="mt-2 text-slate-400">{house.rooms}</p>
              <p className="text-slate-600">{house.description}</p>
              <Link href={`/products/${house.id}`}><div className="mt-4 border border-slate-700 max-w-[120px] text-center px-4 py-2
                                 hover:text-white hover:bg-slate-700 transition ease-in-out duration-500">Read More</div></Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Latestproperty
