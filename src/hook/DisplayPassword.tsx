import React, {FC, useState } from "react";
// interface propsPassword{
//   iconEye:string;
//   setIconEye(iconEye:string):void;
//   setPasswordVisibility(passwordVisibility:boolean):void;
//   passwordVisibility:boolean;

// }
 const DisplayPassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [iconEye, setIconEye] = useState<string>("eye");
 const handlePasswordVisibility=()=>{
  if (iconEye === "eye") {
    setIconEye("eye-off");
    setPasswordVisibility(!passwordVisibility);
  } else if (iconEye === "eye-off") {
    setIconEye("eye");
    setPasswordVisibility(!passwordVisibility);
  }
 }
  
  return({iconEye,passwordVisibility,handlePasswordVisibility})
   

  
}
export default DisplayPassword
