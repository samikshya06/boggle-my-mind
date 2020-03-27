import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../App.css';
 class About extends Component {
    render() {
        return (
            <div >
              
                   <Grid container spacing={3} className = 'App-header'>
                       <Grid item xs={12}>
                       <Button className="root">Go Back To Home</Button>
                       </Grid>
                   <Grid item xs={12}>
                   About Mind Boggler
                       </Grid>
        <Grid item xs={12}>
                It is a puzzle app. If you are game to get yourselves challenged then 
               go ahead and 
               <Link> register</Link> if already done then start with the challenge by logging in 
               <Link> here</Link> or simply 
               clicking on <Link>start</Link>
               You will be asked few questions or asked to solve some puzzles and in the 
               end when the mind boggler stops boggling everyone it will announce top 3 winners who will win some
               exciting prizes. Don't under estimate yourself go ahead and give it a try.
               </Grid>
               </Grid>
            </div>
        )
    }
}
export default About;
