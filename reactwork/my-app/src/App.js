
import './App.css';
import Header from './header';
import Footer from './footer';
import Clock from './clock';
import Dice from './dice';

function App() {
  const address = {
    name: "Luxshan",
    city: "london",
    town: "Harrow"
  }

  return (
    <>
    <div className="App">
    <Header/>
      <h1>Hello {address.name}, your city is {address.city} and town is {address.town}</h1>
      <Clock/>
      <Clock/>
      <Dice/>
    </div>

  



<Footer/>
</>
);
}

export default App;
