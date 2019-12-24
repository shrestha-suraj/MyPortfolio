import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Home from './Tabs/Home';
import About from './Tabs/About';
import Projects from './Tabs/Projects';
import Resume from './Tabs/Resume';
import Hobbies from './Tabs/Hobbies';
import Contact from './Tabs/Contact';
import Header from './Common/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <HttpsRedirect>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/hobbies" component={Hobbies}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
      </HttpsRedirect>
      );
  }
}

export default App;
