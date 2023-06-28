import React,{useState,useEffect} from 'react'

function Home() {
    const [data,setData]=useState(2);
    const [item,setItem]=useState([]); //bascically store array of object api data
    useEffect(()=>{
        async function getdata(){
          //await keyword used to fetch data till not found
            const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${data}&idStarts=1001`)
            
            const res=await get.json(); //it will convert data in array format
            setItem(res);
            console.log(res);
          }
          getdata();
          //agar data ko automatic upadte no needd array
          //1 baar call karna hai blank array
          //multiple time call pass dependcies
          //now we have to update title
          document.title=`(${data})  Employee`
  
    },[data]); //it work acc to data input
  return (
    <div>
       <button onClick={()=> setData(data+1)}>Click Me {data}</button>
        {
          item.map((e,i)=>{
              return(
                <div key={i}>
                  <h1>{e.firstName}</h1>
                </div>
              )
          })
        }
    </div>
  )
}

export default Home
