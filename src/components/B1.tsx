import React from 'react'

export default function B1() {
    const handleClick=()=>{
        console.log("Click");
        
    }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
