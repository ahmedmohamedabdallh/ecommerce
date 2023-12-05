
import axios from 'axios';
import { useFormik } from 'formik';
import React, {  createContext, useState } from 'react'


import * as Yup from 'yup'
import { baseUrl } from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

// import Switch from "react-switch";

export const ThemeContex = createContext(null)
export default function Rejaster() {
    const notify = (msg,type) => {
        toast[type](msg);
    }
    let [loding,setloding]=useState(false)
    let navigat=useNavigate()
    let validationSchema= Yup.object({
        name:Yup.string().min(3).max(20).required(),
        email:Yup.string().email().required(),
        password:Yup.string().matches(/^[A-Z][a-z0-9@#%$*]{7,}$/,'The password is not valid').required(),
        rePassword:Yup.string().oneOf([Yup.ref('password')],'Password Different  ').required(),
    })
    let rejaster = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
            rePassword:'',

        },
      validationSchema
      
       ,
        onSubmit: (values) => {
            console.log(values);
            setloding(true)
    axios.post(`${baseUrl}/auth/signup`,values).then((data)=>{
        if(data.status==201){
            console.log(data);
           
            setloding(false)
            notify('Success','success')
            navigat('/login')

        }
    }).catch((error)=>{
        if(error.response.status == 409){
            console.log(error);
            setloding(false)
            notify(error.response.data.message,'error')
            // alert(error.response.data.message)

        }
    })
        }
        
    })
    // const notify = (msg,type) => {
    //     toast[type](msg);
    // }
    // let [loding,setloding]=useState(false)
    // let navigat=useNavigate()
    // let validationSchema= Yup.object({
    //     name:Yup.string().min(3).max(20).required(),  
    //     email:Yup.string().email().required(),
    //     password:Yup.string().matches(/^[A-Z][a-z0-9@#%$*]{7,}$/,'The password is not valid').required(),
    //     confirm:Yup.string().oneOf([Yup.ref('password')],'Password Different  ').required(),
    // })
    // let rejaster = useFormik({
    //     initialValues: {
    //        name:'',
    //         email:'',
    //         password:'',
    //         confirm:''
            

    //     },
    //   validationSchema
      
    //    ,
    //     onSubmit: (values) => {
    //         setloding(true)
    // axios.post(`${baseUrl}/auth/signup`,values).then((data)=>{
    //     if(data.status===200){
    //         console.log(data);
            
    //         setloding(false)
    //         notify('Success','success')
    //         navigat('/login')

    //     }
    // }).catch((error)=>{
    //     if(error.response.status == 401){
    //         setloding(false)
    //         notify(error.response.data.message,'error')
           

    //     }
    // })
    //     }
        
    // })
   
    return (
        <>

<Helmet>
      <title>Rejaster</title>
    </Helmet>



            <div className='w-50 m-auto my-5'>
                <h2 className='m'>Rejaster Now</h2>
                <form onSubmit={rejaster.handleSubmit} >
                    <label className='mt-3' htmlFor="name">Name</label>
                    <input value={rejaster.values.name} onChange={rejaster.handleChange} type="text" className='form-control my-3' id='name' name='name' />
                    {rejaster.errors.name?<div className="alert alert-danger">{rejaster.errors.name }</div>:null}
                    <label htmlFor="email">Email</label>
                    <input value={rejaster.values.email} onChange={rejaster.handleChange} type="email" className='form-control my-3' id='email' name='email' />
                    {rejaster.errors.email?<div className="alert alert-danger">{rejaster.errors.email }</div>:''}
                    <label htmlFor="password">Password</label>
                    <input value={rejaster.values.password} onChange={rejaster.handleChange} type="password" className='form-control my-3' id='password' name='password' />
                    {rejaster.errors.password?<div className="alert alert-danger">{rejaster.errors.password }</div>:''}
                    <label htmlFor="rePassword">Confirm Password</label>
                    <input value={rejaster.values.rePassword} onChange={rejaster.handleChange} type="password" className='form-control my-3' id='rePassword' name='rePassword' />
                    {rejaster.errors.rePassword?<div className="alert alert-danger">{rejaster.errors.rePassword }</div>:''}
                    <button disabled={!(rejaster.isValid&&rejaster.dirty&&!loding)} type='submit' className='btn btn-outline-primary '>
                        {!loding?"Rejaster":<i className='fas fa-spinner fa-spin'></i>}
                        </button>
                </form>
            </div>

        </>
    )
}

