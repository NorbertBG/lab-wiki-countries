import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import countries from "./countries.json"
import Navbar from "./Pages/Navbar";
import CountriesList from "./Pages/CountriesList";
import CountryDetails from "./Pages/CountryDetails";
import { useEffect, useState } from 'react';    
import axios from 'axios';

import { Routes, Route } from "react-router-dom";  // <== IMPORT


function App() {

  const [countries, setCountries] = useState([]);


  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
    
  }, []);

  return <div className="App">
    <Navbar/>

    <Routes>
      <Route path="/" element={ <CountriesList countries={countries}/>} />
      <Route path="/:countryId" element={ <CountryDetails />} />
    </Routes>

  </div>;
}
export default App;