import React, { useEffect, useState,useRef } from "react";

const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false);
  const showref=useRef(null);

  const toggleMenu=()=>{
    setShowMenu((prev)=>!prev);
  }

  return (
    <>
      <nav className="w-screen bg-gray-50 h-[65px] sticky top-0 flex align-middle flex-row justify-between py-3 md:text-xl text-md">

        {/* the first section */}
        <div className="md:w-1/3 w-fit  md:text-3xl text-2xl h-full flex justify-between font-semibold text-gray-800">
          <div className="w-full md:w-1/2 flex justify-between h-full align-middle text-center md:justify-end">
            <h1 className="self-center md:ps-0 ps-3">BookStore</h1>
          </div>
        </div>

        {/* the second section */}
        <div className="md:w-1/3 hidden min-h-full align-middle md:flex ">
          <ul className="flex w-full md:flex-row flex-co align-middle items-center min-h-full justify-around">
            <li>Home</li>
            <li>Store</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        {/* the last section */}
        <div className="md:w-1/3 w-4/5 min-h-full flex md:justify-end justify-end sm:justify-around gap-1">
        
        <div className="sm:w-3/6 flex w-1/6 border-2 border-gray-200">
        <input type="text" placeholder="Search books..." className="xl:w-5/6 md:w-full hidden sm:block min-h-full p-1 pl-2 text-xl md:text-2xl bg-gray-100 text-black outline-none" />
        <div className="bg-gray-200  flex md:w-1/6 w-full justify-center align-middle items-center">
        <i class="fa-solid fa-magnifying-glass self-center text-2xl"></i>
          </div>
        </div>

        <div className="md:w-1/12 w-1/3 rounded-xl bg-gray-700 hover:bg-gray-800">
        <button className="text-white w-full min-h-full align-middle flex justify-center font-light rounded-2xl">
        <i class="fa-regular fa-moon self-center text-2xl"></i>
        </button>
        </div>

        <div className="md:w-2/12 w-1/6 md:p-1  rounded-sm flex justify-center hover:bg-gray-800 bg-gray-700">
        <button className="text-white w-4/6 min-h-full font-light text-center rounded-md text-md md:text-xl flex align-middle">
        <p className="m-auto self-center inline">
          Login
        </p>
        </button>
        </div>

        <div className="md:w-2/12 w-2/12 md:p-1  rounded-sm flex justify-center hover:bg-gray-800 bg-gray-700" onClick={toggleMenu}>
        <button className="text-white w-2/6 min-h-full font-light text-center rounded-md text-md md:text-xl flex justify-center align-middle">
        <i class="fa-solid fa-bars text-2xl md:me-0 me-1 self-center"></i>
        </button>
        </div>

        </div>
      </nav>

      {showMenu && (
        <div ref={showref} className="bg-gray-200 fixed top-16 right-0 z-20 shadow-lg p-4 rounded-md">
          <ul className="flex flex-col gap-3 text-lg">
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer">Home</li>
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer">Order</li>
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer">Contact us</li>
          </ul>
        </div>
      )}
    </>
  );
};


export default Navbar;
