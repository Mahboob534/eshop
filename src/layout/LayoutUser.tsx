import React,{FC} from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

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