import React, { useState } from 'react'

export default function B2() {
   const [user,setUser]=useState<string>('');
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let userInput=e.target.value;
    setUser(userInput);
   }
  return (
    <div>
      <h2>Dữ liệu người dùng sau khi nhập:{user}</h2>
      <input onChange={handleChange} type="text" />
    </div>
  )
}
