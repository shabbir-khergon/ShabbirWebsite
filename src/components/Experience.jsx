import React, { useEffect, useState } from 'react'
import './Experience.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Experience = () => {

  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div class="container-fluid WhiteBox">
         <div class="d-flex justify-content-evenly">
            {/* <div className='counterBox'>
               <h5>{counterOn && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>} + </h5>
               <p>Projects Complete</p>
            </div>
            <div className='counterBox'>
            <h5> {counterOn && <CountUp start={0} end={9} duration={2} delay={0}></CountUp>} + Months </h5>
               <p>Experience</p>
         </div> */}
      </div>
      </div>

    </ScrollTrigger>
  )
}

export default Experience