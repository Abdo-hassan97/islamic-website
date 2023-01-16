import React from "react";
import "./nav.css";
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <div>
      <ul>
        <li><Link to="/" aria-current="page" ><p >موعد الصلاة</p> </Link></li>
        <li><Link to="/Sebha" aria-current="page" ><p>السبحة</p> </Link></li>
        <li><Link to="/Azkar" aria-current="page" ><p>الاذكار</p> </Link></li>
 

      </ul>
    </div>
  );
};

export default Nav;
