import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/1152-blue-waves.json'

const Footer = () => {

  const defaultOptions = {
    loop:true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <footer className='text-white text-center' id="Footer">
            Owned and Made by Shabbir with ❤️
    </footer>
  )
}

export default Footer