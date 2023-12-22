import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';


export default function DisplayData(props) {
   
    const columns = [
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'firstName', headerName: 'first Name', width: 150 },
        { field: 'lastName', headerName: 'last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'city', headerName: 'city', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const onClick = (e) => {
                  const currentRow = params.row;
                  return alert(JSON.stringify(currentRow, null, 4));
                };

                const Deletrecord= ()=>{
                  
                  const currentRow = params.row;

                  let d = [...props.rows];

                  let Filterdata = d.filter((v)=>{

                    return v.id != currentRow.id;
                  })

                  props.changeArray(Filterdata);
                }

                const EditRecord = ()=>{

                  const currentRow = params.row;

                  props.setId (currentRow.id);

                }
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" onClick={EditRecord} size="small">Edit</Button>
                    <Button variant="outlined" color="error" onClick={Deletrecord} size="small" >Delete</Button>
                  </Stack>
                );
            }
        }
            
        

      ];

  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={props.rows} columns={columns} />
  </div>
  )
}