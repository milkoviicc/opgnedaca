import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }) 
    const data = await response.json();
    if(data.user) {
      localStorage.setItem('token', data.user);
      alert('Login suceeded');
      history("/");
    } else {
      alert('Please check your username and password');
    }
    console.log(data);
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
