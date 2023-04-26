import React, { useState } from "react";
import photo1 from "./photo7.jpg";
import photo2 from "./photo2.JPG";
import photo3 from "./photo3.JPG";
import photo4 from "./photo5.jpg";
import photo5 from "./photo9.JPG";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const data = [photo1, photo2, photo3, photo4, photo5];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto bg-cover overflow-x-hidden">
      <div className="relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[100vw] h-full flex transition-transform duration-1000"
        >
          <img src={data[0]} alt="image1" loading="priority" />
          <img src={data[1]} alt="image2" />
          <img src={data[2]} alt="image3" />
          <img src={data[3]} alt="image4" />
          <img src={data[4]} alt="image5" />
        </div>
        <div className="absolute w-fit mx-auto left-0 right-0 flex gap-8 bottom-16">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-amber-300 active:bg-amber-700 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-amber-300 active:bg-amber-700 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
