import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center gap-y-3 dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-700 md:text-2xl text-xl font-light p-6 pt-12'>
        <div>
            <ul className='flex gap-x-3'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
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