'use client'
import Image from "next/image";
import { icons } from "../assets/assets";
import { useState } from "react";

const images = [
    "/images/bg1.jpg", // make sure this file exists
    "/images/bg3.jpg", 
    "/images/bg4.jpg"
  ];
  

const Background_img = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  return (
    <div
      className={`h-screen w-full bg-cover bg-center transition-all duration-1000`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      onClick={handleClick}
    >
        <div className="relative hidden lg:block">
            <div className="text-white flex items-center gap-2 bg-sky-800 opacity-75 max-w-[250px] px-5 py-2
                              absolute top-0 left-[75%]">
                <Image src={icons.phone} alt="" className="w-10"/>
                <p>Call Us! 123-456-7890</p>
            </div>
        </div>

        <div className="relative hidden lg:block">
            <div className="text-white max-w-[350px] flex flex-col items-center gap-4 bg-sky-800 opacity-85 px-6 py-5
                                absolute bottom-0 translate-y-[200%] left-[15%]">
                <p className="text-3xl font-bold mt-2">STUNNING 6 BED HOUSE IN THE HEART OF THE CITY</p>
                <p className="text-lg">I am a paragraph. 
                    Click here to add your own text and edit me. 
                    Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <hr className="w-[300px]" />
                <p className="text-2xl">$2,000,000</p>
                <button className="text-2xl border border-white px-5 py-2 hover:bg-white hover:text-black 
                                    transition ease-in-out duration-500">ALL SALES</button>
            </div>
        </div>
    </div>
  );
};

export default Background_img;
