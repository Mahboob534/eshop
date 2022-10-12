import React, { FC } from "react";
import { menuItems, lists } from "./MenuItem";
import allIcons from "../../assets/icons";
import { Link } from "react-router-dom"
interface MenuProps {
  active: boolean;
  showMenu(): void;
}

export default function Menu<FC>(props: MenuProps) {
  const active = props.active;
  const showMenu = props.showMenu;
  return (
    <ul>
     {Object.values(menuItems).map((item: lists,id:number) => (
        <li key={id} className="border-t border-slate-50 opacity-100 p-2 "><Link to="./"> {item}</Link></li>
      ))}
    </ul>
  );
}
