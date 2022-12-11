import React, { FC, ReactElement, useState, useEffect } from "react";

import { GetProductsByName } from "../../api/GetProductByName";
import { LOGIN } from "../../config/UrlConfig";

import Card from "../card/Card";
interface idProps {
  id: number;
}
const Category: FC<idProps> = (props: idProps) :ReactElement => {
  const id = props.id;

  const [products, setProducts] = useState<any>();
  useEffect(() => {
    GetProductsByName(id).then((res) => setProducts(res.data));
  }, [id]);
  // console.log(products);

  return (
    <div className="flex  my-2 ">
      {products
        ? products.map((product: any) => (
            <div className="w-full m-1 static" key={product.id}>
              <Card product={product} />
            </div>
          ))
        : null}
    </div>
  );
};
export default Category;
