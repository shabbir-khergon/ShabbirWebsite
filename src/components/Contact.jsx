import React from 'react'
import { IoLogoFacebook ,IoLogoTwitter,IoLogoGithub,IoMail,IoLogoLinkedin,IoLogoWhatsapp,IoLogoInstagram} from "react-icons/io5";
import {RiFileDownloadLine} from 'react-icons/ri'
import cv from '../assets/img/ss.jpg'
import pdf from '../assets/ShabbirKhargonCV.doc'

const Contact = () => {

      // Function will execute on click of button
    

  return (
    <div className='container'>
      <div className="row align-items-center">
        <div className="col-12 col-sm-5">
          <div className="smartphone">
            <div className="content">
              <div style={{"width":"100%","border":"none","height":"90%"}} >
              <img src={cv} alt="" />
              <div className="blurContent">
                <div className="blurredpart"></div>
                <div className="resumeBtn">
                  {/* <div className="d-flex">
                  <a href="" className="w-100 mx-1 btn chatbtn">Chat</a>
                  <a href="" className="w-100 mx-1 btn mailbtn">Mail</a>
                  </div> */}
                <a href={pdf} download={'Resume'} className="w-100 btn downbtn"><RiFileDownloadLine fontSize={15}/> Download resume</a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="co-12 col-sm-7">
          <div className="boxTextContact text-center mt-2">
            <div className="mb-5">
            <h3>Don't be shy - <span className='text-accent2'>say hi</span>
            <br /><span className='text-primary'> I'm here for you .</span></h3>
            </div>
            
            <div class="links mt-5">
              <p> Contact Me </p>
              <a href="https://www.facebook.com/shabbir.khargon.9/"><IoLogoFacebook/></a>
              <a href="https://twitter.com/shabbirkhargon1?s=09"><IoLogoTwitter/></a>
              <a href="https://github.com/shabbir-khergon"><IoLogoGithub/></a>
              <a href="mailto:shabbir53khargon@gmail.com"><IoMail/></a>
              <a href="https://www.linkedin.com/in/shabbir-khargon-644820177"><IoLogoLinkedin/></a>
              <a href="https://wa.me/918058909535?text=Hey%20Shabbir!.%20Can%20we%20talk?"><IoLogoWhatsapp/></a>
              <a href="https://instagram.com/shabbirkhergon?igshid=56d2bd2tlcu0"><IoLogoInstagram/></a>
            </div>
          
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact