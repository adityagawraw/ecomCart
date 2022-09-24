import { useContext, useState } from 'react';
import { CartContext } from '../../Context';
import './Cart.css';
export default function CartItem({ item }) {
    let { cartArr, setCartArr }
        = useContext(CartContext);
    let itemObj = item;
    let index = cartArr.indexOf(item);
    function sub() {
        Object.assign(itemObj, { cartCount: itemObj.cartCount - 1 });

        setCartArr(arr => arr.map((element, i) => {
            if (i == index) {
                return itemObj;
            }
            return element;
        }));
    };
    return (
        <div className='cartBox'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img className='cartImg' src={item.image} alt={item.title}></img>
            <div className='cartInfo'>
                <div className='title'>{item.title}</div>
                <div><i class="fa fa-rupee"></i><span>{item.price}</span></div>
                <div className='cartButtons'>
                    <div className='countButtons'>
                        <button className='changeCount' onClick={() => {
                            itemObj.cartCount > 1 ?
                                sub()
                                : setCartArr((arr) => arr.filter((element) => element !== item));
                            console.log(cartArr);
                        }}>-</button>

                        <div className='qty'>Qty : {cartArr[index].cartCount}</div>

                        <button className='changeCount'
                            onClick={() => {

                                Object.assign(itemObj, { cartCount: itemObj.cartCount + 1 });

                                setCartArr(arr => arr.map((element, i) => {
                                    if (i == index) {
                                        return itemObj;
                                    }
                                    return element;
                                }));

                                console.log(cartArr[0].cartCount * cartArr[0].price);
                            }}>+</button>
                    </div>

                    <button className='removeButton' onClick={() => {
                        setCartArr((arr) => arr.filter((element) => element !== item));
                    }}>Remove</button>
                </div>
            </div>
        </div>
    )
}