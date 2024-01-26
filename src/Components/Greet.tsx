import React from 'react'

type greetProps={
    name?:string
}
function Greet(props:greetProps) {
  return (
    <div>hello {props.name}</div>
  )
}

export default Greet