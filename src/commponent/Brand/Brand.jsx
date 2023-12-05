import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { baseUrl } from '../../utils/baseUrl'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spiner from '../Spiner/Spiner'
import { Helmet } from 'react-helmet'

export default function Brand() {
    const [Products, setProducts] = useState([])
    const getAllBrand = async () => {
        let { data } = await axios.get(`${baseUrl}/brands/`)
        console.log(data)
        setProducts(data.data)
    }
    useEffect(() => {
        getAllBrand()
    }, [])
    return (
        <>
         <Helmet>
      <title>Brand</title>
    </Helmet>
        {Products.length>0?<div className='container'>
                <div className="row">
                    {Products.map((item, indx) => {
                        return <div key={indx} className="col-md-3">
                    <Link to={`/brpro/${item._id}`}>
                    <div>
                         <img className='w-100' src={item.image} alt="" />
                            <h3 className='text-center text-primary'>{item.name}</h3>
                         </div>
                    </Link>

                        </div>
                    })}

                </div>
            </div>:<Spiner/>}
            
        </>
    )
}
