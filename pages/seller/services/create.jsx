import React, { useState } from 'react'
import Navbar from '../../../components/Navbar';
import ShopHeader from '../../../components/ShopHeader';

const create = () => {
    const [clicked, setClicked] = useState(false);
    const [files, setFiles] = useState([]);
    const [features, setFeatures] = useState([]);
    const [data, setData] = useState({
        title: "",
        category: "",
        time: 0,
        revisions: 0,
        feature: "",
        price: 0,
        shortDesc: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name] : e.target.value });
    };

    const inputClassName =
    "block p-4 w-full text-white text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 ";
  const labelClassName =
    "mb-2 text-lg font-medium text-gray-900 dark:text-white";
  return (
    <>
    <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
        </div>
        <div className={`${clicked ? "hidden" : "block"}`}>
          <div className='min-h-[80vh] relative my-10 mt-0 top-[10rem] px-32'>
            <h1 className='text-4xl text-white mb-3 w-full'>Create a new Service</h1>
            <h3 className='text-xl text-white mb-5 w-full'>Enter the details to create the service.</h3>
            <div className='flex flex-col gap-5 mt-10'>
                <div className='grid grid-cols-2 gap-11'>
                    <div>
                        <label htmlFor="title" className={labelClassName}>Service Title</label>
                        <input type="text" name='title' value={data.title} onChange={handleChange} id='title' className={inputClassName} placeholder='eg. Logo Design' required/>
                    </div>
                    <div>
                    <label htmlFor="category" className={labelClassName}>Select a Category</label>
                    <select name="category" id="category" className='bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-[#F4FF00] focus:border-[#F4FF00] blocxk w-full p-4' onChange={handleChange}></select>
                    </div>
                </div>
            </div>
          </div>
          <footer className='flex justify-center my-7 mt-[5rem]'>
            <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
          </footer>
        </div>
    </>
  )
}

export default create