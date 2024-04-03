import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = () => {

    }

    const passwordChangeHandler = () => {

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
                <label htmlFor='password'>password</label>
                <input id='password' value={password} onChange={passwordChangeHandler} placeholder='Password' />
            </div>
            <div>
                <button>Sign In</button>
            </div>
            <p>Forget password?</p>
        </form>
    </div>
  )
}

export default Login
