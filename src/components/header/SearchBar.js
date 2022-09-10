import { useState, useContext } from "react";
import { CartContext } from '../../Context';
import './Header.css'

export default function SearchBar() {
    let [searchInput, setSearchInput] = useState('');
    let { productArr,  searchArr, setSearchArr }
        = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchArr(arr =>
            arr = productArr.filter((item) =>
                item.title.toLowerCase().includes(searchInput.toLowerCase())));
        console.log(searchArr);
        setSearchInput('');
    }


    return (
        <form onSubmit={handleSubmit} className="search">
            <input className="inputBar" type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
            <button className="searchButton" type="submit" >Search</button>
        </form>

    )
}