
import './App.css';

import Footer from './footer';
import Clock from './clock';
import Dice from './dice';
import PropComp from './componentwithprops';
import Car from './car';
import Login from './states';

function App() {
  const address = {
    name: "Luxshan",
    city: "london",
    town: "Harrow"
  }

  return (
    <>
 
   
    <div className="App">
  
      <h1>Hello {address.name}, your city is {address.city} and town is {address.town}</h1>
   
      <PropComp/>
      <Clock/>
      <Clock/>
      <Dice/>
    </div>
    <div>
    <Car/>
    </div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div>
    <Login/>
    </div>
     <Footer/>
    </>
    );
}

export default App;
