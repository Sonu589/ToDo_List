// import './App.css';
// import React from "react";
// //routing -> different 2 functionalities ke liye different pages chaiye hote hai, components ko pages main convert karna , or 1 specific url par open karna 
// import {BrowserRouter as
//   Router,
//   Link,
//   Route,
// } from "react-router-dom"
// function App() {
//   return (
//     <div className="App">
//        <Router>
          
//           <Link to="/home">Home</Link>
//           <Link to="/about">About</Link>
//           <Route path="/home"><Home /></Route>
//           <Route path="/about"><About /></Route>
         
//        </Router>
//     </div>
//   );
// }
// function Home(){
//   return (
//     <div className="App">
//        <h1>Hello Home</h1>
//        <p>This is our home page</p>
//     </div>
//   )
// }
// function About(){
//   return (
//     <div className="App">
//       <h1>About Page</h1>
//       <p>This is our About Page</p>
//     </div>
//   )
// }
// export default App;

//api -> AppLication Programming Interface
//Jab data show karva hota hai -> get Method
//jab database main store karvana hota hai -> post method
//jab update karvana hota hai -> put method  
//jab delete karan hota hai -> delete

// import React,{useEffect,useState} from "react"
// function App(){
//   //jab bhi api call karnu hoti fetch methoad use
//   //directly not call , call in useEffect
//   // fetch("url").then((result)=>{
//   //   result.json().then((resp)=>{
//   //     console.log("Result",resp)
//   //   })
//   // })
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//       fetch("url").then((result)=>{
//          result.json().then((resp)=>{
//              console.log("result",resp);
//              setData(resp);
//          })
//       })
//   },[]) //taki ek baar hi chaale isliye blank array pass karte hai
//   console.log(data);
//   //return sa phele print karvana hai
//   return (
//     <div>
//        <h1>Hello</h1>
//     </div>
//   )
// }
// export default App;

//Post Method with Api

// import React from "react";
// function App(){
//   return (
//     <div>
//        <h1> Post Api Example</h1>
//        <input type="text" name="name"/> <br></br>
//        <input type="text" name="name"/> <br></br>
//        <input type="text" name="name" /> <br></br>
//        <button type="button">Save New User</button>
//     </div>
//   )
// }
// export default App;


//movies app with help of props
// import React from "react";
// import "./App.css"
// import Header from "./components/Header"
// import Movies from "./movie.json";
// import Movie from "./components/Movie"
// function App(){
//   // let login=true;
//    return(
//     <div className="App">

//       {/* {
//         (()=>{
//            if(login){
//             return <h1 style={{color:"black"}}>Hello world</h1>
//            }
//            else{
//             return <h1 style={{color:"black"}}>Good Work</h1>
//            }
//         })()
//       } */}
//       <Header/>
//       <div className="main">
//          {
//           Movies.map((e,i)=>{
//               return (
//               <Movie key={i}
//                title={e.Title}
//                year={e.Year}
//                img={e.Poster}
//               />
//               ) 
//          })
//          } 
//       </div>
//     </div>
//   )
// }
// export default App;

// import React,{useState} from "react";
// import "./App.css"
// function App(){
//   // const [data,setData]=useState(0);
//   return (
//     <div>
//       <h1>Value : {data}</h1>
//       {/* <button onClick={()=>setData(data+1)}>Add</button>
//       <button onClick={()=>data<=0?0:setData(data-1)}>Add</button> */}
//     </div>
//   )
// }
// export default App;

import React from "react";
import TextField from '@mui/material/TextField';
import Header from "./components/Header"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./App.css"
import Field from "./components/Field"
import {useState} from "react"
import { EmailSharp } from "@mui/icons-material";
function App(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  //if click on plus this will return data in array object
  const [data,setData]=useState([]);
  // left name,email is for key 
  // right name,email is pass direct useState value
  // const Apple=()=>{
  //   setData({
  //     name:name,
  //     email:email
  //   })
  // }

  // we can pass direct as well the value
  const Apple=()=>{
    setData([...data,{
        name,email
        
    }])
    //old data goes off in input field isliye usko blank kardoonga
    setName("");
    setEmail("");
  }
  return (
    <div className="App">
        {/*  Form part */}
        <Header />
        
        <div className="form">
        <Stack spacing={2} direction="row">
        <TextField value={name} onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
        <Button onClick={Apple} variant="contained" ><AddIcon /></Button>
        </Stack>
        </div>
        {/* data part */}
        <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
        </div>
        {
          data.map((e,i)=>{
            return (
              <Field key={i} 
               name={e.name}
               email={e.email}
               data={data}
               setData={setData}
              />
            )
          })
        }

    </div>

  )
}
export default App;

// import React,{useEffect,useState} from "react";
// import Header from "./components/Header"
// export default function App(){
//   //useffect bascially used to fetch data in api
//   //useEffect us to produce sideffect, component render , rerender , dependecies changes
//   const [data,setData]=useState(0);
//   //suppose main chhata hoon intialy ek bbar call ho jab render hua we pass array
//   useEffect(()=>{
//      window.alert("useEffect called");
//   },[data])//1 ball call hoga
//   //ab ek baar call hoga
//   console.log("Function Body")
//   return (
//     <div className="App">
//         <Header />
//         {
//           console.log("Inside JSX")
//         }
//         <button onClick={()=>setData(data+1)}>Click Me {data}</button>
//     </div>
//   )
// }
//jaise hi button par click re render useeffect call 
//UseEffect basically used to get data in api.
//It is used to produce sideffect firtly call component render, re render, depencies change hoti
//api is used to connect software ya frontened or backened ko connect


//Api sa how to get data and print

// import React from "react";
// import Home from "./components/Home"
// import Header from "./components/Header"
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// export default function App(){
//   //element propert use
//   //for errotr page you need to add *
//   return (
//     <div className="App">
//       <Router>
//           <Routes>
//               <Route path="/about" element={<Header />} />
//               <Route path="/" element={<Home />} />
              
//           </Routes>
//       </Router>
//     </div>
//   )
// }

//import BrowserRouter as Router, Routes, Route , Link
// import React from 'react'
// import Error from "./Pages/Error";
// import Contact from "./Pages/Contact"
// import About from "./Pages/About"
// import Home from "./Pages/Home"


// // import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import Instag from "./Pages/Instag"
// import Mails from "./Pages/Mails"
// //Now we are use NavLink to highlight the keyword
// import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom"
// function App() {
//   const fun=({isActive})=>{
//     return {
//        textDecoration:isActive?"underline":"none",
//        color:isActive?"Orange":"Red",
//        fontSize:"20px"
//     }
//   }
//   //* use if someone enter wrong page
//   return (
//     <div className="App">
//         <Router>
//            <NavLink to="/App" style={fun}><h1>HOME</h1></NavLink>
//             <NavLink to="/about" style={fun}><h1>ABOUT</h1></NavLink>
//             <NavLink to="/contact" style={fun}><h1>CONTACT</h1></NavLink>
//             {/* <NavLink to="*" style={fun}><h1>ERROR</h1></NavLink> */}
//             {/* <Link to="/"><h1>HOME</h1></Link>
//             <Link to="/about"><h1>ABOUT</h1></Link>
//             <Link to="/contact"><h1>CONTACT</h1></Link>
//             <Link to="/error"><h1>ERROR</h1></Link> */}
//             <Routes>
//                 <Route path="/">
//                  <Route index element={<Home />}/>
//                  <Route path="/App" element={<Home />}/>
//                  </Route>
//                  <Route path="/about" element={<About />}/>
//                  <Route path="/contact" element={<Contact />}>
//                      <Route index element={<Instag />}/>
//                       <Route path="mail" element={<Mails />}/>
//                   </Route>
//                  <Route path="*" element={<Error />}/>
//             </Routes>
//         </Router>
//     </div>
//   )
// }

// export default App

//React Router Hooks
// import React from 'react'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   )
// }

// export default App

//Context api ki help sa hum directly data bhej shakte hai in component 3 no need to nested props
//vcalue keyword ki help sa data send
// import React,{useState,createContext} from "react"
// import ComC from "./solved/ComC"
// const AppState=createContext();
// const NextState=createContext();
// function App(){
//   const [data,setData]=useState("Hello world")
//   const [item,setItem]=useState({name:"Ravi",age:34})
//   //we can directly apss all values in one object
//   //if we pass multiple data we cn pass in object and all data in one 
//   return (
//       <>
//         {/* <AppState.Provider value={{data,item}}>
//          <ComC />
//          </AppState.Provider > */}

//         <AppState.Provider value={{data}}>
//             <NextState.Provider value={item}>
//                 <ComC />
//             </NextState.Provider>
//          </AppState.Provider >
//       </>
//   )
// }
// export default App;
// export {NextState}
// export {AppState}


//useState ki help sa input sa data get

// import React,{useState} from 'react'
// function App() {
//   const [data,setData]=useState()
//   return (
//     <div>
//        <input value={data} onChange={(e)=>setData(e.target.value)}/>
//        <h4>UseRef Used In Form {data}f</h4>
//     </div>
//   )
// }
// export default App

//useReducer Hook
//return keyword is manadatory in reducer
// import React,{useReducer} from 'react'
// const reducer=(state,action)=>{
//      if(action.type==="INC"){
//       return state+1
//      }
//      else if(action.type==="DEC"){
//       return state<=0?0:state-1;
//      }
//      else{
//       return state*2;
//      }
// }
// //return keyword is manadatory in reducer
// function App() {
//   //1 extra argument reducer, initial
//   //dispatch basically basically object leta hai isme type keyword aata hai
//   const [data,dispatch]=useReducer(reducer,0)
//   return (
//     <div>
//       <h1>The value is: {data}</h1>
//       <button onClick={()=>dispatch({type:"INC"})}>INC</button>
//       <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
//       <button onClick={()=>dispatch({type:"MUL"})}>MUL</button>
//     </div>
//   )
// }

// export default App
//json->javascript object notation
//Custom Hooks
//dependecies array nahi pass karenge useffect mai  it will goes on infinite time
// import React from 'react'
// import useFetch from './Pages/useFetch'
// function App() {
//   const [data]=useFetch("https://hub.dummyapis.com/employee?noofRecords=3&idStarts=1001")
//   return (
//     <div>
//       <h1>
//           Get data through api
//       </h1>
//       {
//         data.map((e,i)=>{
//            return (
//               <h1 key={i}>{e.firstName}</h1>
//            )
//         })
//       }
//     </div>
//   )
// }
// //dry dont repeat youself principle used custom hooks create
// export default App

// import React,{useState,useEffect} from "react"
// import "./App.css"
// import {Bars} from "react-loader-spinner"
// function App(){
//   //intially false sa intialize because by default not moving spinner
//   const [loading,setUnloading]=useState(false)
//   const [item,setItem]=useState([])
//   useEffect(()=>{
//     setUnloading(true);
//     async function getdata(){
//        const value=await fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001")
//        const res=await value.json();
//        setItem(res)
//        setUnloading(false);
//     }
//     getdata()
//   },[])
//   return (
//     <div>
//        <div>
//           {
//             loading?<div className="main"><Bars /></div>:
            
//               item.map((e,i)=>{
//                  return (
//                     <h1 key={i}>{e.firstName}</h1>
//                  )
//             })
            
//           }
            
//        </div>
//     </div>
//   )
// }
// export default App;

//redux bascically store all data in redux store when any component need then take it from store
//Redux works
//1) what to do? action [2 actoon + and -]
//2) How to do? [reducer]
//3) store object which hold state of application
//4) function associated with store createStore(), dispatch(action),getState

//redux Basic 1) Action (what to do + and -)
//2) Reducer (How to do all functionality)
//3) state (store the data)

//Action -> Pure Object (Type Field) 
//return {
//   type:'INCREMENT',
//   payload:num
// }

//Action Creator (Pure Function Which creates an action)

// export const incNumber=()=>{
//   return {
//     type:"INCREMENT",
//     payload:num
//   }
// }
//this is known as action creator 
//reusable, Portable and easy to test
//only have a single store redux Application, every reducer store has a single root reducer function
//single curly for data transfer, double curly for value
// import React from 'react'
// //current state et
// import {useSelector} from "react-redux"
// import { useDispatch } from 'react-redux'
// import {Inc,Dec} from "./states/reducers/index"
// function App() {
//   const curState=useSelector((state)=>state.number)
//   const dispatch=useDispatch();
//   return (
//      <>
//       <h1>React Redux Tutorial</h1>
//        <div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
//         <h1>{curState}</h1>
//         <div>
//           <button onClick={()=>dispatch(Inc())}>INC</button>
//           <button onClick={()=>dispatch(Dec())}>DEC</button>
//         </div>
//        </div>
//      </>
//   )
// }

// export default App

// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {Inc,Dec} from "./states/reducers/index"
// function App(){
//   const cur=useSelector((sta)=>sta.number)
//   const dispatch=useDispatch();
//   return (
//     <>
//     <h1>React Reducer</h1>
//       <div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
//           <h1>{cur}</h1>
//           <div>
//             <button onClick={()=>dispatch(Inc())}>Inc</button>
//             <button onClick={()=>dispatch(Dec())}>Dec</button>
//           </div>
//       </div>
//     </>
//   )
// }
// export default App;