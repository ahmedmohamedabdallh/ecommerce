import React, { useEffect, useState } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
export default function Spiner() {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },[])
{/* <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/> */}
  
  return (
    <>
    <div className=' spiner container-fluid  d-flex justify-content-center align-items-center '>

   
{

  loading?
  <MoonLoader

  color={'#0bffda'}
  loading={loading}
  // cssOverride={override}
  size={150}

/>:''
}
</div>
    </>
  )
}


