import React, { useEffect, useState } from "react";
import "/public/stylesheets/hero.css";
import { motion } from "motion/react";
import Cards from "./cards";
import axios from "axios";

const Hero = () => {
  const [book, setBook] = useState([]);

  const fetchBooks = async () => {
    try {
      let response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/store`
      );
      setBook(response.data.slice(1, 4));
    } catch (err) {
      console.log("error in fetching book in hero", err);
    }
  };

  // useEffect(() => { fetchBooks() }, [])

  return (
    <>
      <div className="w-screen flex justify-center dark:bg-gray-800 dark:text-white">
        {/* first component */}
        <div className="w-full lg:w-5/6 flex md:flex-row flex-col background">
          <div className="w-full order-2 md:order-1 md:w-1/2 flex flex-col gap-14 p-4 md:gap-20 pt-20 md:pt-34">
            <motion.div
              initial={{ x: "50vw", y: "50vh", opacity: 0, scale: 0.5 }} // Start off-screen (right)
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} // Move to original position
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }} // Smooth transition
              className="flex flex-col justify-center gap-3 text-3xl md:text-4xl xl:text-5xl font-semibold font-stretch-expanded"
            >
              <h1>
                Bright <span className="font-bold text-green-700">future</span>{" "}
                <span>awaits!</span>
              </h1>
              <h1>
                Learn everyday,{" "}
                <span className="text-green-700 font-bold">
                  Grow everyday!!
                </span>
              </h1>
            </motion.div>

            <div>
              <p className="text-lg font-semibold md:text-xl">
                BookStore is the all in one marketplace to buy all types of
                books! weather that be fiction or non-fiction , free or paid we
                cover every variety our user demands.we believe reading is more
                than just learning it gives you multiple advantage, make it a
                Hobby!
              </p>
            </div>

            <div className="flex w-full">
              <div className="border-2 border-gray-500 border-r-0 flex align-middle justify-center p-1">
                <i class="fa-regular fa-envelope md:text-3xl self-center"></i>
              </div>
              <input
                className="border-2 ps-2 border-gray-500 border-s-0 w-full p-2 text-xl md:text-2xl outline-none"
                type="text"
                placeholder="Enter your email"
              />
            </div>

            <div className="text-white inline p-3 px-5 rounded-md w-fit bg-violet-600 hover:bg-violet-700 hover:scale-150 transform ease-in transition-all">
              <button>Secondary</button>
            </div>
          </div>

          {/*second side of first component  */}
          <div className="w-full md:w-1/2 md:order-2 order-1 dark:bg-gray-800">
            <img
              src="https://img.freepik.com/premium-vector/boy-is-reading-book-with-books-front_1102497-641.jpg"
              className="cover w-full h-full"
              alt="book img"
            />
          </div>
        </div>
      </div>

      {/* the Why? part */}
      <div className="w-screen flex flex-col dark:bg-gray-800 justify-center align-center items-center p-2 gap-y-12">
        <div className="w-full md:w-5/6 flex flex-col pb-2 pt-2 gap-2">
          <h1 className="text-2xl md:text-5xl font-semibold text-black dark:text-gray-300">
            Why choose BookStore for Books?
          </h1>
        </div>
        <div className="w-full flex flex-row pt-2 gap-x-2 pb-2 lg:w-5/6 justify-center">
          <motion.div
            initial={{ x: "32vw" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 100,
              delay: 0,
            }}
            className="w-4/12 md:w-3/12 z-3 flex flex-col justify-center align-center items-center p-2 rounded-2xl shadow-xl bg-sky-200 text-sky-900 dark:bg-sky-600 dark:text-gray-200 hover:scale-105 ransition-transform"
          >
            <h2 className="text-3xl font-bold mb-3 tracking-tight underline underline-offset-3">
              Accessible
            </h2>
            <p className="text-center text-lg leading-relaxed">
              We are <span className="font-bold"> Everywhere</span> and{" "}
              <span className="font-bold">Open 24/7 </span>for your services
              whether online or offline.
            </p>
          </motion.div>

          {/* 2nd reason */}
          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: "-3vh" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 100,
              delay: 3,
            }}
            className="w-4/12 md:w-3/12 z-1 flex flex-col justify-center align-center items-center p-2 rounded-2xl shadow-xl bg-rose-200 text-rose-800 dark:bg-rose-500 dark:text-gray-200 hover:scale-105 transition-transform"
          >
            <h2 className="text-3xl font-bold mb-3 tracking-tight underline underline-offset-3">
              Stock
            </h2>
            <p className="text-center text-lg leading-relaxed">
              We offer everything you need whether that be{" "}
              <span className="font-bold">Fictional</span> or <span className="font-bold">Self-help Book</span>, we
              have all of them covered.
            </p>
          </motion.div>

          {/* 3rd reason */}
          <motion.div
            initial={{ x: "-32vw" }}
            viewport={{ once: true, amount: 0.6 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 100,
              delay: 1,
            }}
            className="w-4/12 md:w-3/12 flex z-2 flex-col justify-center align-center items-center p-2 rounded-2xl shadow-xl bg-emerald-200 text-emerald-900 dark:bg-emerald-600 dark:text-gray-200 hover:scale-105 transition-transform"
          >
            <h2 className="text-3xl font-bold mb-3 tracking-tight underline underline-offset-3 ">
              Pricing
            </h2>
            <p className="text-center text-lg leading-relaxed">
              By offering a competitive price for the goods we provide{" "}
              <span className="font-bold">Value For Money</span>.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-[90%] m-auto border-black border-1 dark:border-white h-px"></div>

      {/* the free course part */}
      <div className="w-full flex justify-center dark:bg-gray-800 dark:text-white">
        <div className="w-5/6 flex flex-col p-2 gap-2">
          <h1 className="text-xl md:text-3xl font-bold">
            Free offered courses
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor si consectetur adipisicing elit. Fugiat adipisci,
            doloribus voluptate nisi corrupti error laboriosam similique
            praesentium natus, hic voluptate Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit quisquam beatae, ipsam sit
            voluptatibus nam quia impedit. Dolorum laboriosam praesentium error,
            mollitia minima quos consequatur alias beatae, ratione saepe
            inventore?
          </p>
        </div>
      </div>

      {/* cards */}
      <Cards book={book} />
    </>
  );
};

export default Hero;
