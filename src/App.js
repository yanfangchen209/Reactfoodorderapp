
import { useState } from 'react';
import './App.css';
import FoodList from './components/Meals/FoodList';
import Foodintro from './components/Meals/Foodintro';
import Header from './components/Header/Header';

function App() {


  const [data, setData] = useState(dummyData);

  const getAmount = (data) => {
    let totalAmount = 0;
    totalAmount += amount;
    return totalAmount;
  }
  const getCount = (data) => {
    let count = 0;
    for(item in data){
      if(item.amount > 0){
        count++;
      }
    }
    return count;
  }

  

  return (
    <div className="App">
      <Header />
      <Foodintro />
      <FoodList data={dummyData}/>

    </div>
  );
}

export default App;
