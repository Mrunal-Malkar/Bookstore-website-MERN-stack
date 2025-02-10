import React, { useEffect, useRef, useState } from 'react'

const Store = () => {

  const dropdown = useRef()
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");

  const filterBooks = async () => {
    try {
      let thebooks = await fetch("http://localhost:3000/store");
      let jsonbooks = await thebooks.json()

      if (category == "All") {
        setBooks(jsonbooks)
      }
      else {
        let filteredBooks = jsonbooks.filter((item) => item.category == category);
        setBooks(filteredBooks)
      }
    } catch (err) {

      console.log("cannot setBooks", err);

    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response = await fetch("http://localhost:3000/store");
        let data = await response.json();
        setBooks(data);
      } catch (err) {
        console.log("Error fetching books:", err);
      }
    };
    // fetchBooks();
  }, []);


  useEffect(() => {
    filterBooks()
  }, [category])

  useEffect(() => {
    console.log(books);
  }, [books]);

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


      <div className='w-screen dark:bg-gray-800 gap-y-3 min-h-dvh flex-row p-2 md:p-6 flex flex-wrap' >
      {books.length>0?books.map((item) => {
        return (

          <div key={item.id}
            className='w-6/12 md:w-1/3 p-2 md:p-4 h-fit drop-shadow-2xl dark:hover:bg-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-900 dark:rounded-2xl'>
            <div className='h-3/4'><img className='w-full h-full overflow-hidden' src="https://static.vecteezy.com/system/resources/previews/047/751/141/non_2x/a-blue-book-with-a-yellow-bookmark-vector.jpg" alt="book img" /></div>
            <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
              <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-white'>`{item.title}`</h1>
              <div className='w-full flex flex-row'>
                <p className='m-auto'>Price:<span className='line-through text-red-500'>498$</span></p>
                <p className='m-auto'>Now at:<span className='text-green-500 font-semibold'>{item.price}</span></p>
              </div>
            </div>
          </div>
        )
      }):null}
      
      </div>

    </>
  )
}

export default Store