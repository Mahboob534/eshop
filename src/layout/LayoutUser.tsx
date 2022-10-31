import React,{FC} from 'react'
<<<<<<< HEAD
import FooterUser from './footer/FooterUser'
import HeaderUser from './header/HeaderUser'
interface propChildren{
  children:JSX.Element;
}

=======

import Footer from './footer/FooterUser'
import Header from './header/HeaderUser'
interface propChildren{
  children:JSX.Element;
}
>>>>>>> loginpage
const LayoutUser: FC<propChildren>= ({children}) =>{
  return(
  <div>
    <div >
        <HeaderUser/>
    </div>
    <div>
        {children}
    </div>
    <div>
        <FooterUser/>
    </div>


  </div> 
  )
}

export default LayoutUser