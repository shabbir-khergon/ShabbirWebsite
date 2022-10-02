import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/55885-developer.json'

const Header = () => {
  
  const defaultOptions = {
    loop:true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <header>
      <div className="container">
      <div className='text-center masthead'>
              <h1 className="arabicFont">أهلا و سهلا</h1>
              <hr />
              <h2><span className='text-accent2 text-playfaildisplay'>I am </span><span className='styledFont'>Shabbir Khargon</span></h2>
            </div>
      </div>
    </header>
  )
}

export default Header