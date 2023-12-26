import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image';

const Services = () => {
  const router = useRouter();
  const servicesData = [
    {
        name: "GRAPHICS",
        label: "Build your business",
        image: "/services.jpg" 
    },
    {
        name: "VIDEO EDITING",
        label: "Build your business",
        image: "/services.jpg" 
    },
    {
        name: "UIUX / WEB DEVELOPMENT",
        label: "Build your online presence",
        image: "/services.jpg" 
    },
    {
        name: "DESIGN CONSULTATION",
        label: "Business Consultation",
        image: "/services.jpg" 
    },
    {
        name: "PHOTOGRAPHY/CINEMATOGRAPHY",
        label: "Capture your moments",
        image: "/services.jpg" 
    },
    {
        name: "PACKAGE",
        label: "Build your own deal",
        image: "/services.jpg" 
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
                     <span>{label}</span>
                     <h6 className='font-extrabold text-1xl'>{name}</h6>
                   </div>
                   <div className="h-[390px] w-[400px]">
                     <Image src={image} fill alt='services'/>
                   </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Services