import React, {useEffect, useState} from 'react'
import FoodItem from './FoodItem';
import classes from './FoodList.module.css';

export const FoodList = () => {

  const [mealData, setMealData] = useState([]);
  const [httpError, setHttpError] = useState(null);


  //const [isLoading, setIsLoading] = useState(true);
  // const foodPhotos = [burger, sushi, pizza, pasta, salad, sandwich, taco, steak, smoothie, icecream, 
  //   curry, burrito, cake];


  /*useEffect(()=>{a; b}, [])
      response.ok return true or false, Error is js builtin,interface Error {
    name: string;
    message: string;
    stack?: string;*/
    //http get request to get food data from firebase rest service
  useEffect(() => {
    const fetchFoodDataHandler = async () => {
      try{
        const response =  await fetch("https://reactfoodapp-10ef5-default-rtdb.firebaseio.com/meals.json");
        if(!response.ok){
          throw new Error("Something went wrong!");
        }
  
        const data  = await response.json();
        //data is js object: e1: {description:'', id: 'e1', name: 'gg', price: 22} e2: {description:'', id: 'e2', name: 'dd', price: 33}
        //console.log(data);
        const loadedMeals = [];

        //relative path: images/cake.jpg     http://localhost:3002/images/cake.jpg
        //absolute path: /images/cake.jpg    http://localhost:3002/images/cake.jpg
        for(const key in data){
          loadedMeals.push({
            id: data[key].id,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
            photo: data[key].photo
          })
        }
        setMealData(loadedMeals);
        //setIsLoading(false);

      }catch(error){
        //setIsLoading(false);
        //error either evoked by fetch api or !response.ok
        setHttpError(error.message);
      }
    };



    fetchFoodDataHandler();



  }, []);

/*
  if(isLoading){
    return(
    <section>
      <p>Loading...</p>
    </section>)
  }
  */

  if(httpError){
    return (
      <section className={classes.httpError}>
        <p>{httpError}</p>
      </section>
    )
  }


  return (
    <div className={classes.foodlist}>
      {mealData.map(item => <FoodItem key={item.id} id={item.id} name={item.name} 
        description={item.description} price={item.price} photo={item.photo} />)}
    </div>
  )
}

export default FoodList;
