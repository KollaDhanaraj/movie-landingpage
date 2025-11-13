import React from "react";
import { FaSearch } from "react-icons/fa";

import Shiva from "./assets/Shiva.avif";
import GirlFriend from "./assets/GirlFriend.avif";
import bahubali from "./assets/Bahubali.avif";
import OG from "./assets/OG.avif";
import PreWedding from "./assets/PreWedding.avif";
import Solo from "./assets/Solo.avif";
import Feb from "./assets/Feb.avif";
import Assem from "./assets/Assem.avif";

import Slider from "react-slick";

function App() {

  const bannerImages = [Solo, Feb, Assem];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1120] to-[#0b0f19] fade-in">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">▶</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            MOVIES
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Movies</li>
          <li className="hover:text-white cursor-pointer">Search</li>
          <li className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
            Sign In
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-300 text-xl cursor-pointer">
          ☰
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="flex flex-col items-center text-center mt-10 px-4 fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Unlimited movies,<br className="hidden sm:block" /> TV shows, and more
        </h1>

        <p className="mt-4 text-gray-400 text-base sm:text-lg">
          Watch anywhere. Cancel anytime.
        </p>

        {/* SEARCH BAR */}
        <div className="flex mt-8 shadow-lg w-full max-w-md">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for movies"
              className="w-full py-3 pl-10 pr-4 rounded-l-lg bg-[#161b25] border border-gray-700 text-gray-300 outline-none focus:border-gray-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <button className="px-4 sm:px-8 bg-red-600 rounded-r-lg hover:bg-red-700 transition text-sm sm:text-base">
            GET STARTED
          </button>
        </div>
      </div>

      {/* 🔥 CAROUSEL BANNER */}
      <div className="w-full mt-12 px-3 md:px-10 fade-in">
        <Slider {...settings}>
          {bannerImages.map((img, i) => (
            <div key={i}>
             <img
  src={img}
  className="w-full h-[180px] sm:h-[260px] md:h-[380px] lg:h-[450px] object-cover rounded-xl sm:rounded-2xl shadow-xl"
  alt="banner"
/>

            </div>
          ))}
        </Slider>
      </div>

      {/* MOVIE GRID */}
      <div className="px-4 sm:px-10 mt-16 fade-in">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Popular Movies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {[OG, Shiva, GirlFriend, bahubali, PreWedding].map((movie, index) => (
            <div
              key={index}
              className="bg-[#161b25] rounded-xl shadow-lg p-2 hover:scale-105 sm:hover:scale-110 transition-transform cursor-pointer"
            >
              <img src={movie} alt="" className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
