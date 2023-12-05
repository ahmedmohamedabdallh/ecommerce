
import axios from 'axios';
import { useFormik } from 'formik';
import React, {  createContext, useState } from 'react'


import * as Yup from 'yup'
import { baseUrl } from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';



export const ThemeContex = createContext(null)
export default function Login({getUserData}) {
    const notify = (msg,type) => {
        toast[type](msg);
    }
    let [loding,setloding]=useState(false)
    let navigat=useNavigate()
    let validationSchema= Yup.object({
      
        email:Yup.string().email().required(),
        password:Yup.string().required(),
       
    })
    let login = useFormik({
        initialValues: {
           
            email:'',
            password:'',
            

        },
      validationSchema
      
       ,
        onSubmit: (values) => {
            setloding(true)
    axios.post(`${baseUrl}/auth/signin`,values).then((data)=>{
        if(data.status===200){
            localStorage.setItem('token',data.data.token)
            getUserData();
            setloding(false)
            notify('Success','success')
            navigat('/')

        }
    }).catch((error)=>{
        if(error.response.status == 401){
            setloding(false)
            notify(error.response.data.message,'error')
           

        }
    })
        }
        
    })

   
    return (
        <>


<Helmet>
      <title>Login</title>
    </Helmet>


            <div className='w-50 m-auto my-5'>
                <h2 className='m'>Login</h2>
                <form onSubmit={login.handleSubmit} >
                   
                    <label htmlFor="email">Email</label>
                    <input value={login.values.email} onChange={login.handleChange} type="email" className='form-control my-3' id='email' name='email' />
                    {login.errors.email?<div className="alert alert-danger">{login.errors.email }</div>:''}
                    <label htmlFor="password">Password</label>
                    <input value={login.values.password} onChange={login.handleChange} type="password" className='form-control my-3' id='password' name='password' />
                    <button disabled={!(login.isValid&&login.dirty&&!loding)} type='submit' className='btn btn-outline-primary '>
                        {!loding?"Login":<i className='fas fa-spinner fa-spin'></i>}
                        </button>
                </form>
            </div>

        </>
    )
}

