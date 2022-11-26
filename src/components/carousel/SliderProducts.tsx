import React, { FC, useState, useEffect } from "react";

//....... getCategory is function for getting all of category by api
import { GetCategory } from "../../api/GetCategory";
import allIcons from "../../assets/icons";
//............... use react-router
import { Link, Navigate } from "react-router-dom";
//................all of routes
import { PATHS } from "../../config/RouteConfig";
//........... use category component in component folder
import Category from "../../components/category/Category";

const SliderProducts: FC = (props) => {
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    GetCategory().then((res) => setCategory(res.data));
  }, []);

  const clickSliderRight = (id: number): void => {
    let slider: any = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 300;
  
  };
  const clickSliderLeft = (id: number): void => {
    let slider: any = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 300;
   
  };

  return (
    <>
      {category
        ? category.map((item: any) => {
            let { id, name_fa } = item;
            return (
              <div
                className="flex justify-center rounded-2xl border-1 border-slate-300 mx-5 "
                key={id}
              >
                <div className="flex relative bg-red-600 overflow-x-hidden scroll-smooth whitespace-nowrap text-center rounded-2xl p-3 z-10 right-0 opacity-95 my-5">
                  <Link to={PATHS.PRODUCTS_CAT}>
                    <h3 className="w-64 h-96 text-xl text-slate-300 ">
                      {name_fa}
                    </h3>
                  </Link>
                  <allIcons.MdChevronRight
                    onClick={() => clickSliderRight(id)}
                    size={40}
                    className=" absolute text-5xl text-slate-200 z-100 cursor-pointer top-1/2 right-72  "
                  />
                  <div id={"slider" + id} className="overflow-x-hidden scroll-smooth whitespace-nowrap">
                    <Category name={id} key={id} />
                  </div>

                  <allIcons.MdChevronLeft
                    onClick={() => clickSliderLeft(id)}
                    size={40}
                    className="absolute text-5xl text-slate-200 z-100 cursor-pointer top-1/2 left-3  "
                  />
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default SliderProducts;
