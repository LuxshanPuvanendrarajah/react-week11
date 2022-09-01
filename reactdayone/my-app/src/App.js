
import './App.css';
import Footer from './footer';
import Clock from './clock';

function App() {
  const address = {
    name: "Luxshan",
    city: "london",
    town: "Harrow"
  }

  return (
    <>
    <div className="App">
      <p>Hello {address.name}, your city is {address.city} and town is {address.town}</p>
      <Clock/>
      <Clock/>
    </div>
  



<Footer/>
</>
);
}

export default App;
