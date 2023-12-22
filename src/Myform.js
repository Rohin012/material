import React, { useEffect } from 'react'
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

    useEffect(()=>{
      if(props.id){

      let p = props.arraydata.find((value)=>{

          return value.id == props.id;

      })

      setform(p)
    }
    },[])

    const handleInput=(e)=>{

        setform({...form,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>{

      props.handleClose();

      let d = [...props.arraydata];

      if(props.id > 0)
      {
        let p = d.map((value)=>{

          if( value.id==props.id)
          {

            return {...form,id:value.id}
          }
          else
          {
            return value;
          }
         })
             props.arraysetData(p);
          }
          else
          {

      d.push({...form,id: d.length +1});

      props.arraysetData(d);

      }
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
            value={form.title}
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
            value={form.firstName}
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
            value={form.lastName}
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
            value={form.email}
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
            value={form.address}
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
            value={form.city}
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
