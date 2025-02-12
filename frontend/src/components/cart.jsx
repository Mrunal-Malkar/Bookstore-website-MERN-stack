import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [cartBooks, setCartBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show,setShow]=useState(false);
  const [viewBook,setViewBook]=useState([]);

  const showBook=async(bookId)=>{
    setShow(true);
    let response=await axios.post(`http://localhost:3000/cart/getbook`,{bookId});
    setViewBook(response.data);
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
      <div className='dark:bg-red-800 w-screen  dark:text-white flex md:flex-row flex-col items-center'>
        
        <div className='lg:w-5/6 m-auto dark:bg-gray-800 md:order-1 order-2 gap-y-4 font-semibold min-h-dvh flex-col flex flex-wrap' >


          {cartBooks.length > 0 ? cartBooks.map((item) => {
            return (
              <div key={item._id} onClick={()=>{showBook(item._id)}} className='w-full md:w-1/2 dark:hover:bg-gray-900 dark:text-gray-100 rounded-sm md:text-2xl bg-gray-200 text-xl border-2 dark:bg-gray-700 dark:border-gray-100 border-gray-600 flex flex-row'>
                <div className='w-1/2 p-2 border-r-2 border-gray-100'>{item.title}</div>
                <div className='w-1/2 p-2 text-center'>{item.price}$</div>
              </div>
            )
          }) :
            <div className='m-auto text-xl md:text-2xl'>No Books added to Cart!!</div>
          }

          {cartBooks.length > 0 ? (
            <div className='md:w-1/2 w-full flex text-2xl md:text-3xl flex-row bg-gray-700 border-2 border-gray-800 dark:border-gray-50'>
              <div className='w-1/2 border-r-2 p-2 border-gray-800 dark:border-gray-50'>Total price:</div>
              <div className='w-1/2 p-2 text-green-500 text-center'>{totalPrice}$</div>
            </div>
          ) : null}
          {cartBooks.length > 0 ? (
            <div className='md:w-1/2 w-full flex text-2xl md:text-3xl cursor-pointer justify-center font-bold p-4 active:scale-110 rounded-3xl hover:bg-gray-700 text-green-500 bg-gray-900 border-2 border-gray-800 dark:border-gray-900'>
              <h1>Place order</h1>
            </div>
          ) : null}


        </div>
        
      {/* <div className='bg-blue-500 md:order-2 order-1'>adsfa</div> */}

      </div>
    </>
  )

}

export default Cart