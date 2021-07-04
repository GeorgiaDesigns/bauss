import React from 'react';

const MainSection = ({}) => {
    return (
    <section className="title"> 
        <div className="container">
        <h2> It’s not just clothes, it’s an experience.</h2>
<svg width="356.41mm" height="65.412mm" version="1.1" viewBox="0 0 356.41 65.412" 
xmlns="http://www.w3.org/2000/svg">
  <path d="m-90.76 125.19c66.178-13.398 89.184 13.903 122.74 30.886 52.028 33.843 88.305 37.852 136.28 21.011 30.287-12.569 59.886-21.958 97.332-28.196" fill="none" stroke="#000" stroke-width=".26458px"/>
</svg>

         <ul className="bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 330" >
        <path id="MyPath" fill="#C79378" fillOpacity="1" d="M0,32L48,26.7C96,21,192,11,288,42.7C384,75,480,149,576,202.7C672,256,768,288,864,282.7C960,277,1056,235,1152,202.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
              <feColorMatrix in="name" mode="matrix" values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 30 -15"/>
              <feBlend in="SourceGraphic"/>
            </filter>
          </defs>
          <text>
            <textPath href="#MyPath">
            </textPath>
          </text>

        </svg>
          </div>        
              <style jsx>{`
              section{
                text-align: center;
                height: 100vh;
              }
              
              .title h2{
                  font-size: 60px;
                  -webkit-text-stroke-width: 2px;
                  -webkit-text-stroke-color: #d69f83;        
                  color: #bdc8b6fd;
                  z-index:1;   
                  margin: 0;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  font-family:'mount-hills';
                  -ms-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
              }   

              .title svg{
                display: block;
                position: absolute;
                bottom: -10px;
                z-index: 0;
              } 
              
              .container{
                width: 100%;
                height:100%;
                position: relative;
                filter: url(#goo);  
              }
              
                           
              .bubbles {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width:90%;
                  height:100%;
                  z-index: 2;
                  -webkit-transform: translateZ(0);
                  transform: translateZ(0);
              }
              
              .bubbles li {
                  position: absolute;
                  list-style: none;
                  display: block;
                  background-color: #C79378;
                  bottom: -5px;
                  -webkit-animation: circle 15s infinite;
                  animation: circle 15s infinite;
                  -webkit-transition-timing-function: linear;
                  transition-timing-function: linear;
              }
              
              .bubbles li:nth-child(1) {
                  width: 40px;
                  height: 40px;
                  border-radius: 40px;
                  left: 20%;
              }
              .bubbles li:nth-child(2) {
                  width: 60px;
                  height: 60px;
                  left: 40%;
                  border-radius: 60px;
                  -webkit-animation-delay: 1s;
                  animation-delay: 1s;
                  -webkit-animation-duration: 17s;
                  animation-duration: 17s;
              }
              
              .bubbles li:nth-child(3) {
                  width: 10px;
                  height: 10px;
                  left: 60%;
                  border-radius: 10px;
                  -webkit-animation-delay: 4s;
                  animation-delay: 4s;
                  -webkit-animation-duration: 13s;
                  animation-duration: 13s;
              }
              
              .bubbles li:nth-child(4) {
                  width: 80px;
                  height: 80px;
                  left: 20%;
                  border-radius: 80px;
                  -webkit-animation-delay: 3s;
                  animation-delay: 3s;
                  -webkit-animation-duration: 22s;
                  animation-duration: 22s;
              }
              
              .bubbles li:nth-child(5) {
                  width: 50px;
                  height: 50px;
                  left: 5%;
                  border-radius: 50px;
                  -webkit-animation-delay: 5s;
                  animation-delay: 5s;
                  -webkit-animation-duration: 12s;
                  animation-duration: 12s;
              }
              
              .bubbles li:nth-child(6) {
                  width: 99px;
                  height: 99px;
                  left: 70%;
                  border-radius: 70px;
                  -webkit-animation-delay: 5s;
                  animation-delay: 5s;
                  -webkit-animation-duration: 29s;
                  animation-duration: 29s;
              }
              
              .bubbles li:nth-child(7) {
                  width: 40px;
                  height: 40px;
                  left: 40%;
                  border-radius: 40px;
                  -webkit-animation-delay: 2s;
                  animation-delay: 2s;
                  -webkit-animation-duration: 16s;
                  animation-duration: 16s;
              }
              @-webkit-keyframes circle {
                0% {
                    -webkit-transform: translateY(0);
                    transform: translateY(0);
                }
                100% {
                    -webkit-transform: translateY(-1080px) rotate(630deg);
                    transform: translateY(-1080px) rotate(630deg);
                }
            }
            
            @keyframes circle {
              0% {
                  -webkit-transform: translateY(0);
                  transform: translateY(0);
              }
              100% {
                  -webkit-transform: translateY(-1080px) rotate(630deg);
                  transform: translateY(-1080px) rotate(630deg);
              }
            }
            
              `}</style>
        </section>
        
    );
};

export default MainSection;