import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e: any) {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }) 
    const data = await response.json();
    if(data.status === 'ok') {
      history('/login');
    } else {
      alert("We already have an account registered to that email");
    }
  }

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register
