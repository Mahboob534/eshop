import React,{FC} from 'react'

import FooterUser from './footer/FooterUser'
import HeaderUser from './header/HeaderUser'
interface propChildren{
  children:JSX.Element;
}
const LayoutUser: FC<propChildren>= ({children}) =>{
  return(
  <div>
    <div >
        <HeaderUser/>
    </div>
    <div className='relative  shadow-2xl top-36'>
        {children}
    </div>
    <div className=' relative  shadow-2xl top-36 '>
        <FooterUser/>
    </div>


  </div> 
  )
}

export default LayoutUser