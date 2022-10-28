import React, { useState } from "react";
export const DisplayIcon = (props) => {
 let iconEye= props.iconEye
 let setIconEye= props.setIconEye
 let setPasswordVisibility= props.setPasswordVisibility
 let passwordVisibility= props.passwordVisibility
 
  if (iconEye === "eye") {
    setIconEye("eye-off");
    setPasswordVisibility(!passwordVisibility);
  } else if (iconEye === "eye-off") {
    setIconEye("eye");
    setPasswordVisibility(!passwordVisibility);
  }
  return({iconEye,passwordVisibility})
   

  
}
