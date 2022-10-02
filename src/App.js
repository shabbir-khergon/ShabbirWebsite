import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import { useEffect } from 'react';

AOS.init();

function App() {

  var progressBar
  // progressBar && progressBar.style.height = 1 + "%";
  console.log(progressBar)

  useEffect(() => {
    progressBar= document.getElementById("progressbar");
    console.log(progressBar)
    progressBar.style.height = 1 + "%";
  }, [])
  

  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
  
    if (scrolled <= 1) {
      progressBar.style.height = 1 + "%";
    } else if (scrolled >= 2 && scrolled <= 99.5) {
      progressBar.style.height = scrolled + "%";
      progressBar.classList.remove("glowScroll");
    } else if (scrolled > 99.5) {
      progressBar.style.height = scrolled + "%";
      // 		Do something when reached 100% scroll
      progressBar.classList.add("glowScroll");
    }
  };
  


  return (
    <>
   <div class="progress-container d-none">
	<div id="progressbar" class="progress-bar"></div>
</div>
      <Navbar/>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <div  id="Home">
      <Header/>
      </div>
      <div id="About">
      <About/>
      </div>
      <div className="WhiteBox" style={{'rotate':'180deg'}}></div>
      <div id="Technologies">
      <Technologies/>
      </div>
      <div  id="Experience">
      <Experience/>
      </div>
      <div  id="Contact">
      <Contact/>
      </div>
      
        </div>
      <Footer/>
    </>
  );
}

export default App;
