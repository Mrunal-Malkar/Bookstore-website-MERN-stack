import React from 'react'
import {motion} from "framer-motion"

const Cards = () => {
  return (
    <div className='w-screen flex justify-center dark:bg-gray-800 dark:text-white'>
            <div className='w-full md:w-5/6 flex gap-x-4 md:flex-row flex-col justify-center items-center'>
              {/* first card */}
              <motion.div 
              initial={{y:"20vh",opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:"true",amount:0.2}}
              transition={{type:"tween",ease:"backInOut",duration:1}}
              className='w-11/12 md:w-1/3 h-fit mb-4 drop-shadow-2xl mt-4 dark:hover:bg-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-900 dark:rounded-2xl'>
                <div className='h-3/4'><img className='w-full h-full overflow-hidden' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
                <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
                  <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-white'>Harry potter</h1>
                  <div className='w-full flex flex-row'>
                    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
                    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
                  </div>
                </div>
              </motion.div>
    
              {/* first card */}
              <motion.div 
              initial={{y:"20vh",opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:"true",amount:0.2}}
              transition={{type:"tween",ease:"backInOut",duration:1}}
              className='w-11/12 md:w-1/3 h-fit mb-4 drop-shadow-2xl mt-4 dark:hover:bg-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-900 dark:rounded-2xl'>
                <div className='h-3/4'><img className='w-full h-full overflow-hidden' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
                <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
                  <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-white'>Harry potter</h1>
                  <div className='w-full flex flex-row'>
                    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
                    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
                  </div>
                </div>
              </motion.div>
    
              {/* first card */}
              <motion.div 
              initial={{y:"20vh",opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:"true",amount:0.2}}
              transition={{type:"tween",ease:"backInOut",duration:1}}
              className='w-11/12 md:w-1/3 h-fit mb-4 drop-shadow-2xl mt-4 dark:hover:bg-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-900 dark:rounded-2xl'>
                <div className='h-3/4'><img className='w-full h-full overflow-hidden' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
                <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
                  <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-white'>Harry potter</h1>
                  <div className='w-full flex flex-row'>
                    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
                    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
                  </div>
                </div>
              </motion.div>
    
              {/* card section ending */}
            </div>
          </div>
  )
}

export default Cards