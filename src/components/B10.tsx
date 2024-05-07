import React, { useState } from 'react'

export default function B10() {
    const [gender,setGender]=useState<string>('Nam');
    const arr:string[]=['Nam','Nữ','Khác'];
    const handleClick=()=>{
        let value=Math.floor(Math.random()*arr.length);
        setGender(arr[value]);
    }
  return (
    <div>
      <h2>Gender:{gender}</h2>
      <button onClick={handleClick}>Random Gender</button>
    </div>
  )
}
