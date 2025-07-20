import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const {userid}= useParams()

  return (
    <div className='text-3xl m-4 p-4 bg-blue-600 text-white'>
      User: {userid}
    </div>
  )
}
