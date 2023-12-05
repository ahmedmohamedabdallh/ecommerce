import React from 'react'
import offlineImage from '../../images/icons8-wi-fi-disconnected-96.png'
export default function Dss() {
  return (
    <>
    <div className='off'>
 <div className='dss'>
      <img src={offlineImage} alt="" />
       <h1>Not Connection</h1>
       <p>Please check your internet connection </p>
    </div>
    </div>
   
    </>
  )
}
