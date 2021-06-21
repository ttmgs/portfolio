import React from "react";
import "./index.css";
import jQuery from "jquery";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";


function Nav() {
  const location = useLocation();

//menu toggle
function tog(){
  $('.nav-toggle').on("click", function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
  $('.nav-overlay').on("click", function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
// eslint-disable-next-line no-unused-expressions
}(jQuery);




  return(
    <div>

<div class="nav-overlay"></div>

<nav class="navigation">
			<div class="nav-logo"> <Link
            to="/about">
          <a href="/about" alt="about" style={{color: "black", textDecoration: "none"}}>Magdi Tiea</a></Link></div>
			<ul class="nav-menu" onClick={tog}>


				<li> <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
      
      Home</Link></li>
          

			<li> <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
      
      Projects</Link></li>

      </ul>
		</nav>



</div>


  )
};

export default Nav;



