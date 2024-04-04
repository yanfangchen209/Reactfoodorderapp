import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = () => {
        setEmail(email);
    }

    const passwordChangeHandler = () => {
        setPassword(password);
    }

  return (
    <div>
        <h1>Sign into your GourmetGo account</h1>
        <form>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' value={email} onChange={emailChangeHandler} placeholder='Email' />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' value={password} onChange={passwordChangeHandler} placeholder='Password' />
            </div>
            <div>
                <button>Sign In</button>
            </div>
            <p>Forget password?</p>
            <p>New to GOURMETGO? <Link to='/signup'>Create your GOURMETGO account</Link></p>
        </form>
    </div>
  )
}

export default Login
