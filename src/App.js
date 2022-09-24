import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import { useContext, useEffect } from 'react';
import {CartContext} from './Context';
import Login from './components/login/Login';

function App() {
let { productArr, setProductArr } =  useContext(CartContext);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProductArr(json));
    console.log(productArr);
}, []);

  return (
    <div className="App">
<Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
