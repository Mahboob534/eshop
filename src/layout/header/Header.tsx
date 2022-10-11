import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import allIcons from "../../assets/icons";
import Images from "../../assets/Index";
import Menu from "../../components/menu/Menu";

const Header: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const showMenu = ():void => {
    setActive(!active);
  };
  return (
    <nav className=" flex flex-wrap justify-center items-center w-full h-36 fixed z-10 shadow-xl bg-slate-800  ">
      <div className="w-2/12 absolute text-slate-50 text-2xl right-3 md:right-6  top-8 scale-150 lg:hidden pr-3 pl-12">
      <allIcons.GiHamburgerMenu className={active ? "hidden":"flex"} onClick={showMenu}/>
      <div
       className={
        active
          ? "flex flex-col items-center w-full h-96 text-sm  fixed inset-0 bg-slate-900 opacity-90"
          : "hidden"
      }
    >
     <allIcons.MdClose className="absolute top-0 right-3/4 cursor-pointer" onClick={showMenu} />
      <Menu active={active} showMenu={showMenu} />
    </div>
       
      </div>
      <div className="flex justify-center items-center w-8/12 lg:w-3/12 px-3 lg:px-6 ">
        <img className="w-11 h-11 ml-2" src={Images.logo} alt="logo" />
        <h1 className="text-slate-100 text-5xl first-letter:text-red-600">
          <Link to="./">فندق</Link>
        </h1>
      </div>
      <div className=" w-full lg:w-6/12 order-3 lg:order-2 px-16">
        <input
          className="w-11/12 lg:w-9/12 rounded-xl p-4 "
          type="text"
          placeholder="جستجو کالا"
        />
      </div>
      <div className=" w-2/12  lg:w-3/12 order-2 lg:order-3">
        <div className="flex justify-center items-center ">
          <div className=" flex  items-center rounded-3xl text-xl md:text-md  text-slate-300 ease-in duration-300 bg-slate-600 shadow-xl p-3 lg:p-4 ">
            <Link to="./">
              <allIcons.FaRegUser className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 inline-flex" />

              <span className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 hidden lg:inline-flex px-2">ورود</span>
            </Link>
            <Link
              className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 px-1 text-center  border-r-[2px] hidden lg:flex"
              to="./"
            >
              عضویت
            </Link>{" "}
          </div>

          <div className="rounded-3xl text-xl text-slate-300 bg-slate-600 p-3 mr-3 lg:mr-4">
            <Link to="./">
              <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
                <allIcons.BiShoppingBag />
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
