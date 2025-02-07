import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center gap-y-3 bg-gray-200 text-gray-700 md:text-2xl text-xl font-light p-6 mt-8'>
        <div>
            <ul className='flex gap-x-3'>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='flex flex-row gap-x-4'>
            <div className='h-10 w-10'><i class="fa-brands fa-x-twitter h-full w-full"></i></div>
            <div className='h-10 w-10'><i class="fa-brands fa-instagram h-full w-full"></i></div>
            <div className='h-10 w-10'><i class="fa-brands fa-facebook-f h-full w-full"></i></div>
        </div>
        <div><p>Copyright@BookStore</p></div>
    </div>
  )
}

export default Footer