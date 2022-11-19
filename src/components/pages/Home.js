import React from 'react';
import globe from '../../assets/images/earth.png'

export default function Home() {
  return (
    <div id="homecont">
    <div className="container globecontainer">
      <div className="globe">
        <img src={globe} alt="globe" className="globeimage" style={{width:' 400px' , margin: '4% 0% 0% 0%', opacity: '0.7'}}>
        </img> 
      </div>
    </div>
    <div className="welcome">
      <div className="row" id="welcomelinks" style={{width: '100%'}}>
        <div id="socials">
          <a href="https://github.com/nenebeji" id="github" target="_blank" rel='noreferrer noopener'><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/oritsegidenenebeji/" id="linkedin" target="_blank" rel='noreferrer noopener'><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="row" id="welcometextinfo">
          <h2 id="welcometext">Welcome to Nene's World</h2>
          <div className="row shortintro">
            <p>Hello, my name is Oritsegidenene Beji but feel free to call me Nene.</p>
            <p>I'm a Full Stack Web Developer with a background in Chemical Engineering, where I worked for about 3 years.</p>
            <p>Looking to discover new experiences by joining the Tech industry.</p>
            <div className="gettoknowcont">
              <a href="#aboutme" className="btn" id="gettoknow">Get to Know Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
