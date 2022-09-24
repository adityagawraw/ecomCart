import React, { createContext, useState } from "react";
export let CartContext = createContext();
export default function Context({ children }) {
    let [productArr, setProductArr] = useState([]);
    let [searchArr, setSearchArr] = useState([]);
    let [cartArr, setCartArr] = useState([]);
    return (
        <CartContext.Provider 
        value={{ productArr, setProductArr, searchArr, setSearchArr, cartArr, setCartArr }}>
            {children}
        </CartContext.Provider>
    )
}
