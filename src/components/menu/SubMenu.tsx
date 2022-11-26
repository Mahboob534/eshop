import React, { FC, useState } from "react";
//..... use react router
import { Link } from "react-router-dom";
//......... import const variable of routes  and use list of routes
import { PATHS } from "../../config/RouteConfig";
//.......... export interface
import { lists } from "./MenuItem";
interface propsList {
  item: lists;
}

function SubMenu<FC>(props: propsList) {
  const item = props.item;

  const [activeSubMenu, setActiveSubMenu] = useState<boolean>(false);
  const showSubMenu = (): void => {
    setActiveSubMenu(!activeSubMenu);
  };
  return (
    <div className="relative">
      <div>
        <Link to="./">
          <li
            className=" flex flex-wrap item-center px-5"
            onMouseEnter={showSubMenu}
            onMouseLeave={showSubMenu}
          >
            <span className="text-xl ml-2">{<item.icon />} </span>
            {item.title}
          </li>
        </Link>
      </div>
      <div
        className={

          activeSubMenu
            ? " absolute bg-slate-100 text-slate-900 rounded-xl shadow-2xl"
            : "hidden"
        }
        onMouseLeave={showSubMenu}
      >
        <div className="flex justify-around p-3">
          <ul className="flex flex-col justify-start items-center">
            {         
            item.subNav.map((subMenueItem: any) => (
             <Link to="./" key={subMenueItem.id}  >
              <li
                key={subMenueItem.id}
                className="w-28 h-8 border-b-2 border-slate-200 p-y-1"
              >
                {subMenueItem.title}
              </li>
             </Link>
            ))}
          </ul>
          <ul className="flex flex-col justify-start items-center">
            {item.filter.map((filterItem: any) => (
             <Link key={filterItem.id} to="./">
              <li key={filterItem.id}
             
             className=" w-40 h-8 border-b-2 border-slate-200 p-y-1 mr-5"
           >
             {filterItem.filterTitle}
           </li></Link> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
