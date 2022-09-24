import  { useContext, useEffect } from 'react';
import { CartContext } from '../../Context';
import HomeItem from './HomeItem';
import Categories from './Categories';
import './Home.css';
export default function Home() {
    let { productArr, searchArr, setSearchArr } = useContext(CartContext);
   useEffect(()=>{
    setSearchArr(productArr)
   },[]);
    // console.log(searchArr);
    return (
        <div className='home'>
         <Categories/>
<div className='items'>
            {searchArr.map((item) => {
                return (
                    <HomeItem
                        
                        item={item}

                    />
                )
            })}
            </div>
        </div>
    )
}