import React from 'react'

const page = ({params}) => {
  const {id} = params
  return (
    <div>page no. {id}</div>
  )
}

export default page