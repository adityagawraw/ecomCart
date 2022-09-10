import { useState } from "react"
import './login.css'
export default function Login(){
    let [user, setUser] = useState('');
    let [password, setPassword] = useState('');
 function handleSubmit (e){
    e.preventDefault();
    alert(`Hello ${user}, you are logged in.`)
 }
    return (
        <div className="login">
            <form  className="loginForm" onSubmit={handleSubmit}>
            <h2> Login</h2>
            <div>Enter your moblie or email address</div>
            <input type='text' value={user}  placeholder="eg.xyz@gmail.com" required 
            onChange={(e)=>setUser(user = e.target.value)}></input>
            <div>Enter your Password</div>
            <input value={password} required  
            onChange={(e)=>setPassword(user = e.target.value)}></input>
            <button type="submit">Login</button>
            </form>
            <button className="newAcc">Create your New account </button>
        </div>
    )
}