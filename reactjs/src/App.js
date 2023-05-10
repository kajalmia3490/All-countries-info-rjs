import React from 'react'
import Countries from './components/countries/Countries'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Countries />
      <Footer />
    </div>
  )
}

// function LoadData() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h3>
//         Available Countries: <number className='font-bold'>
//           {countries.length}
//         </number>
//       </h3>
//       <div>
//         {countries.map(country => <Country name={country.name.common} area={country.area} population={country.population} />)}
//       </div>
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Area: {props.area}</p>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }

export default App