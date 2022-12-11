import React, { FC, ReactElement, useState, useEffect } from "react";

//....... getCategory is function for getting all of category by api
import { GetCategory } from "../../api/GetCategory";
import allIcons from "../../assets/icons";
//............... use react-router
import { Link, Navigate } from "react-router-dom";
//................all of routes
import { PATHS } from "../../config/RouteConfig";
//........... use category component in component folder
import Category from "../../components/category/Category";
 

const SliderProducts: FC = ():ReactElement => {
  const [category, setCategory] = useState<[]>([]);

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
                className="flex  rounded-2xl border-1 border-slate-300 mx-5 "
                key={id}
              >
                <div className="flex justify-center items-center relative bg-red-600 overflow-x-hidden scroll-smooth whitespace-nowrap text-center rounded-2xl p-3  right-0  my-5">
                  <div>
                    <h3 className="w-64 h-16  text-xl text-slate-100 ">
                      {name_fa}
                    </h3>
                    <Link to={`/products/${id}`}>
                      <p className="text-slate-100  hover:text-slate-600">
                        {" "}
                        نمایش تمام محصولات {name_fa}
                      </p>
                    </Link>
                  </div>

                  <allIcons.MdChevronRight
                    onClick={() => clickSliderRight(id)}
                    size={40}
                    className=" absolute text-5xl  text-slate-400 hover:text-slate-600 z-100 cursor-pointer top-1/2 right-72  "
                  />
                  <div
                    id={"slider" + id}
                    className="overflow-x-hidden scroll-smooth whitespace-nowrap"
                  >
                    <Category id={id}  />
                  </div>

                  <allIcons.MdChevronLeft
                    onClick={() => clickSliderLeft(id)}
                    size={40}
                    className="absolute text-5xl text-slate-400 hover:text-slate-600 z-100 cursor-pointer top-1/2 left-3  "
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
