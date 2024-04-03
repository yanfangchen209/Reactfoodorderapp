import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CommonHeader from './components/Header/CommonHeader';
import HomePage from './components/Home/HomePage';
import FoodList from './components/Food/FoodList';
import CareerPage from './components/Career/CareerPage';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './components/Checkout/OrderConfirmation';
import CartProvider from './store/CartProvider';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';
//import './App.css';

/*
import burger from './assets/ClassicBeefBurger.jpg'
import sushi from './assets/SalmonNigiri.jpg'
import pizza from './assets/MargheritaPizza.jpg'
import pasta from './assets/SpaghettiBolognese.jpg'
import salad from './assets/CaesarSalad.jpg'
import sandwich from './assets/TurkeyClubSandwich.jpg'
import taco from './assets/GrilledChickenTacos.jpg'
import steak from './assets/steak.jpg'
import smoothie from './assets/BerryBlastSmoothie.jpg'
import icecream from './assets/IceCream.jpg'
import curry from './assets/chickencurry.jpg'
import burrito from './assets/veggieburrito.jpg'
import cake from './assets/cake.jpg'


*/

//photo: "https://i5.walmartimages.com/seo/Hello-Kitty-Round-Cake_c4c83c9b-b195-4c25-809e-0aef7d78059c.a706b7ad927e544723321452773153be.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
function App() {



  /*
  const mealData = [
    {id: "e1", name:"Classic Beef Burger", description: "A juicy beef patty with fresh lettuce, tomatoes, onions, and special sauce", price: 8.992, photo: burger}, 
    {id: "e2", name: "Salmon Nigiri", description: "Fresh slices of salmon atop bite-sized portions of seasoned rice", price: 14.99, photo: sushi},
    {id: "e3", name: "Margherita Pizza", description: "with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.", price: 12.99, photo: pizza},
    {id: "e4", name: "Spaghetti Bolognese", description: "Al dente spaghetti noodles tossed in a rich and savory Bolognese sauce made with ground beef, tomatoes, and herbs.", price: 10.99, photo: pasta},
    {id: "e5", name: "Caesar Salad", description: "Crisp romaine lettuce, croutons, and parmesan cheese, tossed in a creamy Caesar", price: 7.99, photo: salad},
    {id: "e6", name: " Turkey Club Sandwich", description: "A triple-decker sandwich with layers of roasted turkey, crispy bacon, lettuce, tomatoes, and mayonnaise on toasted bread.", price: 9.99, photo: sandwich},
    {id: "e7", name: "Grilled Chicken Tacos", description: "Soft corn tortillas filled with grilled chicken, cilantro, onions, and topped with salsa and lime wedges.", price: 11.99, photo: taco},
    {id: "e8", name: "Ribeye Steak", description: "A succulent ribeye steak seasoned and grilled to perfection, served with garlic mashed potatoes and sautéed vegetables.", price: 19.99, photo: steak},
    {id: "e9", name: "Berry Blast Smoothie", description: "A refreshing blend of mixed berries, banana, yogurt, and a splash of orange juice.", price: 5.99, photo: smoothie},
    {id: "e10", name: "Chocolate Chip Ice Cream", description: "Creamy chocolate ice cream with generous chunks of double chocolate chips.", price: 2.99, photo: icecream},
    {id: "e11", name: "Chicken Curry", description: "A hearty chicken curry with aromatic spices, served with basmati rice.", price: 13.99, photo: curry},
    {id: "e12", name: "Veggie Burrito", description: "A flavorful burrito filled with black beans, rice, sautéed vegetables, cheese, and salsa.", price: 8.99, photo: burrito},
    {id: "e13", name: "Chocolate Lava Cake", description: "A decadent chocolate lava cake with a gooey molten center, served with a scoop of vanilla ice cream.", price: 8.49, photo: cake}
    //e13deleted

  ];
  */


  //pageNavigation act as a wrapper for comonents: HomePage, FoodList, CareerPage
  const router = createBrowserRouter([
    {path: '/', 
    element: <CommonHeader  />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/food', element: <FoodList />},
      {path: '/career', element: <CareerPage />},
      {path: '/cart', element: <Cart/>},

      {path: '/checkout', element: <Checkout />},
      {path: '/orderconfirmation', element: <OrderConfirmation />},
    ]
    },
    //define a separate route for the login page without CommonHeader
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />}
    
  ])



  return (

          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>


  );
}

export default App;
