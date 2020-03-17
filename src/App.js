import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Error from './components/Error';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component{

  render(){

    return(

      <React.Fragment>  
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

      </React.Fragment>

    )
  }
}

export default App;