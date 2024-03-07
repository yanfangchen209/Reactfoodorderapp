import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import PageNavigation from './PageNavigation';
import HeaderCartButton from './HeaderCartButton';

export const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <PageNavigation />
        <button>Sign In</button>
        <HeaderCartButton />
      </header>
    </Fragment>

  )
}

export default Header;
