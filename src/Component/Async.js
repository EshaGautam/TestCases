import React, { useEffect, useState } from 'react'

function Async() {
    const[data,setData]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const data = await fetch(
              "https://jsonplaceholder.typicode.com/comments"
            );
            const response = await data.json()
            setData(response)
        }
        fetchData()
    },[])
   
    const showData = data.map((data)=>(
        <ul key={data.id}>
          <li>
            <span>{data.name}</span>
            <span>{data.email}</span>
            <span>{data.body}</span>
          </li>
        </ul>
    ))

  return (
    <div>{showData}</div>
  )
}

export default Async