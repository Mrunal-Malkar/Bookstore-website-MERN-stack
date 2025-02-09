import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false);
  const showref=useRef(null);
  const [theme,setTheme]=useState(()=>{
    return localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
   })
 
   const applyTheme=()=>{
     console.log("clicked on theme toggle button");
     const root=document.documentElement
     if(theme=="light"){
       root.classList.add("dark")
       localStorage.setItem("theme","dark");
       setTheme("dark");
     }
     else if(theme=="dark"){
       root.classList.remove("dark")
       localStorage.setItem("theme","light");
       setTheme("light");
     }
     else{
       console.log("theme not found,theme:",theme);
     }
   }

   useEffect(()=>{
    const localStorageTheme=localStorage.getItem("theme");
    const root=document.documentElement;
    if(localStorageTheme=="dark"){
      root.classList.add("dark");
    }
    else{
      root.classList.remove("dark");
    }
   },[theme])
 

  const toggleMenu=()=>{
    setShowMenu((prev)=>!prev);
  }

  return (
    <>
      <nav className="w-screen bg-gray-50 h-[65px] dark:bg-gray-900 dark:text-white z-10 sticky top-0 flex align-middle flex-row justify-between py-3 md:text-xl text-md">

        {/* the first section */}
        <div className="md:w-1/3 w-fit  md:text-3xl dark:bg-gray-900 dark:text-white text-2xl h-full flex justify-between font-semibold text-gray-800">
          <div className="w-full md:w-1/2 flex justify-between h-full align-middle text-center md:justify-end">
            <h1 className="self-center md:ps-0 ps-3">BookStore</h1>
          </div>
        </div>

        {/* the second section */}
        <div className="md:w-1/3 hidden min-h-full align-middle md:flex ">
          <ul className="flex w-full md:flex-row flex-co align-middle items-center min-h-full justify-around">
            <li className="hover:bg-gray-300 dark:hover:bg-gray-900 p-2">
            <NavLink className={({isActive})=>isActive?"text-blue-600":""} to="/">Home</NavLink>
            </li>
            <li  className="hover:bg-gray-300 dark:hover:bg-gray-900 p-2">
            <NavLink className={({isActive})=>isActive?"text-blue-600":""} to="/store">Store</NavLink>
            </li>
            <li  className="hover:bg-gray-300 dark:hover:bg-gray-900 p-2">
            <NavLink className={({isActive})=>isActive?"text-blue-600":""} to="/about">About</NavLink>
            </li>
            <li  className="hover:bg-gray-300 dark:hover:bg-gray-900 p-2">
            <NavLink className={({isActive})=>isActive?"text-blue-600":""} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* the last section */}
        <div className="md:w-1/3 w-4/5 min-h-full me-4 md:me-6 dark:bg-gray-900 dark:text-white flex md:justify-end justify-end sm:justify-around gap-1">
        
        <div className="sm:w-3/6 flex w-1/6 border-2 border-gray-200 dark:border-gray-900">
        <input type="text" placeholder="Search books..." className="xl:w-5/6 md:w-full hidden dark:bg-gray-800 dark:text-white sm:block min-h-full p-1 pl-2 text-xl md:text-2xl bg-gray-100 text-black outline-none" />
        <div className="bg-gray-200 dark:bg-gray-800 dark:text-white  flex md:w-1/6 w-full justify-center align-middle items-center">
        <i class="fa-solid fa-magnifying-glass self-center text-2xl"></i>
          </div>
        </div>

        <div className="md:w-1/12 w-1/3 rounded-xl bg-gray-700 dark:bg-gray-900 dark:text-white hover:bg-gray-900">
        <button onClick={applyTheme} className="text-white w-full min-h-full align-middle flex justify-center font-light rounded-2xl">
        <i class={theme=="light"?"fa-regular fa-moon self-center text-2xl":"bi bi-sunrise self-center text-2xl"}></i>
        </button>
        </div>

        <div className="md:w-2/12 w-1/6 rounded-sm flex justify-center dark:bg-gray-900 dark:text-white hover:bg-gray-900 bg-gray-700">
        <button className="text-white w-4/6 min-h-full font-light text-center rounded-xl text-md md:text-xl flex align-middle">
        <p className="m-auto self-center inline">
          Login
        </p>
        </button>
        </div>

        <div className="md:w-2/12 w-2/12 md:p-1 md:hidden rounded-sm flex dark:bg-gray-900 dark:text-white justify-center hover:bg-gray-800 bg-gray-700" onClick={toggleMenu}>
        <button className="text-white w-2/6 min-h-full font-light text-center rounded-md text-md md:text-xl flex justify-center align-middle">
        <i class="fa-solid fa-bars text-2xl md:me-0 me-1 self-center"></i>
        </button>
        </div>

        </div>
      </nav>

      {showMenu && (
        <div ref={showref} className="bg-gray-200 md:hidden fixed top-16 right-0 z-20 shadow-lg p-4 rounded-md dark:bg-gray-900 dark:text-white">
          <ul className="flex flex-col gap-3 text-lg">
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"> <Link to="/">Home</Link></li>
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"><Link to="/store">Store</Link></li>
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"><Link to="/about">About</Link></li>
            <li className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};


export default Navbar;
