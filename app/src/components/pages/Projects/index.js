import React from "react";
import './index.css';
// import newsletter from "../images/newsletter.png";
import pokemon from '../../Images/pokemon.png';
import password from  '../../Images/password.png';
import planner from '../../Images/planner.png';
import search from '../../Images/search.png';
import simon from '../../Images/simon.png';
import lizzy from '../../Images/lizzy.png';


function Projects(){


  return (
    <div>
        <div class="container" style={{paddingTop: "30px"}}>
          <div class="row" style={{ float: "left" }}>
            <div class="col">
              <img
                src={pokemon}
                alt="newsletter"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Pokemon STAY </h4>{" "}
                <span>
                  <a href="https://group4-project2.herokuapp.com/" alt="stay">
                    <button style={{ color: "white", backgroundColor: "blue" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}
                <span>
                  <a href="https://github.com/kirsralk/Group4-Project2" alt="stay">
                    <button style={{ color: "white", backgroundColor: "red" }}>
                      more details
                    </button>
                  </a>
                </span>{" "}
              <p>
                <strong>Technologies Used:</strong> MySQL, Node.js, Express,
                Sequelize and Handlebars
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}>
               This application combines MySQL database
                and Pokemon together. Many more implementaions to come in the future!
              </p>
            </div>


            <div class="col">
              <img
                src={planner}
                alt="planner"
                style={{ width: "450px", height: "250px", paddingTop:"10px" }}
              ></img>{" "}
              <h4>
                My Travel Planner </h4>{" "}
                <span>
                  <a
                    href="https://mich3ll3e.github.io/My-travel-planner-app/"
                    alt="planner"
                  >
                    <button style={{ color: "white", backgroundColor: "blue" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}
                <span>
                  <a
                    href="https://github.com/mich3ll3e/My-travel-planner-app"
                  >
                    <button style={{ color: "white", backgroundColor: "red" }}>
                      more details
                    </button>
                  </a>
                </span>
              <p>
                <strong>Technologies Used:</strong> Javascript, HTML and CSS
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}> My Travel Planner allows you to
                plan the most important aspects of your trips in a centralized
                location.
              </p>
            </div>
          </div>


          <div class="row" style={{paddingTop: "20px"}}>
            <div class="col">
              <img
                src={password}
                alt="password"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Password Generator </h4>{" "}
                <span>
                  <a
                    href="https://ttmgs.github.io/Password-Generator/"
                    alt="password"
                  >
                    <button
                      style={{ color: "white", backgroundColor: "purple" }}
                    >
                      view application
                    </button>
                  </a>
                </span>{" "}
                <span>
                  <a
                    href="https://github.com/ttmgs/Password-Generator"
                    alt="password"
                  >
                    <button
                      style={{ color: "white", backgroundColor: "red" }}
                    >
                      more details
                    </button>
                  </a>
                </span>
              <p>
                <strong>Technologies Used:</strong> Javascript, CSS and HTML
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}>
               Choose between 3 character types
                and this app will generate a random password for you
              </p>
            </div>


            <div className="col" style={{paddingTop: "20px"}}>
              <img
                src={search}
                alt="newsletter"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Live Search Employee Directory </h4>{" "}
                <span>
                  <a
                    href="https://ttmgs.github.io/User-Directory/"
                    alt="search"
                  >
                    <button style={{ backgroundColor: "orange" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}
                <span>
                  <a
                    href="https://github.com/ttmgs/User-Directory"
                    alt="search"
                  >
                    <button style={{ backgroundColor: "red", color: "white" }}>
                      more details
                    </button>
                  </a>
                </span>
              <p>
                <strong>Technologies Used: </strong>Node.js, React, JQuery and
                CSS
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}>
              This live search allows you to
                type in a name and as you type letter by letter the employee
                information related to the name you searched will apear.{" "}
              </p>
            </div>
          </div>

          <div class="row">
            <div className="col">
              <img
                src={simon}
                alt="newsletter"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Simon Game </h4>{" "}
                <span>
                  <a href="https://ttmgs.github.io/Simon-Game/" alt="simon">
                    <button style={{ backgroundColor: "yellow" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}
                <span>
                  <a href="https://github.com/ttmgs/Simon-Game" alt="simon">
                    <button style={{ backgroundColor: "red", color: "white" }}>
                      more details
                    </button>
                  </a>
                </span>
              <p>
                <strong>Technologies Used: </strong>HTML, CSS and Javascript
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}>
               This app is a memory game which
                you have to memorize the colors that are randomly assigned to
                you. Choose the wrong color and its Game over!
              </p>
            </div>


            <div className="col">
              <img
                src={lizzy}
                alt="newsletter"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Model Website </h4>{" "}
                <span>
                  <a
                    href="https://ttmgs.github.io/Lizzy-g-portfolio/"
                    alt="simon"
                  >
                    <button style={{ backgroundColor: "blue", color: "white" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}

                <span>
                  <a
                    href="https://github.com/ttmgs/Lizzy-g-portfolio"
                    alt="simon"
                  >
                    <button style={{ backgroundColor: "red", color: "white" }}>
                      more details
                    </button>
                  </a>
                </span>
              <p>
                <strong>Technologies Used: </strong>HTML and CSS
              </p>
              <br></br>
              <p style={{fontFamily: "serif"}}>
               This website is the very first
                website i created for a client. Simple model website with
                pictures & information
              </p>
            </div>
          </div>
        </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Projects;
