
import allIcons from '../../assets/icons/index'
 export interface lists{
    id:number,
   title:string;
    icon:any; 
 }
export const menuItems :(lists)[]=[
    {id:0,title:"موبایل",icon:allIcons.FaMobileAlt}  ,
    {id:1,title:"لپ تاپ",icon:allIcons.BsLaptop},
    {id:2,title:"تبلت",icon:allIcons.FaTabletAlt},
    {id:3,title:"هدفون وهندزفری",icon:allIcons.BiHeadphone},
    {id:4,title:"مچ بند و ساعت هوشمند",icon:allIcons.TbDeviceWatchStats},
    {id:5,title:"لوازم جانبی", icon:allIcons.MdCable},
    {id:6,title:"کنسول بازی ", icon:allIcons.IoGameControllerOutline},
    {id:7,title:"صوتی وتصویری", icon:allIcons.IoRadioOutline},
]
