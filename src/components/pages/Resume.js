import React from "react";

export default function Resume () {
    return (
        <div>
     <div class="row" style={{margin: '5%'}}>
        <div class="col-9 col-sm-6 resumecards">
            <div id="Frontend" class="info">
                <div class="card text-bg mb-3 cardtxt" style={{minWidth: '500px'}}>
                  <div class="card-body">
                    <h5 class="card-title">Front-end Proficiencies <i class="fa-solid fa-user" style={{marginLeft: '5%'}}></i></h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text">
                                HTML
                            </p>
                            <p class="card-text">
                                CSS
                            </p>
                            <p class="card-text">
                                JavaScript
                            </p>
                            <p class="card-text">
                                JQuery
                            </p>
                            <p class="card-text">
                                React
                            </p>
                            <p class="card-text">
                                Bootstrap
                            </p>
                            <p class="card-text">
                                Responsive Design
                            </p>
                        </div>
                        <div class="col brands">
                            <p><i class="fa-brands fa-html5"></i></p>
                            <p><i class="fa-brands fa-css3-alt"></i></p>
                            <p><i class="fa-brands fa-js"></i></p>
                            <p><i class="fa-brands fa-react"></i></p>
                            <p><i class="fa-brands fa-bootstrap"></i></p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-9 col-sm-6 resumecards">
            <div id="backend" class="info">
                <div class="card text-bg mb-3 cardtxt" style={{minWidth: '500px'}}>
                  <div class="card-body" style={{margin: '4%'}}>
                    <h5 class="card-title">Back-end Proficiencies<i class="fa-solid fa-server" style={{marginLeft: '5%'}}></i></h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text">
                                APIs
                            </p>
                            <p class="card-text">
                                NodeJS
                            </p>
                            <p class="card-text">
                                Express
                            </p>
                            <p class="card-text">
                                MySQL, Sequelize
                            </p>
                            <p class="card-text">
                                MongoDB, Mongoose
                            </p>
                            <p class="card-text">
                                REST
                            </p>
                            <p class="card-text">
                                GraphQL
                            </p>
                        </div>
                        <div class="col brands">
                            <p><i class="fa-brands fa-node"></i></p>
                            <p><i class="fa-solid fa-database"></i></p>
                            <p><i class="fa-solid fa-code-branch"></i></p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div class="viewresume">
        <a href="https://drive.google.com/file/d/1JRsjO46ChfC6Kqya4EV1nQFmjhoDj2GN/view?usp=sharing" class="btn" id="viewresume" target="_blank" rel='noreferrer noopener'>View Resume</a>
      </div>
     </div>
    )
}