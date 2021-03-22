
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Country/Country';
import CountryDetails from './Country/CountryDetails/CountryDetails';

function App() {

  // const [countries,setCountries] = useState([]);

  // useEffect(() => {

  //   fetch('https://restcountries.eu/rest/v2/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))

  
  // },[])


  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>{


   fetch('https://restcountries.eu/rest/v2/all')

   .then(res => res.json())
   .then(data =>setCountries(data) )

  },[])
  // console.log(country)

const handleCountryDetails = (country) => {

  const newCart = [...cart, country]

  setCart(newCart);
}


  return (
    <div className="App">

      <h1>country length :{countries.length}</h1>
      <h4>Country added : {cart.length}</h4>
      <CountryDetails cart ={cart}></CountryDetails>
    {
      countries.map(country => <Country country={country} handleCountryDetails ={handleCountryDetails}></Country> )
    }
    </div>
  );
}

export default App;
