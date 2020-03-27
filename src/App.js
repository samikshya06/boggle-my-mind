import logo from './thinkme.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBar } from '@material-ui/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Prompt } from 'react-router-dom';
import About from './components/About';
import Begin from './components/Begin';
import Register from './components/Register';

class App extends Component {
  // const classes = useStyles();

  state = {
    loggedIn: false
  }

  logginHandle = () => {
 this.setState(prevState => ({
   loggedIn: !prevState.loggedIn
 }))
  }
  render() {
  return (
    <Router>
    <div className="App">

    <Route exact path='/begin/:username' component={Begin}/>
    <Route exact path='/components/register' component={Register}/>
      <Route exact path='/components/about' component={About}/>
        <Route exact path='/' render={
        () => {
          return ( 
            <div>   
              <AppBar class="App-bar">  Welcome to Mind Boggler</AppBar>
               {/* <Paper> <h1>
           
            </h1></Paper> */}
          <Grid container spacing={10}>
         
    
            <Grid item xs={3}>
         <ul>
        <Link to="/about">About
         </Link>
        
         <Link to="/begin">Begin</Link>
       
         <Link to="/register">Register</Link>
        
         <Link to="/begin">Login</Link>
      
         </ul>
         <input type="button" className="root" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.logginHandle.bind(this)}/>
         <Prompt when={!this.state.loggedIn}
         message = "Are you sure?"
         ></Prompt>
            </Grid>
            <Grid item xs={6}>
             <img src={logo} className="App-logo" alt="logo" />
            </Grid>
          
         
          </Grid>
          </div>
         )
        }
      } />
    </div>
    {/* <Switch>
    <Route exact path='/about' component={About} />
    </Switch> */}
    </Router>
  );
}
}

 export default App;
