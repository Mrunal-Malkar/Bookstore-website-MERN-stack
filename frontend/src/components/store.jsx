import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"

const Store = () => {

  const dropdown = useRef()
  const addcartref = useRef()
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");

  const filterBooks = async () => {
    try {
      let allBooks = await fetch(`${import.meta.env.VITE_BACKEND_URL}/store`);
      let jsonbooks = await allBooks.json();

      if (category == "All") {
        setBooks(jsonbooks)
      }
      else {
        let filteredBooks = jsonbooks.filter(item => item.category == category);
        setBooks(filteredBooks)
      }

    } catch (err) {

      console.log("cannot setBooks", err);

    }
  }

  const handleCart = async (bookId) => {
    try {

      let response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/cart/handle`, { bookId })
      setBooks(books.map(el => 
        el._id === bookId ? { ...el, addedtocart: !el.addedtocart } : el
      ));
      
    } catch (err) {

      console.log("error adding to cart", err)

    }
  }


  useEffect(() => {
   const filter=async()=>{
    await filterBooks()}
    filter()
  }, [category])


  return (
    <>
      <div className='w-screen font-medium text-xl lg:text-2xl flex dark:bg-gray-800 dark:text-white flex-col justify-center items-start p-2'>
        <h1>Filter Books by,</h1>
        <div className='flex flex-row p-2 border-2 dark:bg-gray-800 border-gray-400 rounded-xl bg-gray-200'>
          <p>Category:</p>
          <select ref={dropdown} value={category} onChange={(e) => { setCategory(e.target.value) }} className='border-2 border-gray-400 bg-gray-200 dark:bg-gray-800 rounded-xl'>
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Finance">Finance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Motivation">Motivation</option>
          </select>
        </div>
      </div>

      <div className='w-screen dark:bg-gray-800'>
        <div className='w-screen lg:w-5/6 m-auto dark:bg-gray-800 gap-y-4 md:gap-x-4 lg:gap-x-10 min-h-dvh flex-row p-2 md:p-6 flex flex-wrap' >
          {books.length > 0 ? books.map((item) => {
            return (

              <div key={item._id}
                className='w-6/12 lg:w-1/5 md:w-1/4 p-2 md:p-4 h-fit drop-shadow-2xl dark:hover:bg-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-900 dark:rounded-2xl'>
                <div className='h-2/4'>
                  <img className='w-full h-full overflow-hidden' src="https://static.vecteezy.com/system/resources/previews/047/751/141/non_2x/a-blue-book-with-a-yellow-bookmark-vector.jpg" alt="book img" />
                </div>

                <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
                  <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-white'>`{item.title}`</h1>
                  <div className='w-full flex flex-row flex-wrap'>
                    <p className='m-auto'>Price:<span className='line-through text-red-500'>498$</span></p>
                    <p className='m-auto'>Now at:<span className='text-green-600 font-semibold'>{item.price}$</span></p>
                  </div>
                </div>
                <div className='h-1/4 w-full text-lg md:text-xl self-center'>
                  <button 
                  ref={addcartref}
                  onClick={() => { handleCart(item._id);}} 
                  className={item.addedtocart?`w-full justify-center dark:text-gray-900 bg-green-600`:'w-full justify-center dark:text-gray-900 bg-yellow-500'}>
                  
                  {(!item.addedtocart)?(
                    <>
                    Add to cart
                  <i class="bi bi-cart"></i>
                  </>)
                  :(
                    <>
                    Added to Cart
                  <i class="bi bi-cart-check"></i>
                  </>)
                  } 
                  </button>
                </div>

              </div>
            )
          }) :
            <div className='m-auto text-xl md:text-2xl dark:text-white'>Loading...</div>
          }
        </div>
      </div>

    </>
  )
}

export default Store