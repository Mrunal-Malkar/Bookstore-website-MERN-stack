import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Cart = () => {

  const [cartBooks, setCartBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [viewBook, setViewBook] = useState([]);

  const showBook = async (bookId) => {
    setShow(false);
    let response = await axios.post(`http://localhost:3000/cart/getbook`, { bookId });
    setViewBook(response.data);
    if(response){setShow(true);}
  }

  const getCartBooks = async () => {
    try {
      let Books = await fetch("http://localhost:3000/store")
      let BooksJson = await Books.json()
      console.log(BooksJson)
      let filteredCartBooks = BooksJson.filter(item => item.addedtocart == true)
      setCartBooks(filteredCartBooks);

    } catch (err) {

      console.log("error in cartBooks:", err);
      process.exit(1);

    }
  }

  const setPrice = async () => {

    cartBooks.forEach(element => {
      setTotalPrice((prev) => prev + element.price)
    })
    console.log("re-rendered");

  }


  useEffect(() => { getCartBooks() }, []);
  useEffect(() => { setTotalPrice(0); setPrice() }, [cartBooks]);

  return (
    <>
    {!show?<div className='flex justify-center font-semibold align-center text-xl md:text-2xl text-orange-500 dark:bg-gray-800'><h1>click on the book to see more info it</h1></div>
    :null}
    <div className='dark:bg-gray-800 w-screen lg:p-12 dark:text-white flex lg:flex-row flex-col items-center p-4 lg:pt-12'>

        <div className={show?'lg:w-3/6 w-full p-2 dark:bg-gray-800 lg:order-1 order-2 gap-y-4 font-semibold min-h-dvh flex-col flex flex-wrap':"lg:full w-full dark:bg-gray-800 lg:order-1 order-2 gap-y-4 font-semibold min-h-dvh flex-col flex flex-wrap"} >


          {cartBooks.length > 0 ? cartBooks.map((item) => {
            return (
              <div key={item._id} onClick={() => { showBook(item._id) }} className='w-full dark:hover:bg-gray-900 dark:text-gray-100 rounded-sm md:text-2xl bg-gray-200 text-xl border-2 dark:bg-gray-700 dark:border-gray-100 border-gray-600 flex flex-row'>
                <div className='w-1/2 p-2 border-r-2 border-gray-100'>{item.title}</div>
                <div className='w-1/2 p-2 text-center'>{item.price}$</div>
              </div>
            )
          }) :
            <div className='m-auto text-xl md:text-2xl'>No Books added to Cart!!</div>
          }

          {cartBooks.length > 0 ? (
            <div className='w-full flex text-2xl md:text-3xl flex-row bg-gray-300 dark:bg-gray-700 border-2 border-gray-800 dark:border-gray-50'>
              <div className='w-1/2 border-r-2 p-2 border-gray-800 dark:border-gray-50'>Total price:</div>
              <div className='w-1/2 p-2 text-green-700 text-center'>{totalPrice}$</div>
            </div>
          ) : null}
          {cartBooks.length > 0 ? (
            <div className='w-full flex text-2xl md:text-3xl cursor-pointer justify-center font-bold p-4 active:scale-110 rounded-3xl hover:bg-gray-700 text-green-500 bg-gray-900 border-2 border-gray-800 dark:border-gray-900'>
              <h1>Place oder</h1>
            </div>
          ) : null}


        </div>

        {show?(
        <div className='dark:bg-gray-800 flex justify-center align-top lg:h-full lg:top self-start w-full lg:w-3/6 lg:order-2 order-1'>

          <motion.div
            className='w-full flex justify-center p-2 flex-col items-center mb-4 font-semibold bg-gray-300 rounded-2xl dark:bg-gray-900 dark:text-white'
            initial={{x:"20vw"}}
            whileInView={{x:0}}
            transition={{duration:0.2,type:"spring"}}
          >
            <div className='lg:h-[600px] md:h-[500px]'><img className='h-full w-full overflow-hidden' src="https://static.vecteezy.com/system/resources/previews/047/751/141/non_2x/a-blue-book-with-a-yellow-bookmark-vector.jpg" alt="book img" /></div>
            <div className='flex flex-col text-xl md:text-2xl p-2 w-full'>
              <div className='border-2 dark:border-gray-900 w-full flex justify-center'>
                <p className='w-1/2 border-r-2 border-gray-500 text-center'>Book:</p>
                <p className='w-1/2 text-center text-green-700'>{viewBook.title}</p>
              </div>
              <div className='border-2 border-t-0 dark:border-gray-900 w-full flex justify-center'>
                <p className='w-1/2 border-r-2 border-gray-500 text-center'>category:</p>
                <p className='w-1/2 text-center text-green-700'>{viewBook.category}</p>
              </div>
              <div className='border-2 border-t-0 dark:border-gray-900 w-full flex justify-center'>
                <p className='w-1/2 border-r-2 border-gray-500 text-center'>Price:</p>
                <p className='w-1/2 text-center text-green-700'>{viewBook.price}$</p>
              </div>
            </div>


          </motion.div>
          
        </div>
          ):null}

      </div>
    </>
  )

}

export default Cart