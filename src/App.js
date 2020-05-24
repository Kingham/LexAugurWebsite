import React from 'react';
import Nav from './Components/Nav';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Studio from './Studio';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="main">
        <div className="container">
          <Nav />
        </div>
      </header>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/studio" component={Studio} />
        </Switch>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
    
//   </div>
// );

export default App;
