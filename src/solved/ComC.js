import React,{useContext} from "react";
import { AppState } from "../App";
import { NextState } from "../App";
//we can recive data in nested object format 
function ComC(){
    const data=useContext(AppState)
    const value=useContext(NextState)
    return (
       <>
         <h1>{data.data}</h1>
          <h1>Name: {value.name}</h1>
          <h1>Age: {value.age}</h1>
         
       </>
    )
}
export default ComC;