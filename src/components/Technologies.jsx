import React from 'react'
import './Technologies.css'

const Technologies = () => {
  return (

    <section className="container">

        <h2 className='text-center mainhead'>Technologies I work at</h2>

        <div className="text-center technologyBox row">
            <div data-aos="zoom-in" data-aos-duration="2000" className='col-12 col-md-4 cfcard'>
                <h3 className='heading'>Frontend</h3>
            <ul className='listings'>
                <li className='listitem'>Angular</li>
                <li className='listitem'>React</li>
                <li className='listitem'>Bootstrap</li>
                <li className='listitem'>Tailwind CSS</li>
                <li className='listitem'>Chakra UI</li>
                <li className='listitem'>Material UI</li>
                <li className='listitem'>Syncfusion UI</li>
            </ul>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" className='col-12 col-md-4 cfcard'>
            <h3 className='heading'>Backend</h3>
            <ul className='listings'>
                <li className='listitem'>Node JS</li>
                <li className='listitem'>Express JS</li>
                <li className='listitem'>Firebase</li>
                <li className='listitem'>MongoDB</li>
                <li className='listitem'>MySQL</li>
            </ul>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" className='col-12 col-md-4 cfcard'>
            <h3 className='heading'>Extraas</h3>
            <ul className='listings'>
                <li className='listitem'>Git</li>
                <li className='listitem'>VS code</li>
                <li className='listitem'>Figma</li>
            </ul>
            </div>
            
        </div>


    </section>
  )
}

export default Technologies