import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import classes from './Login.module.css'

const enteredEmailIsValid = (email) => {
    //regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const Login = () => {
    //get query string data from sign up message using  useLocation() hook from react-router-dom
    const location = useLocation();
    const signupMessage = location.state ? location.state.message : null;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailIsTouched, setEmailTouched] = useState(false); 
    const [passwordIsTouched, setPasswordTouched] = useState(false);

    const emailInputIsValid = enteredEmailIsValid(email);
    const passwordInputIsValid = password.trim().length >= 8;


    const emailIsValid = emailInputIsValid || (!emailInputIsValid && !emailIsTouched);
    const passwordIsValid = passwordInputIsValid || (!passwordInputIsValid && !passwordIsTouched);

    const formIsValid = emailInputIsValid && passwordInputIsValid;


    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginFormSubmissionHandler = (e) => {
        e.preventDefault();
        //1.todo: validate email and password
        if(!formIsValid){
            return;
        }


        /*2.send email and password to backend, if email exist and password right, 
        create a token and send to client, in other cases show error mesage "Invalid username or password." 
        */


        //3. todo: update UI: go to homepage, show sign out in header(no 'log in', no 'sign up')
    }

    const emailControlClass = `${classes.control} ${emailIsValid ? '': classes.invalid}`;
    const passwordControlClass = `${classes.control} ${passwordIsValid ? '': classes.invalid}`;

  return (
    <div className={classes.login}>
        <p className={classes.signupMessage}>{signupMessage}</p>
        <h2>Sign into your GourmetGo account</h2>
        <form onSubmit={loginFormSubmissionHandler} className={classes.loginForm}>
            <div className={emailControlClass}>
                <label htmlFor='email'>Email</label>
                <input id='email' value={email} placeholder='Email' 
                onChange={emailChangeHandler} 
                onBlur={() => {setEmailTouched(true)}}/>
                {!emailIsValid && <p>Email is invalid</p>}
            </div>
            <div className={passwordControlClass}>
                <label htmlFor='password'>Password</label>
                <input id='password' value={password} placeholder='Password' 
                onChange={passwordChangeHandler} 
                onBlur={() => {setPasswordTouched(true)}}/>
                {!passwordIsValid && <p>Password is invalid</p>}
            </div>
            <button className={classes.loginSubmitButtion} type='submit'>Sign In</button>
            <p>Forget password?</p>
            <p>New to GOURMETGO? <Link to='/signup'>Create your GOURMETGO account</Link></p>
        </form>
    </div>
  )
}

export default Login
