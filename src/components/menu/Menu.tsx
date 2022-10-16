import React, { FC } from "react";
import { menuItems,lists } from "./MenuItem";
import Images from '../../assets/Index'
import { Link } from "react-router-dom";

export  function Menu<FC>() {
  return (
    
    <ul >
       <li className="w-full">
    <img className="w-full h-28" src={Images.logo} alt="logo"/>
    
  </li>
     
      {menuItems.map((item:lists) => (
        
        <li className="w-full border-t border-slate-50 opacity-100 py-2 ">
          <Link  className="p-2" key={item.id} to="./">{item.title}</Link> 
        </li>
        
      ))}
    </ul>
  );
}
export const  MenuHorizontal=()=>{
  return (
  <ul className="flex flex-wrap text-slate-50">
      {menuItems.map((item:lists) => (
         <Link  key={item.id} to="./">
        <li className=" flex flex-wrap item-center px-5">
          <span className="text-xl ml-2">{<item.icon/>} </span> 
         {item.title}
        </li>
        </Link>
      ))}
    </ul>
  )

}
