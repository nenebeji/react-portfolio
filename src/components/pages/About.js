import React from 'react';
import bioImage from '../../assets/images/bio.jpg';
export default function About() {
  return (
    <div id="aboutme">
    <div className="container text-center">
      <div className="row" style={{margin: "20% 5% 2% 5%"}}>
        <div className="col-lg-8 col-md-7 col-sm-7 order-2 order-sm-1" style={{color: "white", border: "solid #04d9ff", minWidth: "50%"}}>
          <div id="aboutsection" style={{padding: "5%"}}>
            <h1 id="abouttitle"><span className="yellow">A</span>bout Me</h1>
            <div id="aboutinfo">
              <p>
                Hi! My name is Oritsegidenene Beji pronounce O-ri-she-gi-de-ne-ne but everyone calls me <span className="bold">Nene</span> for short. 
                My interest in web developement started back in 2020 when the pandemic hit and everyone was forced to stay at home. 
                I'd always loved video games and the idea of building something through code and watching it come to life. 
                I also loved the flexibilty of it and the ability to still be able to make a living from anywhere, employed or unemployed.
              </p>
              <p>
                Fast-forward to March of 2022, I decided to speak to people in the IT industry to figure out a way to transition from Chemical Engineering to Web development.
                I enrolled  in a 24 week instensive programme at the University of Birmingham. Focused on gaining technical programming skills in: 
                <div className="row" id="skills">
                  <ul className="col yellow">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                  </ul>
                  <ul className="col yellow">
                    <li>Bootstrap</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                  </ul>
                  <ul className="col yellow">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Handelbars.js</li>
                    <li>ReactJS</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 order-1 order-sm-2" style={{color: "white"}}>
          <div className="bioimage">
            <img src={bioImage} alt="Nene Beji" id="nene" style={{width: "300px", margin: "10% 0% 5% 0%"}}>
            </img>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
