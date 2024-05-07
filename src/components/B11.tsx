import React, { useState } from 'react'
import './style.css'
export default function B11() {
    const [check,setCheck]=useState<boolean>(false);

  return (
    <div>
      <button onMouseEnter={()=>setCheck(true)} onMouseLeave={()=>setCheck(false)}>Hover Me</button>
      {check && <button className='button'>Button</button>}
    </div>
  )
}
