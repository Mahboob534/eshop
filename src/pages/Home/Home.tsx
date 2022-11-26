import React, { FC } from "react";
import LayoutUser from "../../layout/LayoutUser";

export function HomePage<FC>() {
  return (
  <>
      <div className="flex w-full justify-around items-center p-3 ">
      <div className="w-2/3  ">
      <CarouselComponent /> 
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center p-3 ">
        <div className="w-full p-3 ">
        <CarouselSmall /> 
        <div className="w-full p-3">
          <Link to="./"><img className="rounded-xl"src={Images.instagram} alt="instagramLink"/></Link>
        </div>

        </div>

      </div>
    </div>

        
        <div className="w-full h-full p-3">
         
          {category ? 
            category.map((item:any) => 
              <div
                className="flex justify-center rounded-2xl border-1 border-slate-300 mx-5 "
                key={item.id}
              >
                <div className="flex  bg-red-600  text-center rounded-2xl p-3 z-10 right-0 opacity-95 my-5">

                 <Link to={PATHS.PRODUCTS_CAT}>
                  <h3 className="w-64 h-96 text-xl text-slate-300 ">{item.name_fa}</h3>
                  </Link>
                  <allIcons.MdChevronRight className=" absolute text-3xl text-slate-200 z-100 cursor-pointer top-[50%] right-72  "/>
                  <div className=" relative overflow-x-hidden scroll-smooth whitespace-nowrap">
                  <Category name = {item.id} key={item.id}/>
                  </div>
                  
                  <allIcons.MdChevronLeft className="absolute text-3xl text-slate-200 z-100 cursor-pointer top-[50%] left-5  "/>
                </div>
              </div> 
            )
            :null
          }
           
          
        </div>
      </>
    </LayoutUser>
  </>
  )
}
