import Images from "../../assets/Index";

export interface myData{
    id:number;
    image:any;
    title:string;
    path?:any;
    button?:string;

}

export const firstSlideInfo: myData[] =[
{ id:0,image:Images.handsfreeSlide3, title:"handsfree"},
{ id:1,image:Images.hardSlide2, title:"hard"},
{ id:2,image:Images.laptopSlide1, title:"laptop"},

]

export const secondSlideInfo:myData[]=[
    {id:0,image:Images.Handsfree1,title:"Handsfree",path:"./",button:" خرید کنید"},
    {id:1,image:Images.smartWatch,title:"smartWatch",path:"./",button:" خرید کنید"},
    {id:2,image:Images.speaker,title:"speaker",path:"./",button:" خرید کنید"}
]
