import React, { useEffect } from 'react'

const Me = () => {

    useEffect(() => {
        consoleText(['Developer', 'Designer', 'Artist'], 'text',['#A4DDED','#002147','#1ca9c9']);
      }, [])
      
      // function([string1, string2],target id,[color1,color2])    
    
     function consoleText(words, id, colors) {
       if (colors === undefined) colors = ['#fff'];
       var visible = true;
       var con = document.getElementById('console');
       var letterCount = 1;
       var x = 1;
       var waiting = false;
       var target = document.getElementById(id)
       target.setAttribute('style', 'color:' + colors[0])
       window.setInterval(function() {
     
         if (letterCount === 0 && waiting === false) {
           waiting = true;
           target.innerHTML = words[0].substring(0, letterCount)
           window.setTimeout(function() {
             var usedColor = colors.shift();
             colors.push(usedColor);
             var usedWord = words.shift();
             words.push(usedWord);
             x = 1;
             target.setAttribute('style', 'color:' + colors[0])
             letterCount += x;
             waiting = false;
           }, 1000)
         } else if (letterCount === words[0].length + 1 && waiting === false) {
           waiting = true;
           window.setTimeout(function() {
             x = -1;
             letterCount += x;
             waiting = false;
           }, 1000)
         } else if (waiting === false) {
           target.innerHTML = words[0].substring(0, letterCount)
           letterCount += x;
         }
       }, 150)
       window.setInterval(function() {
         if (visible === true) {
           con.className = 'console-underscore hidden'
           visible = false;
     
         } else {
           con.className = 'console-underscore'
           visible = true;
         }
       }, 500)
     }

  return (
    <div className='px-1'>
        <div className='console-container text-lato'>
            <h3 className='text-font'>Hey !</h3>
            <h4 className=''>Nice to see you here !!</h4>
            <h4 className='text-white display-6'>I am a <span className='fw-bold text-pacifico' id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div></h4>
        </div>
        <div className=''>
            <h4 >Working in <span className='text-green fw-bold'>MEAN</span> and <span className='text-green fw-bold'>MERN</span> stack development</h4>
        </div>
    </div>
  )
}

export default Me