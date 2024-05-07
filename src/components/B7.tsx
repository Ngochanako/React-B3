import React, { useState } from 'react'

export default function B7() {
   const [arr,setArr]=useState<number[]>([]);
    const handleClick=()=>{
        let number=Math.floor(Math.random()*9);
        const newArr=[...arr,number];
        setArr(newArr);
        console.log(arr)
    }
  return (
    <div>
        <h2>Mảng số: [{arr.join(',')}]</h2>
      <button onClick={handleClick}>Add element</button>
    </div>
  )
}
