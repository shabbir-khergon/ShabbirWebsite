import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/55885-developer.json'
import './About.css'
import {HiOutlineArrowDown} from 'react-icons/hi'
import me from '../assets/img/me.jpg'
import Me from './AboutSections/Me';
import Skills from './AboutSections/Skills';
import Qualif from './AboutSections/Qualif';
import Career from './AboutSections/Career';

const About = () => {


  const [activetab, setActivetab] = useState('about')

  const defaultOptions = {
    loop:true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
 


  return (
    <div className='container-fluid h-75'>
      <div className="h-100 aboutContainer">
        <div class="d-flex flex-md-row flex-column align-items-start aboutSection h-100">
            <div class="nav flex-row flex-md-column nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link">
                <div className="imgRound">
                  <img src={me} alt="" />
                </div>
              </button>
              <button class="nav-link active aboutnav" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={()=>setActivetab('about')}>About</button>
              <button class="nav-link aboutnav" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={()=>setActivetab('skill')}>Skills</button>
              <button class="nav-link aboutnav" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={()=>setActivetab('qual')}>Qualifications</button>
              <button class="nav-link aboutnav" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={()=>setActivetab('career')}>Career</button>
            </div>
            <div class="tab-content mt-2 p-xs-1 p-md-3" id="v-pills-tabContent" style={{'overflow':'auto'}}>
              
              <div class="tab-pane fade text-white show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                <Me/>
              </div>

              <div class="tab-pane fade text-white" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                <Skills/>
              </div>
              
              <div class="tab-pane fade text-white" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                <Qualif/>
              </div>
              
              <div class="tab-pane fade text-white" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                <Career/>
              </div>
            
            </div>
        </div>
      </div>
      {/* <div className="row h-100 align-items-center">
        <div className="col-xs-12 col-sm-8 col-md-6">
            <div className='console-container'>
              <h2 className='text-white display-2'>I am <span className='fw-bold' id='text'></span>
              <div className='console-underscore' id='console'>&#95;</div></h2>
            </div>
            <div className="containner">
              <div data-aos="fade-left" data-aos-delay="2500">
                <h3 className='text-white'>Working in <span className='greenGlow'>MEAN</span> and <span className='greenGlow'>MERN</span> web stack .</h3>
                <div data-aos="flip-up" data-aos-delay="2800" className='h4 text-accent'> Since 2022</div>
              </div>
            </div>
          <div className='text-center text-muted mt-5' data-aos="fade-left" data-aos-delay="3000"> 
            <button className='btnTheme mt-2 text-playfaildisplay' >
              <a href="#Technologies">
            <HiOutlineArrowDown/>
              </a>
            </button>
          </div>
            
        </div>
        <div className="col-xs-12 col-sm-4 col-md-6">
          <div className="imageBox" data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="1500"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out">
          <Lottie className="lottie" options={defaultOptions}
              />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About