import React from 'react'
import Images from '../../assets/Index'
export default function Logo() {
  return (
    <div className="flex justify-center items-center w-full h-32 my-3">
    <img className="w-16 h-16" src={Images.logo} alt="logo" />
    <h1 className="text-slate-200 font-bold text-6xl px-4 first-letter:text-red-600">
      فندق
    </h1>
  </div>
  )
}
