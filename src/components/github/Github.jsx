import React, { useEffect, useState } from 'react'

export default function Github() {

const [data,setdata]=useState([])

useEffect(()=>{
  fetch('https://api.github.com/users/Hustler-Aarya')
  .then(response =>response.json())
  .then(data =>{
    console.log(data)
    setdata(data)
  })
},[])


  return (
    <div className='text-center text-3xl text-white bg-blue-600 p-4 m-4 '>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="img" width={300}/>
    </div>
  )
}
