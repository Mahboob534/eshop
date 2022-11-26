import http from '../services/Httpservice'
import {GET_PRODUCTS} from '../config/UrlConfig'
export async function GetProducts(){
    try{
        const response= await http.get(`${GET_PRODUCTS}`)
 return response
    }
    catch(e :any){
        return Promise.reject(e)

    }

}