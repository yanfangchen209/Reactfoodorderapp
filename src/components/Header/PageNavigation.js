import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './PageNavigation.module.css'
import HeaderCartButton from './HeaderCartButton'

/**Here, the isActive property is automatically provided by react-router-dom. The className
 *  function uses it to conditionally apply the classes.active class to the NavLink when the 
 * link corresponds to the current active route. If the link is not active, it doesn't apply 
 * any additional class. */
export const PageNavigation = () => {
  return (

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

  )
}

export default PageNavigation;