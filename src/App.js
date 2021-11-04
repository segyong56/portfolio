import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Nav from './pages/Nav';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/project" component={Project} exact />
        <Route path="/contact" component={Contact} exact />
        
      </div>
    </Router>
  );
}

export default App;
