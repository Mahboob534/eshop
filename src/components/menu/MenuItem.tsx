import allIcons from "../../assets/icons/index";
import { PATHS } from "../../config/RouteConfig";

export interface lists {
  id: number;
  title: string;
  icon: any;
  path: any;
  subNav: { id: number; name: string; title: string; path: any }[];
  filter: { id: number; name: string; filterTitle: string; path: any }[];
}

export const menuItems: lists[] = [
  {
    id: 0,
    title: "موبایل",
    icon: allIcons.FaMobileAlt,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0, name:"موبایل", title: "اپل", path: "" },
      { id: 1, name:"موبایل", title: "سامسونگ", path: "" },
      { id: 2, name:"موبایل", title: "شیایومی", path: "" },
      { id: 4, name:"موبایل", title: "نوکیا", path: "" },
      { id: 5, name:"موبایل", title: "LG", path: "" },
    ],
    filter: [
      { id: 0, name:"گوشی براساس کاربری", filterTitle: "گوشی اقتصادی", path: "" },
      { id: 1, name:"گوشی براساس کاربری", filterTitle: "گوشی میان رده", path: "" },
      { id: 2, name:"گوشی براساس کاربری", filterTitle: "گوشی دانش آموزی", path: "" },
      { id: 3, name:"گوشی براساس کاربری", filterTitle: "گوشی گیمینگ", path: "" },
    ],
  },
  {
    id: 1,
    title: "لپ تاپ",
    icon: allIcons.BsLaptop,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"لپ تاپ", title: "اپل", path: "" },
      { id: 1,name:"لپ تاپ", title: "ایسوس", path: "" },
      { id: 2,name:"لپ تاپ", title: "اچ پی", path: "" },
      { id: 3,name:"لپ تاپ", title: "لنوو", path: "" },
      { id: 4,name:"لپ تاپ", title: "ایسر", path: "" },
      { id: 5,name:"لپ تاپ", title: "مایکروسافت", path: "" },
      { id: 6,name:"لپ تاپ", title: "هوآوی", path: "" },
      { id: 7,name:"لپ تاپ", title: "وایو", path: "" },
    ],
    filter: [
      { id: 0, name:"براساس کاربرد", filterTitle: "لپ تاپ گرافیکی", path: "" },
      { id: 1, name:"براساس کاربرد", filterTitle: "لپ تاپ اداری", path: "" },
      { id: 2, name:"براساس کاربرد", filterTitle: "لپ تاپ برنامه نویسی", path: "" },
      { id: 3, name:"براساس کاربرد", filterTitle: "لپ تاپ تدوین و معماری", path: "" },
      { id: 4, name:"براساس کاربرد", filterTitle: "لپ تاپ میان رده", path: "" },
      { id: 5, name:"براساس کاربرد", filterTitle: "لپ تاپ گیمینگ", path: "" },
      { id: 6, name:"براساس کاربرد", filterTitle: "لپ تاپ دانشجویی", path: "" },
      { id: 7, name:"براساس کاربرد", filterTitle: "لپ تاپ دانش آموزی", path: "" },
    ],
  },
  {
    id: 2,
    title: "تبلت",
    icon: allIcons.FaTabletAlt,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"تبلت", title: "مایکروسافت", path: "" },
      { id: 1,name:"تبلت", title: "لنوو", path: "" },
      { id: 2,name:"تبلت", title: "سامسونگ", path: "" },
      { id: 3,name:"تبلت", title: "هوآوی", path: "" },
    ],
    filter: [
      { id: 0,name:"تبلت براساس کاربرد", filterTitle: "تبلت دانشجویی ", path: "" },
      { id: 1,name:"تبلت براساس کاربرد", filterTitle: "تبلت دانش آموزی", path: "" },
      { id: 2,name:"تبلت براساس کاربرد", filterTitle: "تبلت بازی", path: "" },
      { id: 3,name:"تبلت براساس کاربرد", filterTitle: "تبلت ویندوزی", path: "" },
    ],
  },
  {
    id: 3,
    title: "هدفون وهندزفری",
    icon: allIcons.BiHeadphone,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"هدفون و هندزفری", title: " اپل", path: "" },
      { id: 1,name:"هدفون و هندزفری", title: "سامسونگ", path: "" },
      { id: 2,name:"هدفون و هندزفری", title: "هوآوی", path: "" },
      { id: 3,name:"هدفون و هندزفری", title: "شیائومی", path: "" },
      { id: 4,name:"هدفون و هندزفری", title: "امیزفیت", path: "" },
      { id: 5,name:"هدفون و هندزفری", title: "کیسلکت", path: "" },
    ],
    filter: [],
  },
  {
    id: 4,
    title: "مچ بند و ساعت هوشمند",
    icon: allIcons.TbDeviceWatchStats,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"ساعت هوشمند", title: " اپل", path: "" },
      { id: 1,name:"ساعت هوشمند", title: "سامسونگ", path: "" },
      { id: 2,name:"ساعت هوشمند", title: "هوآوی", path: "" },
      { id: 3,name:"ساعت هوشمند", title: "شیائومی", path: "" },
      { id: 4,name:"ساعت هوشمند", title: "امیزفیت", path: "" },
      { id: 5,name:"ساعت هوشمند", title: "کیسلکت", path: "" },
    ],
    filter: [],
  },
  {
    id: 5,
    title: "لوازم جانبی",
    icon: allIcons.MdCable,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"هارد", title: " ای دیتا", path: "" },
      { id: 1,name:"هارد", title: "وسترن دیجیتال ", path: "" },
      { id: 2,name:"هارد", title: "سیگیت", path: "" },
      { id: 3,name:"کارت حافظه", title: "سن دیسک", path: "" },
      { id: 4,name:"کارت حافظه", title: "اچ پی", path: "" },
      { id: 5,name:"فلش مموری", title: "سن دیسک", path: "" },
      { id: 6,name:"فلش مموری", title: "اچ پی", path: "" },
      { id: 7,name:"پاور بانک", title: "انکر", path: "" },
      { id: 8,name:"پاور بانک", title: "شیائومی", path: "" },
      { id: 9,name:"پاور بانک", title: "انرجابزر", path: "" },
      { id: 10,name:"پاور بانک", title: "تی پی لینک", path: "" },
      { id: 11,name:"شارژر", title: "اپل", path: "" },
      { id: 12,name:"شارژر", title: "سامسونگ", path: "" },
      { id: 13,name:"شارژر", title: "شیائومی", path: "" },
      { id: 14,name:"شارژر", title: "هوآوی", path: "" },
      { id: 15,name:"شارژر", title: "گرین", path: "" },
      { id: 16,name:"مودم", title: "دی لینک", path: "" },
      { id: 17,name:"مودم", title: "هوآوی", path: "" },
      { id: 18,name:"دسته بازی", title: "گیمسر", path: "" },
      { id: 19,name:"ماوس", title: "ریزر", path: "" },
      { id: 20,name:"ماوس", title: "لاجیتک", path: "" },
      { id: 21,name:"پایه نگهدار گوشی", title: "گرین", path: "" },
    ],
    filter: [],
  },
  {
    id: 6,
    title: "کنسول بازی ",
    icon: allIcons.IoGameControllerOutline,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"کنسول بازی", title: " پلی استیشن", path: "" },
      { id: 1,name:"کنسول بازی", title: "ایکس باکس", path: "" },
    ],
    filter: [],
  },
  {
    id: 7,
    title: "صوتی وتصویری",
    icon: allIcons.IoRadioOutline,
    path: PATHS.PRODUCT,
    subNav: [
      { id: 0,name:"اسپیکر", title: "اپل", path: "" },
      { id: 1,name:"اسپیکر", title: "جی بی ال", path: "" },
      { id: 2,name:"اسپیکر", title: "شیائومی", path: "" },
      { id: 3,name:"اسپیکر", title: "سونی", path: "" },
      { id: 4,name:"اسپیکر", title: "گرین", path: "" },
      { id: 5,name:"تلویزیون", title: "اسنوا", path: "" },
      { id: 6,name:"تلویزیون", title: "هاینس", path: "" },
      { id: 7,name:"تلویزیون", title: "سامسونگ", path: "" },
      { id: 8,name:"تلویزیون", title: "LG", path: "" },
    ],
    filter: [],
  },
];
