
import './App.css';
import Footer from './footer';
import Clock from './clock';
import Dice from './dice';
import PropComp from './componentwithprops';
import Car from './car';
import Login from './states';
import Header from './header';
import MilesAhead from './miles';
import Shopping from './shopping';
import LessText from './lesstext';
import Greet from './greet';
import ProductTable from './producttable';

function App() {
  const address = {
    name: "Harry",
    road: "Privet drive",
    town: "surrey"
  }

  return (
    <>
    <Header/>
   
    <div className="App">
  
      <h2>Hello {address.name}, your road is {address.road} and your town is {address.town}</h2>
   </div>
   <div className="App">
      <PropComp/>
      </div>
      <div className="App" >
      <Clock/>
      <Clock/>
      </div>
      <div className="App">
      <Dice/>
      </div>
    
    <div className="App">
    <MilesAhead/>
    </div>
    <div className="App">
    <Car/>
    </div>
    <div className="App">
    <LessText
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   maxLength={250}/>
   </div>
   <div className="App">
    <Greet name="luxshan"/>
   </div>
    <div className="App">
    <Login/>
    </div>
    <div className="App">
      <ProductTable/>
    </div>
    <div className="App">
      <Shopping/>
    </div>
    <div className='App'>
     <Footer />
    </div>
    </>
    );
}

export default App;
