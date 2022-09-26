import React,{FC} from 'react'

const Footer :FC = () => {
  return (
    <div className='flex justify-center items-center  w-full h-96 bg-slate-700 p-5 '>
        <div className='w-1/3 text-slate-100 '> 
        <p className='text-3xl text-start'>  درباره ما</p>
        <p className='text-xl text-start'>   فعالیت این سایت در زمینه خدمات گردشگری  می باشد ما می خواهیم اوقات خوشی را در کنار خانواده برای شما عزیزان فراهم نماییم.</p>
        </div>
        <div className='w-1/3 '></div>
        <div className='w-1/3'></div>

    </div>
  )
}

export default Footer