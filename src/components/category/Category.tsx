import React,{FC,useState, useEffect} from 'react'



import {GetProductsByName} from '../../api/GetProductByName'
import { LOGIN } from '../../config/UrlConfig';

import Card from '../card/Card'
 interface props{
    name:number
 }
export default function Category<FC>(props:props) {
    const name=props.name
 

  const [products,setProducts]=useState<any>()
  useEffect(()=>{
    GetProductsByName(name).then((res)=>
    setProducts(res.data)

    )
  },[name])
 // console.log(products);
  

  return (
    <div className ="flex  my-2 ">
        {products ? products.map((product:any)=>

        <div className='w-full m-1 static'key={product.id}>
             <Card   product = {product} />
            </div> 
       
        ) : null

        }
      
    </div>
  )
}