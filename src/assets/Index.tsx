import logo from "./images/namad.png";
import tandisHoghogh from "./images/تصویر-تندیس-حمایت-از-حقوق-مصرف-کنندگان-فروشگاه-اینترنتی-لیپک-1.png";
import tandisFanavar from "./images/تصویر-تندیس-مدیریت-فناوری-فروشگاه-اینترنتی-لیپک.png";
import symbolNational from "./images/نشان-ملی-ثبت-رسانه-های-ریجیتال-سایت-لیپک.png";
import symbolElectronic from "./images/نماد-الکترونیکی-فروشگاه-انلاین-لیپک.png";
import laptopSlide1 from "./images/لپ-تاپ-اچ-پی.png";
import hardSlide2 from "./images/هارد-اکسترنال.png";
import handsfreeSlide3 from "./images/هندزفری.png";
import instagram from "./images/instagram.png";
import speaker from "./images/انواع-اسپیکر.png";
import Handsfree1 from "./images/هندزفری1.png";
import smartWatch from "./images/خرید-ساعت-هوشمند.png";


const Images  = {
  logo:logo,
  tandisHoghogh:tandisHoghogh,
  tandisFanavar:tandisFanavar,
  symbolNational:symbolNational ,
  symbolElectronic:symbolElectronic,
  laptopSlide1:laptopSlide1,
  hardSlide2:hardSlide2,
  handsfreeSlide3:handsfreeSlide3,
  instagram:instagram,
  speaker:speaker,
  Handsfree1:Handsfree1,
  smartWatch:smartWatch,
}as const
type Images=typeof Images
export default Images;
