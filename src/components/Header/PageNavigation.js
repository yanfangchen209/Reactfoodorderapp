import React, { Fragment, useContext } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import classes from './PageNavigation.module.css'
import HeaderCartButton from './HeaderCartButton'
import AuthContext from '../../store/auth-context'


/**Here, the isActive property is automatically provided by react-router-dom. The className
 *  function uses it to conditionally apply the classes.active class to the NavLink when the 
 * link corresponds to the current active route. If the link is not active, it doesn't apply 
 * any additional class. */
export const PageNavigation = () => {

  const navigate = useNavigate();
  const authCxt = useContext(AuthContext);

  const signOutHandler = () => {
    //remove token from client browser
    //localStorage.removeItem('token'); // Example: Using localStorage

    //update ui: don't show sign out anymore
    authCxt.signOut();

    //redirect to home page
    navigate('/')
  }
  return (
    <Fragment>
      <ul className={classes.list}>
        <li>
            <NavLink to="/">GOURMETGO</NavLink>
        </li>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/food">Food</NavLink>
        </li>
        <li>
            <NavLink to="/career">Join Us</NavLink>
        </li>
        <li>
            <NavLink to='/cart'>
              <HeaderCartButton />
            </NavLink>
        </li>
      </ul>
      <div className={classes.loginAndSignupAndSignout}>
          <NavLink to='/login'>
            {!authCxt.isLoggedIn && <button>Log in</button>} 
          </NavLink>
          <NavLink to='/signup'>
            {!authCxt.isLoggedIn && <button>Sign up</button>}
          </NavLink>
          {authCxt.isLoggedIn && <button onClick={signOutHandler}>Sign out</button>}
      </div>
    </Fragment>

  )
}

export default PageNavigation;