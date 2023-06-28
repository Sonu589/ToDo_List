import React from 'react'
//nested routes
//With help of link and outlet we can perform nesting routing
import {Link,Outlet} from "react-router-dom"
function Contact() {
  return (
    <>
       <Link to="insta"><h1>Contact Via Instagram</h1></Link>
       <Link to="mail"><h1>Contact Via Mail</h1></Link>
       <Outlet />
    </>
  )
}

export default Contact
