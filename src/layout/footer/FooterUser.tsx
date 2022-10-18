import React, { FC } from "react";
import { Link } from "react-router-dom";
import { menuItems, lists } from "../../components/menu/MenuItem";
import Images from "../../assets/Index";
import allIcons from "../../assets/icons";
import { buyGuideList, favoriteArticles } from "./List";

const FooterUser: FC = () => {
  return (
    <>
      {/* make garentee icons */}
      <div className="flex flex-wrap justify-center items-center text-sm font-bold text-slate-400 py-2 px-3 lg:px-24  bg-slate-200 gap-2 lg:gap-0">
        <div className="flex flex-col w-[48%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.TbDiscount2 className="text-2xl " />
          <Link to="./"> قیمت مناسب کالا</Link>
        </div>
        <div className="flex flex-col  w-[48%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.RiCustomerService2Fill className="text-2xl " />
          <Link to="./"> خدمات پس از فروش</Link>
        </div>
        <div className="flex flex-col  w-[48%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.SiAuth0 className="text-2xl " />
          <Link to="./"> ضمانت 7 روز برگشت </Link>
        </div>
        <div className="flex flex-col  w-[49%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none text-[12px] border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.TbTruckDelivery className="text-2xl " />
          <Link to="./"> تحویل در کوتاه ترین زمان</Link>
        </div>
        <div className="flex flex-col  w-[48%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.FcApproval className="text-2xl " />
          <Link to="./"> اصالت کالا</Link>
        </div>
        <div className="flex flex-col  w-[48%] lg:w-2/12 justify-center items-center rounded-lg lg:rounded-none  border-2 lg:border-y-0 lg:border-r-0 lg:border-l-2 border-slate-800 p-2">
          <allIcons.RiCustomerService2Fill className="text-2xl " />
          <Link to="./"> تامین کننده کالا </Link>
        </div>
      </div>

      {/* make list of link and logo  */}
      <div className="flex flex-wrap justify-around items-center w-full text-sm  bg-slate-700 p-5 ">
        <div className="w-6/12 lg:w-3/12 text-slate-100 ">
          <h2 className="text-xl font-bold text-start py-3"> راهنمای خرید </h2>
          <ul>
            {buyGuideList.map((item: string) => (
              <li className="py-[7px]">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-6/12 lg:w-2/12  text-slate-100">
          <h2 className="text-xl font-bold text-start py-3"> محصولات</h2>
          <ul>
            {menuItems.map((item: lists) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-3/12  text-slate-100">
          <h2 className="text-xl font-bold text-start py-3">پربازدیدترین مقالات</h2>
          <ul>
            {favoriteArticles.map((item: string) => (
              <li className="py-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className=" w-full lg:w-4/12 order-first lg:order-last">
          <div className="flex justify-center items-center  w-full p-5">
            <img className="w-16 h-16 ml-2" src={Images.logo} alt="logo" />
            <Link
              className="text-5xl text-slate-50 first-letter:text-red-600"
              to="./"
            >
              {" "}
              فندق
            </Link>
          </div>
          <div className="text-slate-50 text-center ">
            <p className="py-3 px-16">
              {" "}
              فندق یک فروشگاه اینترنتی محصولات الکترونیک است با اطمینان از فندق
              خرید کنید.
            </p>
          </div>
          <div className="flex  justify-center items-center ">
            <img
              className="w-16 h-18  p-2 "
              src={Images.tandisHoghogh}
              alt="تندیس رضایت"
            />
            <img
              className="w-16 h-18 p-2"
              src={Images.tandisFanavar}
              alt="تندیس فناوری"
            />
            <img
              className="w-16 h-18  p-2"
              src={Images.symbolNational}
              alt="نماد بین المللی"
            />
            <img
              className="w-16 h-18  p-2"
              src={Images.symbolElectronic}
              alt="نماد الکترونیک"
            />
          </div>
        </div>
      </div>
      {/* write contact info and address  */}
      <div className="flex flex-wrap w-full text-sm font-bold text-slate-500 justify-around items-center bg-slate-300 py-5">
       <h2 className="w-full font-bold text-xl text-center py-2"> اطلاعات تماس</h2>
        <div className="flex justify-center items-center w-4/12 lg:w-[12%]">
          <allIcons.BsTelephoneFill className="ml-1 " />
          <p>01342776103</p>
        </div>
        <div className="flex justify-center items-center w-8/12 lg:w-[18%]">
          <allIcons.MdEmail className="ml-1 text-2xl md:text-lg " />
          <p className="font-normal">mahboob6103@gmail.com</p>
        </div> 
        <div className="flex justify-start lg:justify-center items-center w-full lg:w-5/12 p-2 lg:p-0">
          <allIcons.MdWatchLater className="ml-1 text-2xl md:text-lg" />
          <p>
            ساعت پاسخگویی : شنبه الی چهارشنبه 9-24و پنجشنبه و جمعه 9الی 17 ،
            تعطیلات رسمی : 10-16{" "}
          </p>
        </div>
        <div className="flex justify-start lg:justify-center items-center w-full lg:w-3/12 p-2 lg:p-0">
          <allIcons.ImLocation className="ml-1" />
          <p> گیلان-رودسر-مجتمع ستاره شهر -زیرهمکف -پلاک 16 </p>
        </div>
      </div>
      {/* connect to social media */}
      <div className="flex justify-center items-center w-full h-16 text-xl text-red-300">
        <allIcons.AiFillInstagram className="mx-2" />
        <allIcons.FaLinkedin className="mx-2" />
        <allIcons.BsTwitter className="mx-2" />
        <allIcons.FaFacebookF className="mx-2" />
        <allIcons.BsPinterest className="mx-2" />
      </div>
    </>
  );
};

export default FooterUser;
