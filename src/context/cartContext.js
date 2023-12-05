import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { baseUrl } from "../utils/baseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import { toast } from "react-toastify";
import { cartReducer } from "./Reducer";




export let CartContext = createContext(0)

const notify = (msg,type) => {
  toast[type](msg);
}
export default function CartContextProvider({ children }) {
  const nav = useNavigate()
  const [numOfCartItem, setnumOfCartItems] = useState(0);
  const [totaPrice, setTotaPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState(null);
  const [cartId, setCartId] = useState(null);
  function addToCart(token, productId) {
    return axios.post(`${baseUrl}/cart`, { productId }, { headers: { token } }).then(data => data)

      .catch(error => error)

  }
  async function getCart() {
    try {
      const { data } = await axios.get(`${baseUrl}/cart`, {
        headers: { 'token': localStorage.getItem('token') }

      });

      if (data.status == 'success') {
        console.log(data);
        
        setnumOfCartItems(data.numOfCartItems)
        setTotaPrice(data.data.totalCartPrice)
        setCartProducts(data.data.products)
        setCartId(data.data._id)
      }
    } catch (error) {
      if (error.response.status == 404) {
        $('.errorCart').fadeIn(300, function () {
          setTimeout(() => {
            $('.errorCart').fadeOut(300)
            nav('/products')
          }, 200)
        })
      }
    }

  }


  // function getUserCart(token){
  //   return axios.get(`${baseUrl}/cart`,{headers:{token}}).then(data=>data)
  //    .catch(error=>error)
  //  }

  async function removeCart(id) {
    try {
      let { data } = await axios.delete(`${baseUrl}/cart/${id}`, { headers: { 'token': localStorage.getItem('token') } })


      if (data.status == "success") {
        notify("Remove",'error')
        setnumOfCartItems(data.numOfCartItems)
        setTotaPrice(data.data.totalCartPrice)
        setCartProducts(data.data.products)
        getCart()
        return true;
      }
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getCart()
  }, [])
  //  useEffect(function(){
  //   getUserCart()
  // })
  
  const [count,dispatch]=useReducer(cartReducer,{product:cartProducts,cart:[]})
  return <CartContext.Provider value={{count,dispatch, addToCart, removeCart, getCart, numOfCartItem, totaPrice, cartProducts,cartId }}>
    <div style={{ "display": "none" }} className="alert alrert-danger errorCart"> No Cart Exist</div>
    {children}
  </CartContext.Provider>
}