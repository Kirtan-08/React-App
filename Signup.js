import React, {useState, useEffect}from 'react'
import {useNavigate} from 'react-router-dom'

 const Signup = () => {
    const[name ,setName] = useState("");
    const[password ,setPassword] = useState("");
    const[email ,setEmail] = useState("");
    const[error, setError] = useState("");
    const navigation = useNavigate();
    useEffect(() =>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigation('/');
      }
      
    })
    const collectData = async () => {
      if(!name || !email || !password){
        setError(true);
        return;
      }
        console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/register', {
          method: 'post',
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type' : 'application/json'
          },
       })

       result = await result.json()
       console.warn(result);
       localStorage.setItem("user", JSON.stringify(result));
       if (result){
          navigation('/');
       }
    }
  return (
    <div className='register'>
        <h1>Register</h1>
        <input className='inputbox' type='text'value={name} onChange={(e) => setName(e.target.value)} placeholder='Hello kirtan'/>
        { error && !name && <span className='invalid-input'>Enter valid name</span>}
        <input className='inputbox' type='text'value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Enter Email'/>
        { error && !email && <span className='invalid-input'>Enter Valid email</span>}
        <input className='inputbox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
        { error && !password  && <span className='invalid-input'>Enter Valid password</span>}
        <button className='appbutton' onClick={collectData} type='submit'>Submit</button>
    
    </div>
  )
}

export default Signup;
