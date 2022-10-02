import React, { useEffect, useState } from 'react'

const Navbar = () => {  

  const [lightMode, setLightMode] = useState(false)

  const changeMode=(darkMode)=>{
    if(darkMode){
      document.documentElement.style.setProperty('--primmary','#030d1d');
      document.documentElement.style.setProperty('--secondary','#393E46');
      document.documentElement.style.setProperty('--accent','#00ADB5');
      document.documentElement.style.setProperty('--accent2','#EE9933');
      document.documentElement.style.setProperty('--font','#EEEEEE');
    }else{
      document.documentElement.style.setProperty('--primmary','#EDE8E1');
      document.documentElement.style.setProperty('--secondary','#FFFFFF');
      document.documentElement.style.setProperty('--accent','#ACA79B');
      document.documentElement.style.setProperty('--accent2','#A0E6FD');
      document.documentElement.style.setProperty('--font','#89A4C3');
    }
  }

  return (
<nav id="navbar-example2" class="navbar fixed-top px-3 mb-3  ">
  <ul class="nav nav-pills d-none d-md-flex ms-auto ">
  <li class="nav-item">
      <a class="nav-link" href="#Home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#About">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Technologies">Technologies</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Experience">Experience</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Contact">Contact</a>
    </li>
  </ul>
  <label class="switch">
  <input type="checkbox" onChange={()=>{setLightMode(!lightMode);changeMode(!lightMode)}} defaultChecked={!lightMode}/>
  <span class="slider round"></span>
</label>
</nav>
  )
}

export default Navbar