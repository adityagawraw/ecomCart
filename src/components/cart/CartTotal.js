import { useState,useContext, useEffect } from "react"
import { CartContext } from '../../Context';
export default function CartTotal(){
    let [total, setTotal] =  useState(0);
    let { productArr, setProductArr, searchArr, setSearchArr, cartArr, setCartArr }
        = useContext(CartContext);
   
//    setTotal((total)=>{
//     total = 0;
//     for(let i=0;i<cartArr.length;i++){
//         total += cartArr[i].cartCount*cartArr[i].price;
//     }
//     return total;
//    })
// useEffect (()=>{
//     let a = cartArr;
//     setTotal(a.reduce((x,y)=>(x.cartCount*x.price)+(y.cartCount*y.price)));
// },[cartArr])


   
   
    return(
        <div className="cartTotal">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       <div className="total"> <span>Subtotal:</span>  <span><i class="fa fa-rupee"></i>{total}</span> </div>
       <button>Proceed to Buy</button>
       </div>
    )
}