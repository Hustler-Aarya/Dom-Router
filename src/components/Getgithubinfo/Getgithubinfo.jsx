import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Getgithubinfo() {
    const git= async ()=>{
        const response=await fetch('https://api.github.com/users.Hustler-Aarya')
        return response.json()
    }
  
}


function Getgithub() {
    const data=useLoaderData()
  return (
    <div className='text-center text-3xl text-white bg-blue-600 p-4 m-4 '>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="img" width={300}/>
    </div>
  )
}
