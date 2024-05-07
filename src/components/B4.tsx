import React, { useState } from 'react'

export default function B4() {
    const [province,setProvince]=useState<string>('');
    const handleSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
         let value=e.target.value;
         setProvince(value);
    }
  return (
    <div>
        <h2>Tỉnh: {province}</h2>
      <select name="" id="" onChange={handleSelect}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Thái Bình">Thái Bình</option>
        <option value="Nghệ An">Nghệ An</option>
        <option value="Hạ Long">Hạ Long</option>
      </select>
    </div>
  )
}
