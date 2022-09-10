import { CartContext } from '../../Context';
import { useContext } from 'react';
import './Categories.css'
export default function Categories() {
    let { productArr,  setSearchArr }
        = useContext(CartContext)
    return (
        <div className='categories'>
            <button className='catButton' onClick={() => {
                setSearchArr(productArr);
            }}>All</button>
            <button className='catButton' onClick={() => {
                setSearchArr((arr) => arr = productArr.filter((item) => item.category == "men's clothing"
                ));
               
            }}>Men's Clothing </button>
            <button className='catButton' onClick={() => {
                setSearchArr((arr) => arr = productArr.filter((item) => item.category == "women's clothing"
                ));
               
            }}>Women's Clothing</button>
            <button className='catButton' onClick={() => {
                setSearchArr((arr) => arr = productArr.filter((item) => item.category == "electronics"
                ));
               
            }}>Electronics</button>
            <button className='catButton' onClick={() => {
                setSearchArr((arr) => arr = productArr.filter((item) => item.category == "jewelery"
                ));
               
            }}>Jewelery</button>
        </div>
    )
}