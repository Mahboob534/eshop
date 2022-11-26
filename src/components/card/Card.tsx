import React from "react";
interface propsProducts {
  product: any;
}
export default function Card(props: propsProducts) {
  const products = props.product;
  return (
    <div className="w-72 h-96 border-1 border-slate-400 rounded  bg-slate-500 shadow-2xl">
      <div className="flex flex-col justify-center items-center p-3">
        <div className="w-28 h-32 ">
          <img className="" />
        </div>
        <div className="text-md text-slate-900 font-bold">
          <p ></p>
        </div>
        <div className="flex justify-around items-center ">
          <div className=" w-16 text-md font-bold text-slate-900 p-2">
            <p></p>

          </div>
          <div className="w-16 p-2"></div>
        </div>
      </div>

      {products.product_name_fa}
    </div>
  );
}
