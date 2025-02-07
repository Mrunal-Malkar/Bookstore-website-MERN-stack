import React from 'react'
import "/public/stylesheets/hero.css"

const Hero = () => {
  return (
    <>
      <div className='w-screen flex justify-center'>
        {/* first component */}
        <div className='w-full lg:w-5/6 flex md:flex-row flex-col background'>

          <div className='w-full order-2 md:order-1 md:w-1/2 flex flex-col gap-14 p-4 md:gap-20 pt-20 md:pt-34'>
            <div className='flex flex-col justify-center gap-3 text-3xl md:text-4xl xl:text-5xl font-semibold font-stretch-expanded'>
              <h1>Bright <span className='font-bold text-green-700'>future</span> <span> awaits!</span></h1>
              <h1>Learn everyday, <span className='text-green-700 font-bold'>Grow everyday!!</span></h1>
            </div>

            <div>
              <p className='text-lg font-semibold md:text-xl'>BookStore is the all in one marketplace to buy all types of books! weather that be fiction or non-fiction , free or paid we cover every variety our user demands.we believe reading is more than just learning it gives you multiple advantage, make it a Hobby!</p>
            </div>

            <div className='flex w-full'>
              <div className='border-2 border-gray-500 border-r-0 flex align-middle justify-center p-1'>
              <i class="fa-regular fa-envelope md:text-3xl self-center"></i>
              </div>
              <input className='border-2 ps-2 border-gray-500 border-s-0 w-full p-2 text-xl md:text-2xl outline-none' type="text" placeholder='Enter your email' />
            </div>

            <div className='text-white inline p-3 px-5 rounded-md w-fit bg-violet-600 hover:bg-violet-700'><button>Secondary</button></div>

          </div>

          {/*second side of first component  */}
          <div className='w-full md:w-1/2 md:order-2 order-1'>
            <img src="\public\realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.avif" className='cover w-full h-full' alt="book img" />
          </div>

        </div>

      </div>

{/* second part */}
      <div className='w-full flex justify-center mt-2'>
          <div className='w-5/6 flex flex-col p-2 gap-2'>
          <h1 className='text-xl md:text-3xl font-bold'>Free offered courses</h1>
          <p className="text-lg">Lorem ipsum dolor si consectetur adipisicing elit. Fugiat adipisci, doloribus voluptate nisi corrupti error laboriosam similique praesentium natus, hic voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam beatae, ipsam sit voluptatibus nam quia impedit. Dolorum laboriosam praesentium error, mollitia minima quos consequatur alias beatae, ratione saepe inventore?</p>
          </div>
      </div>

  {/* cards */}
  <div className='w-screen flex justify-center'>
    <div className='w-full md:w-5/6 flex gap-x-4 md:flex-row flex-col justify-around'>
    {/* first card */}
    <div className='w-full md:w-1/3 h-fit drop-shadow-2xl mt-4 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 border-2 border-gray-300'>
    <div className='h-3/4'><img className='w-full h-full' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
    <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
    <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl'>Harry potter</h1>
    <div className='w-full flex flex-row'>
    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
    </div>
    </div>
    </div>
    {/* first card */}
    <div className='w-full md:w-1/3 h-fit mt-4 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 border-2 border-gray-300'>
    <div className='h-3/4'><img className='w-full h-full' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
    <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
    <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl'>Harry potter</h1>
    <div className='w-full flex flex-row'>
    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
    </div>
    </div>
    </div>
    {/* first card */}
    <div className='w-full md:w-1/3 h-fit mt-4 bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col gap-2 border-2 border-gray-300'>
    <div className='h-3/4'><img className='w-full h-full' src="\33a1650449922d792dd511edd4de9e59.jpg" alt="book img" /></div>
    <div className='h-1/4 flex flex-col justify-center text-lg md:text-2xl'>
    <h1 className='text-center w-full bg-gray-100 font-semibold md:text-3xl text-xl'>Harry potter</h1>
    <div className='w-full flex flex-row'>
    <p className='m-auto'>Price: <span className='line-through text-red-500'>128$</span></p>
    <p className='m-auto'>Now at: <span className='text-green-500 font-semibold'>99$</span></p>
    </div>
    </div>
    </div>

    {/* card section ending */}
    </div>
  </div>

    </>
  )
}

export default Hero
