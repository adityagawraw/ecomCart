import { useContext } from 'react';
import { CartContext } from '../../Context';
import CartItem from './CartItem';
import CartTotal from './CartTotal';


export default function Cart() {
    let { cartArr }
        = useContext(CartContext);


    return (
        <div className='cart'>
            <div>
                <h1 className='h1'>Shopping Cart</h1>
                <div className='cartItems'>
                    {cartArr.length>0?cartArr.map(item => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        )
                    }):<h1>No product in Cart!!!</h1>}
                </div>
            </div>
            <CartTotal />
        </div>

    )
}