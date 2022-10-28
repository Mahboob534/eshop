import React,{FC} from 'react'

import Footer from './footer/FooterUser'
import Header from './header/HeaderUser'
interface propChildren{
  children:JSX.Element;
}
const LayoutUser: FC<propChildren>= ({children}) =>{
  return(
  <div>
    <div >
        <Header/>
    </div>
    <div>
        {children}
    </div>
    <div>
        <Footer/>
    </div>


  </div> 
  )
}

export default LayoutUser