import React, { useState } from 'react';
import './Countries.css'
import Country from '../country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    return (
        <div>
            <h1>
                Total Countries Available: {countries.length}
            </h1>
            <h2 className='all'>
                All Countries Information Given Below
            </h2>
            <div className='country-info'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    />)
                }
            </div>

        </div>
    );
};

export default Countries;