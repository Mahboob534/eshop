import React, { FC, ReactElement, useState, useEffect } from "react";



import Card from "../card/Card";
interface idProps {
  products:any
 
}
const Category: FC<idProps> = (props: idProps): ReactElement => {
  const products = props.products
  return (
    <div className="flex w-full">
      {products 
        ? 
        products.map((product: any) => (
          <div className="w-full m-1 static" key={product.id}>
            <Card product={product} />
          </div>
        )) : null  }
    </div>
  );
};
export default Category;
