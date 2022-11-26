import React, { FC } from "react";
import { menuItems,lists } from "./MenuItem";
import Images from '../../assets/Index'
import { Link } from "react-router-dom";
import SubMenu from './SubMenu'

export  function Menu<FC>() {
  return (
    
    <ul >
       <li className="w-full">
    <img className="w-full h-28" src={Images.logo} alt="logo"/>
    
  </li>
     
      {menuItems.map((item:lists) => (
        
        <li key={item.id} className="w-full border-t border-slate-50 opacity-100 py-2 ">
          <Link  className="p-2"  to="./">{item.title}</Link> 
        </li>
        
      ))}
    </ul>
  );
}
export const  MenuHorizontal=()=>{
    return (
  <ul className="flex flex-wrap text-slate-50">
      {menuItems.map((item:lists) => (
         <SubMenu key={item.id} item = {item} />
      ))}
    </ul>
  )

}
 