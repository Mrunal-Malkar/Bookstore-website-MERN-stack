import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [cartBooks, setCartBooks] = useState([]);
  const [totalPrice,setTotalPrice]=useState(0);

  const getCartBooks = async () => {
    try {
      let Books=await fetch("http://localhost:3000/store")
      let BooksJson =await Books.json()
      console.log(BooksJson)
      let filteredCartBooks = BooksJson.filter(item => item.addedtocart == true)
      setCartBooks(filteredCartBooks);

    } catch (err) {

      console.log("error in cartBooks:", err);
      process.exit(1);

    }
  }

  const setPrice=async()=>{
    
    await cartBooks.forEach(element => {
      setTotalPrice((prev)=>prev+element.price)
    })    
    console.log("re-rendered")
    
  }


  useEffect(() =>{getCartBooks();setPrice()}, []);

  return (
    <>
    <div className='dark:bg-gray-800 dark:text-white flex flex-col items-center'>
      <div className='text-2xl md:text-3xl dark:text-orange-400 font-bold'>Your books in Cart</div>


      <div className='w-screen lg:w-5/6 m-auto dark:bg-gray-800 gap-y-4 font-semibold min-h-dvh flex-col p-2 md:p-6 flex flex-wrap' >
        {cartBooks.length > 0 ? cartBooks.map((item) => {
          return (
            <div className='w-full md:w-1/2 order-2 dark:text-gray-100 rounded-sm md:text-2xl bg-gray-200 text-xl border-2 dark:bg-gray-700 dark:border-gray-100 border-gray-600 flex flex-row'>
              <div className='w-1/2 p-2 border-r-2 border-gray-100'>{item.title}</div>
              <div className='w-1/2 p-2 text-center'>{item.price}$</div>
            </div>
          )
        }):
        <div className='m-auto text-xl md:text-2xl'>No Books added to Cart!!</div>
        }
        {cartBooks.length>0?(
          <div className='md:w-1/2 w-full flex flex-col'>
            <div className='w-full flex bg-green-700 border-2 border-gray-800 dark:border-gray-50'>
              <div className='w-1/2 border-r-2 border-gray-800 dark:border-gray-50'>Total Price:</div>
              <div className='w-1/2'>{totalPrice}</div>
            </div>
          </div>
        ):null}

      </div>
      </div>
    </>
  )

}

export default Cart