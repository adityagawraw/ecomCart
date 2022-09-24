import { useState, useContext, useEffect } from "react"
import { CartContext } from '../../Context';
export default function CartTotal() {

    let {  cartArr }
        = useContext(CartContext);
    let [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal((total) => {
            // total = cartArr.reduce((a, c) => {
            //     return a +((c.cartCount) * (c.price)) ;
            // }, 0);
            let sum =0;
            if(cartArr.length>0){
                for(let i=0;i<cartArr.length;i++){
                    sum = sum +((cartArr[i].cartCount)*(cartArr[i].price));
                } 
            }
         else{
            total = 0;
         }
            return total= Math.round(sum);
        },[cartArr]);
        
    }
    
        , [cartArr]);

    return (
        <div className="cartTotal">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="total"> <span>Subtotal:</span>  <span><i class="fa fa-rupee"></i>{total}</span> </div>
            <button>Proceed to Buy</button>
        </div>
    )
}