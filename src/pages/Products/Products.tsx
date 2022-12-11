import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Category from "../../components/category/Category";

export const ProductsPage: FC = () => {
  let idParams = useParams()
  //console.log(idParams);
  
  let category_id = idParams.id_category
 // console.log(category_id);
  
  useEffect(() => {}, []);
  return (
    <>
       <Category id={category_id}  />
    </>
  );
};
