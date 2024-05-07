import React, { useState } from 'react'
interface User{
    email:string,
    pass:string,
}
export default function B9() {
    const [user,setUser]=useState<User>({email:'',pass:""})
    const [email,setEmail]=useState<string>('');
    const [pass,setPass]=useState<string>('');
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
          let value=e.target.value;
          let name=e.target.name;
          setUser({...user,[name]:value});
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    const handleClick=()=>{
        setEmail(user.email);
        setPass(user.pass);
    }
  return (
    <div style={{display:'flex',gap:'20px'}}>
      <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit} action="" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input required name='email' type="text" placeholder='Email' onChange={handleChange} />
            
            <input required name='pass' type="text" placeholder='Mật khẩu'onChange={handleChange} />
            
            <button type='submit' onClick={handleClick}>Submit</button>
        </form>
      </div>
      <div style={{marginTop:'40px'}}>
        <h5>Email:{email}</h5>
        <h5>Mật khẩu:{pass}</h5>
      </div>
    </div>
  )
}
