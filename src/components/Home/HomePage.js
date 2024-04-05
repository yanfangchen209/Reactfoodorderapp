import React from 'react'
import background from '../../assets/backimage.jpg';
import classes from './HomePage.module.css'

export const Homepage = () => {
  return (
    <div className={classes['food-app-intro']}>
        <img src={background} alt='background' />
        <h1>Delicious Food, Delivered To You!</h1>
        <h3>Your go-to destination for delicious meals delivered right to your doorstep! We 
            offer a mouthwatering selection of dishes, from comforting classics to exciting 
            flavors. Our simple and user-friendly app allows you to browse through a variety 
            of options, place your order with ease, and have it delivered swiftly to your 
            location.
        </h3>
        <h3>Enjoy the convenience of tasty meals at your fingertips. Order now and treat yourself
             to a hassle-free and delightful dining experience!
        </h3>
    </div>
  )
}

export default Homepage;
