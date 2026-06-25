import React from 'react'
import { useParams } from 'react-router-dom'


const BlaBlaDetail = () => {

  const params = useParams()

  return (
    <div>
        <h1>{params.id} BlaBla Detail Page</h1>
    </div>
  )
}

export default BlaBlaDetail