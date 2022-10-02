import React from 'react'
import '../Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import angular from '../../assets/img/angular.png'
import es6 from '../../assets/img/es6.png'
import express from '../../assets/img/express.png'
import node from '../../assets/img/node.svg'
import mongodb from '../../assets/img/mongodb.svg'
import react from '../../assets/img/react.svg'
import typescript from '../../assets/img/typescript.png'


const Skills = () => {

    const dataArr=[
        {name:"Angular",
        img:angular,
        text:'Angular is a development platform, built on TypeScript. Angular provides a component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a variety of features, like routing, forms, client-server communication, and more .',
        link:'https://angular.io/'},
    
        {name:"EcmaScript 6",
        img:es6,
        text:'Having a single conducive declarative pattern makes class patterns painless thing to use and boosts interoperability in ES6. Inheritance, instance and static methods are supported by Classes which makes ES6 more amiable version of Javascript.',
        link:'https://www.w3schools.com/js/js_es6.asp'},
        
        {name:"Express.JS",
        img:express,
        text:'Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It\'s a layer built on the top of the Node js that helps manage servers and routes',
        link:'https://expressjs.com/'},
    
        {name:"Node.JS",
        img:node,
        text:'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It\'s used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.',
        link:'https://nodejs.org/en/docs/guides/getting-started-guide/'},
        
        {name:"MongoDB",
        img:mongodb,
        text:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
        link:'https://www.mongodb.com/cloud'},
        
        {name:"React",
        img:react,
        text:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
        link:'https://reactjs.org/docs/getting-started.htm'},
        
        {name:"Typescript",
        img:typescript,
        text:'TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. ',
        link:'https://www.typescriptlang.org/'},
      ]

      const stringPipe = (string, limit) => {
        var transformedString =
          string?.length > limit ? string.substring(0, limit - 3) + "..." : string;
        return transformedString;
      };
  return (
    <div class="p-2">
        <h4 className='h5 text-dosis text-center'>I am skilled in some of the top trending JavaScript Frameworks and Libraries used in modern web development </h4>
        <div>
            <div class="container-fluid">
                <div className="row">
                    {dataArr?.map((data)=>(
                        <div className="col-12 col-sm-3 col-md-3 text-center">
                            <div className="card">
                                <img src={data?.img} alt="" />
                                <h5>{data?.name}</h5>
                                <a href={data?.link} className="btn">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills