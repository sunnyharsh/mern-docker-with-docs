import React from 'react';
import {
    Link,
  } from "react-router-dom";

const NavBar=()=>{
    return(
        <div style={{display:"flex"}}> 
            <div style={{margin:"10px"}}>
                <Link to="/">Home</Link> 
            </div>
            <div style={{margin:"10px"}}>
                <Link to="/about">About</Link> 
            </div>
        </div>
    )
}

export default NavBar;