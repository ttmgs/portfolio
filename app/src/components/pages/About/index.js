import React from "react";
import "./index.css";
import logo from "../../Images/cropme.png";
import grad from "../../Images/grad.png";
import react from "../../Images/react.png";
import nodejs from "../../Images/node.png";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import jquery from "../../Images/jquery.png";
import upei from "../../Images/upei.png";
import mom from "../../Images/8.png";
import me from "../../Images/me.png";
import mongo from "../../Images/mongo.png";
import resume from "../../Images/resume.PDF";
import EJS from "../../Images/EJS.png";




function About() {

  return (
    <div>
      <div className="topContainer">
        <div id="name">
          <img
            src={logo}
            alt="me"
            style={{ width: "250px", height: "250px" }}
          ></img>
          <br></br>
          <h1>Magdi Tiea</h1>
          <br></br>
          <p id="job">Full-Stack Website Developer from Windsor, ON</p>

        </div>
      </div>
      <br></br>
      <div id="contactme" style={{textAlign: "center"}}>
      <p style={{fontSize: "20px"}}>Email : magditiea@gmail.com <em>(preffered)</em></p>
      <br></br>
<p style={{fontSize: "20px"}}>Phone-Number : (226)- 759- 5872</p>
<br></br>
<a class="btn line-btn-dark btn-icon btn-radius" href={resume} title="" download><button id="buttonone" style={{textAlign: "center"}}>click to download resume</button></a>
</div>
      <br></br>
      <br></br>
      <br></br>

      <div class="middle-container">
        <div id="picbox">
          <div id="pics">
            <img
              src={grad}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={upei}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={mom}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={me}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="profile">
          <p style={{ fontFamily: "monospace", fontSize: "20px" }}>
            <strong>
         One of my best traits is my willingness to learn and adapt to any environment. Aside from my programming capabilities, I am a hard working individual
            </strong>
          </p>
          
        </div>
        <hr></hr>
        <br></br>
        <div class="skill-row" style={{ marginTop: "20px" }}>
          <h2>Technologies I use</h2>
          <br></br>
          <div
            id="programs"
            style={{ display: "inline-flex", fontSize: "15px" }}
          >
            
            <div id="EJS" style={{ fontSize: "15px", marginRight: "15px" }}>
              <img
                src={EJS}
                alt="EJS"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>EJS</p>
            </div>

            <div id="react" style={{marginRight: "15px" }}>
              <img
                src={react}
                alt="react"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <p>React</p>
            </div>

            <div id="nodejs" style={{marginRight: "15px" }}>
              <img
                src={nodejs}
                alt="node"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>NodeJS</p>
            </div>

            <div id="html" style={{marginRight: "15px" }}>
              <img
                src={html}
                alt="node"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>HTML5</p>
            </div>

            <div id="css" style={{ fontSize: "15px", marginRight: "15px" }}>
              <img
                src={css}
                alt="css"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>CSS</p>
            </div>

            <div id="jquery" style={{marginRight: "15px" }}>
              <img
                src={jquery}
                alt="jquery"
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "5px",
                  fontSize: "15px",
                  marginRight: "15px",
                }}
              ></img>
              <p>JQuery</p>
            </div>
        
            <div id="mongo" style={{ fontSize: "15px", marginRight: "15px" }}>
              <img
                src={mongo}
                alt="mongo"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>mongoDB</p>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
};

export default About;
