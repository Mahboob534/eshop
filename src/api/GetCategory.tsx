import http from '../services/Httpservice'
import { GET_CATEGORIES} from '../config/UrlConfig'

export async function GetCategory() {
    try{
      const response = await http.get(`${GET_CATEGORIES}`) 
      return response 
    }
    catch(e:any){
        return Promise.reject(e)
    }
}