import React, { useEffect, useState } from 'react'
import image1 from "../public/bg.png"
import image2 from "../public/bg.png"
import image3 from "../public/bg.png"
import image4 from "../public/bg.png"
import image5 from "../public/bg.png"
import Image from "next/image";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import gsap from 'gsap';
import { useRouter } from 'next/router';

const ShopHeader = () => {

    const router = useRouter();
    const [image, setImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setImage(image >= 5 ? 1 : image+1), 10000);
        return () => clearInterval(interval);
    }, [image])

  return (
    <div className='h-[650px] w-[99.5vw] relative bg-cover overflow-x-hidden'>
        <div className='absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0'>
            <Image alt="hero" src="https://media.giphy.com/media/3oEduMhFrYvKk4giac/giphy.gif" unoptimized fill />
            {/* <Image alt="hero" src={image2} fill className={`${image===2 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image3} fill className={`${image===3 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image4} fill className={`${image===4 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image5} fill className={`${image===5 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} /> */}
        </div>
        <div className='z-10 relative w-[100vw] flex justify-start top-[10rem] flex-col h-[300px] gap-5 items-center'>
            <h5 className='text-white text-center font-normal text-6xl leading-snug'>
                Find the perfect &nbsp;<i>Freelance</i> <br /> services for your business.
            </h5>
            <div className="flex align-middle">
                <div className="relative">
                    <input 
                        type="text" 
                        className='h-14 w-[600px] text-black pl-10 rounded-md rounded-r-none'
                        placeholder={'Try "building website"'}
                    />
                </div>
                <button className='bg-[#F4FF00] text-black px-12 text-lg font-semibold rounded-r-md'>
                    Search
                </button>
            </div>
            <div className='text-white flex gap-4'>
                Popular: <ul className='flex gap-5'>
                    <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        Design Consultation
                    </li>
                    <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        Video Editing
                    </li>
                    <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        Website Development
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ShopHeader