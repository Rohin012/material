import React from 'react';
import { useState } from 'react';
import MyForm from './Myform';
import Button from '@mui/material/Button';
import DisplayData from './DisplayData';
export default function ParentC() {
    const [open, setOpen] = React.useState(false);
    const [data,setData]= useState([]);

    const[id,setId]=useState(0)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const edited = (id)=>{
      setId(id);
      setOpen(true);


    }

  return (
    <div>
         <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <MyForm open={open} handleClose={handleClose}
         arraydata = {data}
        arraysetData={setData}
        id={id}
        setId={setId}
      />
<DisplayData rows={data} changeArray={setData} setId={edited}/>



    </div>
  )
}
