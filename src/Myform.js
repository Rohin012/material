import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function MyForm(props) {
    const[form,setform]=useState({
        title : "",
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        city:"",
       
    });

    const handleInput=(e)=>{
        setform({...form,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log(form);    
    
    
      }

    

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name='title'
            onChange={handleInput} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="FirstName"
            type="text"
            fullWidth
            variant="standard"
            name='firstName'
            onChange={handleInput} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="LastName"
            type="text"
            fullWidth
            variant="standard"
            name='lastName'
            onChange={handleInput} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name='email'
            onChange={handleInput} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            name="address"
            onChange={handleInput} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            name='city'
            onChange={handleInput} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
  )
}
