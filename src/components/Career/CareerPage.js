import React from 'react'
import classes from './CareerPage.module.css'
import career from '../../assets/joinus.jpg'

export const CareerPage = () => {
  return (
    <div className={classes.CareerPage}>
      <img className={classes['career-image']} src={career} alt="careerimage"/>
      <h3 className={classes['career-summary']}>
          Join our dynamic team and embark on a rewarding journey with endless opportunities for growth and 
          development. At GourmetGo, we value passion, creativity, and dedication. Whether you're an 
          experienced professional or just starting your career, we offer a collaborative environment where 
          your talents are recognized and nurtured. 
      </h3>
      <h3 className={classes['career-summary']}>
          Explore our diverse range of career opportunities and 
          become part of a team that's shaping the future. Together, let's make a difference and create 
          something extraordinary.
      </h3>
    </div>
  )
}

export default CareerPage
