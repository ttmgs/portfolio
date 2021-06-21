import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/pages/About';
import Nav from './components/Nav/index'
import Projects from './components/pages/Projects/index'
function App() {
  return (
  
<Router>      
  <div>
<Nav />
<Route exact path="/about" component={About}  />
<Route exact path="/projects" component={Projects}  />

</div>
</Router>


  );
}

export default App;
