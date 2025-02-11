import React from 'react'

const PropsChildren = (Props) => {
  return (
    <div>
        <h1>{Props.username}</h1>
        <h3>{Props.company}</h3>
        {
            Props.children
        }
    </div>
  )
}

export default PropsChildren