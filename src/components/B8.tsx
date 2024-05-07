import React, { useState } from 'react'

export default function B8() {
    const [count,setCnt]=useState<number>(0);
    const handleClick=()=>{
        setCnt(count+1);
    }
  return (
    <div>
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  )
}
