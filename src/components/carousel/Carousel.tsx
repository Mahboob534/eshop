import React, { FC, useEffect, useState } from "react";

import { firstSlideInfo, myData } from "./carouselData";

import allIcons from "../../assets/icons/index";

function CarouselComponent<FC>() {
  
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const sliderLength: number = firstSlideInfo.length;
  const autoScroll: boolean = true;

  let slideInterval;
  const preSlide = (): void => {
    setActiveSlide(activeSlide === 0 ? sliderLength - 1 : activeSlide - 1);
  };

  const nextSlide = ():void => {
    setActiveSlide(activeSlide === sliderLength - 1 ? 0 : activeSlide + 1);
  };
  function auto() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  useEffect(() => {
    setActiveSlide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [activeSlide]);

  const clickOnBottomButton=(currentSlide:any) =>{
    setActiveSlide(Number(currentSlide.target.value))
  }
  return (
    <div className="w-full h-full relative overflow-hidden">
    <allIcons.MdChevronLeft
      className="absolute text-slate-600 opacity-95 w-10 h-10 rounded-full z-100 cursor-pointer hover:bg-slate-700 top-[35%] left-5 "
      onClick={preSlide}
    />
    <allIcons.MdChevronRight
      className="absolute text-slate-600 opacity-95 w-10 h-10 rounded-full z-100 cursor-pointer hover:bg-slate-700 top-[35%] right-5 "
      onClick={nextSlide}
    />
   

    {firstSlideInfo.map((item: myData) => {
      const { id, image, title } = item;
      return (
        <div
          className={
            activeSlide === id
              ? "flex justify-center items-center "
              : "hidden"
          }
          key={id}
        >
          <div className="flex flex-col item-center ">
            <img className="rounded-xl" src={image} alt={title} />
          </div>
        </div>
      );
    })}

    <div className="absolute z-100 flex gap-3 -translate-x-1/2 bottom-5 left-1/2 ">
      <button
        type="button"
        aria-current={true}
        aria-label="0"
        value={0}
        className={
          activeSlide === 0
            ? "w-16 h-3 rounded-full bg-red-400 "
            : "w-16 h-3 rounded-full bg-slate-400 "
        }
        onClick={clickOnBottomButton}
      >
        {" "}
      </button>
      <button
        type="button"
        aria-current={false}
        aria-label="slide2"
        value={1}
        className={
          activeSlide === 1
            ? "w-16 h-3 rounded-full bg-red-400 "
            : "w-16 h-3 rounded-full bg-slate-400 "
        }
        onClick={clickOnBottomButton}
      ></button>
      <button
        type="button"
        aria-current={false}
        aria-label="slide3"
        value={2}
        className={
          activeSlide === 2
            ? "w-16 h-3 rounded-full bg-red-400 "
            : "w-16 h-3 rounded-full bg-slate-400 "
        }
        onClick={clickOnBottomButton}
      ></button>
    </div>
  </div>
   
  );
}

export default CarouselComponent;
