import React, { useState } from 'react'
import MyChild from './MyChild';

export default function MyParent() {

  console.log("this is parent")

  const [data,setData]= useState([]);

  const [input,setInput]= useState('');

  const display = ()=>{

    let d = [...data];
    d.push(input);
    setData(d);
   
  }

  const d= React.useCallback(()=>{

  },[])

  const handleChange = (e)=>{

    setInput(e.target.value);

  }

  return (
    <div>
      <input type='text' name="firstName" 
      onChange={handleChange}/>
      <button onClick={display}>D</button>
      
      <MyChild p={d}/>
    </div>
  )
}
