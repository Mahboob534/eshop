import http from '../services/Httpservice'

export async function GetProductsByName(categoryName:number){
    console.log(categoryName);
    
    try{
        const response = await http.get(`/products?category_id=${categoryName}`)
        return response
    }
    catch(e){
        return Promise.reject(e)
    }
    



}