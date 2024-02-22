
import { useState } from 'react';
import './App.css';
import FoodList from './components/Meals/FoodList';
import Foodintro from './components/Meals/Foodintro';
import Header from './components/Header/Header';

function App() {
  const dummyData = [
    {id: "e1", name:"Barbecue Burger", intro: "American, raw, meaty", cost: 12.99}, 
    {id: "e2", name: "Sushi", intro: "Finest fish and veiiges", cost: 16.50},
    {id: "e3", name: "Green Bowl", intro: "Healthy ang green", cost: 18.99 }
  ];

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
