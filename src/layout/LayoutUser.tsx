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