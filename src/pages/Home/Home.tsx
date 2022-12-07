import React, { FC, useEffect, useState } from "react";
//............ import tow carousel from component carousel folder
import CarouselComponent from "../../components/carousel/Carousel";
import CarouselSmall from "../../components/carousel/CarouselSmall";
//......... import layout component
import LayoutUser from "../../layout/LayoutUser";
//............ import images and icons
import Images from "../../assets/Index";

//............... use react-router
import { Link, Navigate } from "react-router-dom";
//................all of routes
import { PATHS } from "../../config/RouteConfig";
//........... use category component in component folder

import SliderProducts from "../../components/carousel/SliderProducts";


export function HomePage<FC>() {
  return (
    <LayoutUser>
      <>
        <div className="flex w-full justify-around items-center p-3 ">
          <div className="w-2/3  ">
            <CarouselComponent />
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center p-3 ">
            <div className="w-full p-3 ">
              <CarouselSmall />
              <div className="w-full p-3">
                <Link to="./">
                  <img
                    className="rounded-xl"
                    src={Images.instagram}
                    alt="instagramLink"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full p-3">
          <SliderProducts  />
        </div>
      </>
    </LayoutUser>
  );
}
