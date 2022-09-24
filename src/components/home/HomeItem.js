import { useContext, useState } from 'react';
import { CartContext } from '../../Context';
import './Home.css';

export default function HomeItem({ item }) {

    let { cartArr, setCartArr }
        = useContext(CartContext)

    let [flag, setFlag] = useState(false);
    return (
        <div className='itemBox'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img src={item.image} alt={item.title}></img>
            <div>{item.title}</div>
            <div><i class="fa fa-rupee"></i>{item.price}</div>
            <div className='rating'>
                <span>{item.rating.rate}</span>
                <span class="fa fa-star checked"></span>
            </div>
            <button onClick={() => setCartArr(arr => {
                if (arr.filter((element) => element.id == item.id).length == 1) {
                    return arr;
                }
                setFlag(true)
                item = { cartCount: 1, ...item };
                console.log(cartArr);
                return arr = [item, ...arr];

            })}>{flag ? <div>Added</div> : <div>Add item</div>}</button>

        </div>
    )
}