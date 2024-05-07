import React, { useState } from 'react'

export default function B5() {
    const [name,setName]=useState<boolean>(true);
    const handleClick=()=>{
        setName(!name);
    }
  return (
    <div>
        <h2>Giá trị của state: {name?'true':'false'}</h2>
      <button onClick={handleClick}>{name?'Hiện':'Ẩn'}</button>
    </div>
  )
}
