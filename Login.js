import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const[email ,setEmail] = useState("");
    const[password ,setPassword] = useState("");
    const Navigate = useNavigate();
    const handlelogin= async () =>{
        console.warn("email, password", email , password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({email ,password}),
            headers: {
              'Content-Type' : 'application/json'
            },
         })
         result = await result.json()
         console.warn(result);
        
         if (result.name){
            localStorage.setItem("user", JSON.stringify(result));
            Navigate('/');
         }
         else{
            alert("Please Enter your correct details")
         }
      }
    
     return (
        <div className='Login'>
            <input className='inputbox' type='text'value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Enter Email'/>
            <input className='inputbox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
            <button className='appbutton' onClick={handlelogin} type='submit'>Submit</button>
        </div>
             )
     }
export default Login;