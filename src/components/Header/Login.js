import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import classes from './Login.module.css'
import AuthContext from '../../store/auth-context'

const enteredEmailIsValid = (email) => {
    //regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const Login = () => {
    const authCxt = useContext(AuthContext);
    const navigate = useNavigate();

    //get query string data from sign up message using  useLocation() hook from react-router-dom
    /**When you access location.state.message directly without the conditional check (location.state ? 
     * location.state.message : null), if location.state is null or undefined, it will throw an error 
     * because you're trying to access a property (message) of something that is null or undefined. */
    const location = useLocation();
    //send a message from sign up page to log in page when redirect to log in page
    const signupMessage = location.state ? location.state.message : null;
    //redirect from cart page and carry a message so that after log in, it will go to check out page instead of homepage by default
    const isSignInToCheckOut = location.state ? location.state.isSignInToCheckOut: null;


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

        //1.validate form validity
        if(!formIsValid){
            return;
        }


        /*2.send email and password to backend, if email exist and password right, 
        create a token and send to client, in other cases show error mesage "Invalid username or password." 
        */


        //3. todo: update UI(using context): go to homepage, show sign out in header(no 'log in', no 'sign up')
        authCxt.signIn();

        //if it is not signintocheckout, go to home page directly
        //if it is signintocheckout, go to checkout page to enter shipping info, payment and place order

        if(isSignInToCheckOut === "yes"){
            navigate('/checkout');
        }else{
            navigate('/');
        }
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
                {!passwordIsValid && <p>Password length must be at least 8</p>}
            </div>
            <button className={classes.loginSubmitButtion} type='submit'>Sign In</button>
            <p>Forget password?</p>
            <p>New to GOURMETGO? <Link to='/signup'>Create your GOURMETGO account</Link></p>
        </form>
    </div>
  )
}

export default Login
