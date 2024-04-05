import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import classes from './Signup.module.css'

/**
 * 1. form validation in backend
 * 2.store user account info in backend database
 * 3. send verify email link
 * 4. redirect to login page with a message indicating the account has been created successfully.
 * 5.handle errors.
 */
const enteredEmailIsValid = (email) => {
    //regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const enteredPhoneNumberIsValid = (phoneNumber) => {
    //regular expression for validating phone number
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
}

const Signup = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [password, setPassword] = useState('');
    const [reenteredPassword, setreenteredPassword] = useState('');


    const [emailIsTouched, setEmailTouched] = useState(false);
    const [firstNameIsTouched, setFirstNameTouched] = useState(false);
    const [lastNameIsTouched, setLastNameTouched] = useState(false);
    const [phoneNumberIsTouched, setPhoneNumberTouched] = useState(false);
    const [passwordIsTouched, setPasswordTouched] = useState(false);
    const [reenteredPasswordIsTouched, setReenteredPasswordTouched] = useState(false);

    /** You don't need to store redundant state for something that can be derived from existing state 
     * variables (email and emailIsTouched). there's no need to update it separately. It avoids unnecessary
     *  state updates and re-renders, leading to better performance.*/

    const emailInputIsValid = enteredEmailIsValid(email);
    const firstNameInputIsValid = firstName.trim() !== '';
    const lastNameInputIsValid = lastName.trim() !== '';
    const phoneNumberInputIsValid = enteredPhoneNumberIsValid(mobilePhone) || mobilePhone === '';
    const passwordInputIsValid = password.trim().length >= 8;
    const reenteredPasswordInputIsValid = reenteredPassword.trim().length >= 8 && reenteredPassword === password;

    const emailIsValid = emailInputIsValid || ( !emailInputIsValid && !emailIsTouched);
    const firstNameIsValid = firstNameInputIsValid || ( !firstNameInputIsValid && !firstNameIsTouched);
    const lastNameIsValid = lastNameInputIsValid || ( !lastNameInputIsValid && !lastNameIsTouched);
    const phoneIsValid = phoneNumberInputIsValid || ( !phoneNumberInputIsValid && !phoneNumberIsTouched);
    const passwordIsValid = passwordInputIsValid || (!passwordInputIsValid && !passwordIsTouched);
    const reenteredPasswordIsValid = reenteredPasswordInputIsValid || (!reenteredPasswordInputIsValid && !reenteredPasswordIsTouched);


    const formIsValid = emailInputIsValid && firstNameInputIsValid && lastNameInputIsValid && phoneNumberInputIsValid
    && passwordInputIsValid && reenteredPasswordInputIsValid;


    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }

    const mobilePhoneChangeHandler = (e) => {
        setMobilePhone(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const reenteredPasswordChangeHandler = (e) => {
        setreenteredPassword(e.target.value);
    }

    const formSubmissionHandler = async (e) => {
        e.preventDefault();

        if(!formIsValid){
            return;
        }
        //gather user entered data
        const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: mobilePhone,
            //to do
            password: 'hashed password'
        }

        //todo: http post request to backend ? firebase
        /**The fetch() function in JavaScript is used to make HTTP requests. It accepts two parameters:
         * URL: The URL of the resource you want to fetch.Options (optional): An optional object containing
         *  settings for the request, such as method, headers, body, etc. */
        try {
            const response = await fetch('https://reactfoodapp-10ef5-default-rtdb.firebaseio.com/newusers.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
          
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          
            //const data = await response.json();
            //console.log('Success:', data);
          } catch (error) {
            console.error('Error:', error);
          }


        //todo: redirect to log in page
        //navigate('/login');
        const signupMessage = 'You have successfully created a new account! Please log in to continue.';
        //history.push(`/login?signupMessage=${signupMessage}`);
        navigate('/login', { state: {message: signupMessage} });

    }

    const emailControlClasses = `${classes.control} ${emailIsValid ? '': classes.invalid}`;
    const firstNameControlClasses = `${classes.control} ${firstNameIsValid ? '': classes.invalid}`;
    const lastNameControlClasses = `${classes.control} ${lastNameIsValid ? '': classes.invalid}`;
    const phoneControlClasses = `${classes.control} ${phoneIsValid ? '': classes.invalid}`;
    const passwordControlClasses = `${classes.control} ${passwordIsValid ? '': classes.invalid}`;
    const reenteredPasswordControlClasses = `${classes.control} ${reenteredPasswordIsValid ? '': classes.invalid}`;


    return (    
    <div className={classes.signup}>
        <h2>Create your GourmetGo account</h2>
        <form className={classes.signupForm} onSubmit={formSubmissionHandler}>
            <div className={emailControlClasses}> 
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Email address' value={email} 
                onChange={emailChangeHandler}
                onBlur={() => {setEmailTouched(true)}} />
                {!emailIsValid && <p>Please enter a valid email address</p> }
            </div>
            <div className={firstNameControlClasses}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' placeholder='first name' value={firstName} 
                onChange={firstNameChangeHandler} 
                onBlur={() => {setFirstNameTouched(true)}}/>
                {!firstNameIsValid && <p>First name is required</p>}
            </div>
            <div className={lastNameControlClasses}>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' placeholder='last name' value={lastName} 
                onChange={lastNameChangeHandler}
                onBlur={() => {setLastNameTouched(true)}}
                />
                {!lastNameIsValid && <p>Last name is required</p>}
            </div>
            <div className={phoneControlClasses}>
                <label htmlFor='mobilePhone'>Mobile Phone</label>
                <input type='tel' id='mobilePhone' placeholder='Mobile phone number(optional)' valu={mobilePhone} 
                onChange={mobilePhoneChangeHandler}
                onBlur={() => {setPhoneNumberTouched(true)}} />
                {!phoneIsValid && <p>Phone number is invalid</p>}
            </div>
            <div className={passwordControlClasses}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='at least 8 characters' value={password} 
                onChange={passwordChangeHandler} 
                onBlur={() => {setPasswordTouched(true)}}/>
                {!passwordIsValid && <p>Password is invalid</p>}
            </div>
            <div className={reenteredPasswordControlClasses}>
                <label htmlFor='retype-password'>Re-enter Password</label>
                <input type='password' id='retype-password' value={reenteredPassword} placeholder='confirm password'
                onChange={reenteredPasswordChangeHandler} 
                onBlur={() => {setReenteredPasswordTouched(true)}}/>
                {!reenteredPasswordIsValid && <p>Passwords do not match</p>}
            </div>
            <div className={classes.agreementTerms}>
                <p>By creating an account, you are agreeing to the GourmetGo terms & conditions and GourmetGo privacy policy.</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>        
            <button type='submit' disabled={!formIsValid} className={classes.createButton}>Create account</button>
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </form>
    </div>
    )

}

export default Signup;