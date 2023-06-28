import {useEffect,useState} from 'react'
const useFetch=(url)=>{
    const [data,setData]=useState([]);
  useEffect(()=>{
    async function getdata(){
      const get=await fetch(url)
      const value=await get.json();
      setData(value);
    }
    getdata()
  },[])
  return [data]; //return value as an array object
}

export default useFetch

