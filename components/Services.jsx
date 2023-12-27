import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image';

const Services = () => {
  const router = useRouter();
  const servicesData = [
    {
        name: "GRAPHICS",
        label: "Build your business",
        image: "/image1.png" 
    },
    {
        name: "VIDEO EDITING",
        label: "Build your business",
        image: "/image3.png" 
    },
    {
        name: "UIUX / WEB DEVELOPMENT",
        label: "Build your online presence",
        image: "/image4.png" 
    },
    {
        name: "DESIGN CONSULTATION",
        label: "Business Consultation",
        image: "/image2.png" 
    },
    {
        name: "PHOTOGRAPHY/CINEMATOGRAPHY",
        label: "Capture your moments",
        image: "/image5.png" 
    },
    {
        name: "PACKAGE",
        label: "Build your own deal",
        image: "/image6.png" 
    },
  ]
  return (
    <div className='mx-20 my-16 flex flex-col items-center'>
        <h2 className='text-5xl mb-20 w-[356px] text-white font-extrabold'>
            Our Services
        </h2>
        <ul className='flex flex-wrap gap-16 justify-center'>
            {servicesData.map(({ name, label, image }) => (
                <li
                  key={name}
                  className='relative z-[5] cursor-pointer'
                  onClick={() => router.push(`/search?q-${name.toLowerCase()}`)}
                >
                   <div className='absolute z-10 text-white left-5 top-4' >
                     <span className='text-[1.2rem]'>{label}</span>
                     <h6 className='text-[1.3rem] font-black'>{name}</h6>
                   </div>
                   <div className="h-[400px] w-[400px]">
                    <div className='bg-[#000] w-[400px] h-[400px] z-[12] visible'></div>
                     <Image src={image} fill alt='services'/>
                   </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Services