import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [cartBooks, setCartBooks] = useState([]);

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

  useEffect(() => { getCartBooks() }, []);
  console.log(cartBooks)
  console.log("this is length of cartBooks",cartBooks.length)

  return (
    <>
      <div>Cart</div>


      <div className='w-screen lg:w-5/6 m-auto dark:bg-gray-800 gap-y-4 md:gap-x-4 lg:gap-x-10 min-h-dvh flex-row p-2 md:p-6 flex flex-wrap' >
        {cartBooks.length > 0 ? cartBooks.map((item) => {
          return (
            <div>{item.title}</div>
          )
        }):
        <div className='m-auto text-xl md:text-2xl'>No Books added to Cart!!</div>
        }

      </div>
    </>
  )

}

export default Cart