// import React from 'react'
// function Error() {
//   return (
//     <div>
//       <h1>404 Page Not Found</h1>
//       <p>Not Exits Page</p>
//     </div>
//   )
// }

// export default Error

//usenavigate function for nested routing
//navigate -1 means vapas chaala jayega
//navigate bascially store instance of previous route
//usenavigate function to redirect page if wrong page open
//pass -1 it move previous stage, const navigate =usen(); store instance of previous
//navigate store instance of previous page

import React from "react";
import {useNavigate} from "react-router-dom"
function Error() {
    const navigate=useNavigate()
  return (
    <>
       <div>404 Page Not Found</div>
       <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default Error

