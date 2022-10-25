import axios from 'axios'
//---- config variable
import {LOGIN , BASE_URL} from '../config/UrlConfig'
import {ToastContainer, toast } from 'react-toastify'
import {ACCESS_TOKEN,IS_LOGGED_IN} from '../config/VariableConfig'
class HttpService{
    constructor(){
        axios.defaults.baseURL=BASE_URL
        axios.defaults.timeout=2000;
        axios.interceptors.request.use((config:any):any =>  {
            const token:any =localStorage.getItem(ACCESS_TOKEN)
            if(config.url !== LOGIN){
                config.headers['token'] =`${token}`

            }
            return config
        },(error:any) =>{
            toast.error(error.response.data)
            return Promise.reject(error)

            }
        )
        axios.interceptors.response.use((response:any):any => {
            return response
        },
        (error:any) => {
            if (!error.response) return Promise.reject(error);
            if(error.response.status == 401){
                toast.error(" شما دسترسی لازم برای این کار را ندارید")
                localStorage.setItem(IS_LOGGED_IN, false.toString());
                localStorage.removeItem(IS_LOGGED_IN);
            }
           return Promise.reject(error)
        }
        
        );

        
        
    }
    get(url:any,config:any):any{
        return axios.get(url,config)
    }
    post(url:any,data:any,config?:any):any{
        return axios.post(url,data,config)
    }
    put(url:any,data:any,config:any):any{
        return axios.put(url,data,config)
    }
    patch(url:any,data:any,config:any):any{
        return axios.patch(url,data,config)
    }
    delete(url:any,config:any):any{
        return axios.delete(url,config)
    }

}
export default new HttpService
