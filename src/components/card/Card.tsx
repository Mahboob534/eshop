import React from "react";

import allIcons from "../../assets/icons/index";

import {toFarsiNumber,numberDivider} from '../../utils/FunctionUtils'
interface propsProducts {
  product: any;
}
export default function Card(props: propsProducts) {
  const products = props.product;
  return (
    <div className=" flex flex-col  p-3 w-72 h-96 border-1 bg-white  rounded-xl shadow-2xl">
      <div className="w-full  ">
        <img
          className="h-72"
          src={`http://localhost:3002/files/${products.images[0]}`}
          alt="thumbnail"
        />
      </div>

      <div className="w-full  text-md text-slate-900 font-bold  ">
        {products.product_name_fa}
      </div>
      <div className="flex flex-row justify-between items-center font-bold w-full ">
        <div className="w-16 " >
          <button type="button" className="text-3xl text-blue-800 hover:text-blue-600" >
          <allIcons.BiShoppingBag/>
          </button>
        </div>
        <div className="">
          <p>  <span className="ml-2">قیمت :</span>{numberDivider(toFarsiNumber(products.price.amount))}</p>
        </div>
      </div>
    </div>
  );
}
