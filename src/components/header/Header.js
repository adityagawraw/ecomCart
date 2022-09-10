import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import "./Header.css";
import { CartContext } from '../../Context';
import { useContext } from 'react';

export default function Header() {
    let { cartArr }
        = useContext(CartContext);
    return (
        <div className='header'>
            <Link className='headerItem  textColor' to='/'><h1 className='title'>My Ecom</h1></Link>
            <SearchBar></SearchBar>
            <Link className='headerItem textColor' to='/cart'>
                <h3>
                Cart
           ({cartArr.length}) 
            </h3>
            </Link>
            <Link className='headerItem textColor' to='./login'><h3>login</h3></Link>
        </div>
    )
}