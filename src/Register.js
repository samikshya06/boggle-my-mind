import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
export default class Register extends Component {
    render() {
        return (
            <div>
                
                <Grid item xs={6}>
                <h1>Register:</h1>
                <FormLabel>Firstname</FormLabel>

                <Input></Input>
                </Grid>
                <Grid item xs={6}>
                <FormLabel>Lastname</FormLabel>
                <Input></Input><br/>
                </Grid>
                <Grid item xs={6}>
                <FormLabel>Email</FormLabel>
                <Input></Input>
                </Grid>
                <Grid item xs={6}>
                <Button className="root">Submit</Button>
                </Grid>
            </div>
        )
    }
}
