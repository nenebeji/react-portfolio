import React from 'react';
import TradrImage from '../../assets/images/tradr.png'
import MovieMadness from '../../assets/images/MovieMadness.png';
import TeamWebpage from '../../assets/images/TeamWebpage.png';
import Letsquiz from '../../assets/images/Letsquiz.png';
import TruWeather from '../../assets/images/TRUweather.png';
import RobotechImage from '../../assets/images/blogimage.png';

export default function Work() {
  return (
    <div id="work">
    <h1 id="worktitle" style={{color: 'antiquewhite'}}>Here's What I've Built</h1>
    <div className="container">
      {/* <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-7 order-2 order-md-1 order-lg-1" style={{marginRight: '-5%'}}>
          <a href="https://calm-gorge-52770.herokuapp.com" target="_blank" rel='noreferrer noopener'><div id="tradr" className="gallery"></div></a>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-6 order-1 order-md-2 order-lg-2 allcards">
          <div id="tradrinfo" className="info">
            <div className="card text-bg-warning mb-3 cardtxt" style={{minWidth: '500px'}}>
              <div className="card-body">
                <h5 className="card-title">Tradr Marketplace</h5>
                <p className="card-text">First full-stack developed application. 
                  This is an open-source marketplace app that allows the user to register, buy and sell products.
                </p>
                <p className="card-text">Built using HTML5, Handelbars.js, CSS3, Javascript, Bootstrap, Node.js, Express, MySQL,
                  Sequelize, Prettier, Bcrypt, dotenv and more.
                </p>
              </div>
              <div className="cardlink">
                <a href="https://github.com/nenebeji/tradr-marketplace" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                <a href="https://calm-gorge-52770.herokuapp.com" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
        {/* <!-- Tradr --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={TradrImage} alt="TradrImage" style={{width: '500px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">Tradr Marketplace</h5>
                  <p className="card-text">First full-stack developed application. 
                  This is an open-source marketplace app that allows the user to register, buy and sell products.</p>
                  <p className="card-text">Built using HTML5, Handelbars.js, CSS3, Javascript, Bootstrap, Node.js, Express, MySQL,
                  Sequelize, Prettier, Bcrypt, dotenv and more.</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href="https://github.com/nenebeji/tradr-marketplace" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://calm-gorge-52770.herokuapp.com" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Movie Madness card --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={MovieMadness} alt="MovieMadness" style={{width: '500px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">Movie Madness</h5>
                  <p className="card-text">This application allows the user to view movies and series details including the ratings and trailer.</p>
                  <p className="card-text">Built using HTML5, CSS3, Javascript, Semantic UI, JQuery, OMDB API, YouTube API and Media query.</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href="https://github.com/nenebeji/Movie-Madness" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://nenebeji.github.io/Movie-Madness/" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- RoboTech Blog --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={RobotechImage} alt="RobotechImage" style={{width: '500px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">RoboTech Blog</h5>
                  <p className="card-text">This is a CMS style blog post full stack application that allows a user to publish articles, blog post, view and comment on previous posts, and publish their thoughts and opinion.</p>
                  <p className="card-text">Built using HTML5, Handelbars.js, CSS3, Javascript, Bootstrap, Node.js, Express, MySQL,
                  Sequelize, Prettier, Bcrypt, dotenv and more.</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href=" https://github.com/nenebeji/RoboTech-Blog" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://robotech-blog.herokuapp.com" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Build A Team Card --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={TeamWebpage} alt="Teamwebpage" style={{width: '500px', height: '300px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">Build A Team</h5>
                  <p className="card-text">This is a Node.Js command-line application that takes in information about employees in a team and generates a HTML webpage with a summary of this information. 
                    It also uses jest to test every part of the code.
                  </p>
                  <p className="card-text">Built using Javascript, Node.JS, Inquirer Package and Jest.</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href="https://github.com/nenebeji/Build-A-Team" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://drive.google.com/file/d/1BT8z1mEnRm6Zc2BYJBFiq5cR0VHRABCS/view?usp=sharing" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Let's Quiz Card --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={Letsquiz} alt="Letsquiz" style={{width: '500px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">Let's Quiz</h5>
                  <p className="card-text">This is a short timed quiz application with extra 20s penalty for wrong answers.</p>
                  <p className="card-text">Built using HTML5, CSS3 and Javascript.</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href="https://github.com/nenebeji/Lets_quiz" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://nenebeji.github.io/Lets_quiz/" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  TruWeather card --> */}
        <div className="col-9 col-sm-6 allcards">
          <div className="flip-card">
            <div id="movieinfo" className="info flip-card-inner">
              <div className="flip-card-front"><img src={TruWeather} alt="TruWeather" style={{width: '500px'}}></img></div>
              <div className="card text-bg-warning mb-3 cardtxt flip-card-back" style={{minWidth: '500px'}}>
                <div className="card-body">
                  <h5 className="card-title">TRUweathEr</h5>
                  <p className="card-text">This is an application that allows the user to view the weather by city search.</p>
                  <p className="card-text">It was built using HTML5, CSS3, Javascript, JQuery, Bootstrap and Openweather API</p>
                </div>
                <div className="cardlink" style={{marginBottom: '2%'}}>
                  <a href="https://github.com/nenebeji/TRUweathEr" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-brands fa-github" style={{fontSize: '1.6rem'}}></i></a>
                  <a href="https://nenebeji.github.io/TRUweathEr/" target="_blank" style={{marginRight: '3%'}} rel='noreferrer noopener'><i className="fa-solid fa-link" style={{marginRight: '3%', fontSize: '1.6rem'}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
