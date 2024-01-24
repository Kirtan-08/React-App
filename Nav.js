import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';
import Logo from '../images/Logo2.png';
export const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup');
}

  return (
    <div >
      <img className='logo' src={Logo} alt='' />
    
      { auth
         ?
        <ul className='nav-ul'>

        <li><Link to="/" >Products</Link></li>
        <li><Link to="/add" >Add Products</Link></li>
        <li><Link to="/update" > Update Products</Link></li>
        <li><Link to="/profile" >Profile</Link></li>
        <li><Link to = "/Signup" onClick={logout}>Logout({JSON.parse(auth).name})</Link></li>
        </ul>
     :
     <ul className='nav-ul' >
        <li>  
           
         <li>  <Link to="/Signup" >Signup</Link></li>
          <li><Link to="/login" >Login</Link></li>
           </li>
        </ul>
}      </div>
  )
}
