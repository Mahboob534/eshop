import React,{FC} from 'react'
import Footer from './footer/FooterUser'
import Header from './header/HeaderUser'

const LayoutUser: FC= (children) =>{
  return(
  <div>
    <div >
        <Header/>
    </div>
    <div>
        children
    </div>
    <div>
        <Footer/>
    </div>


  </div> 
  )
}

export default LayoutUser