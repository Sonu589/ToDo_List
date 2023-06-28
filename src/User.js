import React from "react"
const User=(props)=>{
    const {data}=props
    return (
        <div>
           <h1>User Component {data.name}</h1>
        </div>
    )
}
export default User;