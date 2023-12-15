import React from 'react'
import MyForm from './Myform';
import Button from '@mui/material/Button';
export default function ParentC() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
         <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <MyForm open={open} handleClose={handleClose}/>



    </div>
  )
}
