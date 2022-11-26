import { number } from "yup";

export interface footerList{
  id:number;
  buyGuideList:string ;
}
export interface footerFavorite{
  id:number;
  favoriteArticles:string;
}
export const footerLists:footerList[] = [
{id:0 , buyGuideList:"روشهای ‍‍‍پرداخت"},
{id:1 , buyGuideList:"سوالات متداول"},
{id:2 , buyGuideList:"راهنمای ارسال سفارش"} ,
{id:3 , buyGuideList:"قوانین سایت "},
{id:4 , buyGuideList:"شرایط گارانتی فندق"}
]


  export const footerFavorites:footerFavorite[]=[
    {id:0, favoriteArticles: "بررسی تفاوت های SSD و HDD و مقایسه ویژگی های آنها"},
    {id:1, favoriteArticles: "آموزش جامع ارتقاء رم لپ تاپ و کامپیوتر"},
    {id:2, favoriteArticles: "راهنمای جامع خرید مودمADSL و LTE در سال 2022"},
    {id:3, favoriteArticles:  "شیائومی گلوبال یا پک چین هند سامونگ یا پک ویتنام؟"},
  ]
    

  
 