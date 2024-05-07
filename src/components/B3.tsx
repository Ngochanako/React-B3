import React, { useState } from 'react'

export default function B3() {
    const [date,setDate]=useState<string>('');
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let date=e.target.value;
        setDate(date);
    }
  return (
    <div>
      <h2>Thời gian {date}</h2>
      <input onChange={handleChange} type="date" />
    </div>
  )
}
