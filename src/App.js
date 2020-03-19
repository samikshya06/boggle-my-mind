import logo from './thinkme.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Prompt } from 'react-router-dom';
import About from './About';
import Begin from './Begin';
import Register from './Register';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// const useStyles = makeStyles(theme=>({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

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
    <Route exact path='/register' component={Register}/>
      <Route exact path='/about' component={About}/>
        <Route exact path='/' render={
        () => {
          return ( 
             <header className="App-header">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper> <h1>
             Welcome to Mind Boggler
            </h1></Paper>
            </Grid>
    
            <Grid item xs={3}>
              {/* <ul>
                <li><Link to="/about">ABout</Link></li>
                <li><Link to="/begin">Begin</Link></li>
                </ul> */}
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
            {/* <Grid item xs={3}>
              <Button className="root">Register</Button>
              <br></br>
              <br></br>
              <Button className="root">Login</Button>
              <br>
              </br>
              <br></br>
              <Button className="root">Begin</Button>
            </Grid> */}
         
          </Grid>
          </header>)
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
