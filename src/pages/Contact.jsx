import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span> </p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-5'>
          <p>Our OFFICE</p>
          <p>54709 Willms Station 
          Suite 350,<br /> Washington, USA</p>
          <p>Tel: (415) 555‑0132</p>
          <p>Email: greatstackdev@gmail.com</p>
          <p>Careers at PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact