import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Category from "../../components/category/Category";

import LayoutUser from "../../layout/LayoutUser";
import {GetProductsByName} from '../../api/GetProductByName'
import Pagination from '../../components/Pagination/Pagination'
import Card from "../../components/card/Card";


export const ProductsPage: FC = () => {
  let idParams = useParams();
  //console.log(idParams);

  const category_id = idParams.id_category;
 
  // console.log(category_id);
  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage] = useState<number>(3);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(products.length / recordsPerPage)
   const pageName:string ="productsPage"
   console.log(currentRecords);
   useEffect(() => {
       GetProductsByName(Number(category_id)).then((res) => setProducts(res.data))
 }, [category_id]);

   
 
  return (
    <LayoutUser>
      <div className=" mb-2 ">
        <div className="flex justify-center border-black border-b relative mb-20 pt-20 mx-3 sm:mx-20">
          <h3 className="sm:text-3xl font-bold bg-[#fbf5f5] border border-sky-900 w-fit rounded-md absolute mt-[-24px] px-1 sm:px-7 py-2 ">
            دسته بندی محصولات
          </h3>
        </div>
        <div className=" flex justify-around items-center w-full my-1 ">
          <Category  products={currentRecords} />
           {/* <Card product={currentRecords} />  */}
        </div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      
    </LayoutUser>
  );
};
