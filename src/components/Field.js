import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack';
function Field(props) {
  function removeItem(i,data,setData){
    let arr=data;
    arr.splice(i,1)
     setData([...arr])
  }
  return (
    <div className="data_val">
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <Stack>
        <Button onClick={()=>removeItem(props.key,props.data,props.setData)} variant="contained" color="error"><DeleteIcon /></Button>
        </Stack>
    </div>
  )
}

export default Field;
