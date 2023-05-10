import React from 'react';
import './Country.css'

const Country = (props) => {
    const { capital, area, population, region, flags } = props.country
    console.log(props.country)
    return (
        <div className='data'>
            <p className='p'>Name: {props.country.name.common} </p>
            <img className='img' src={flags.png} alt='...' />
            <p>Capital: {capital} </p>
            <p>Area: {area} </p>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
        </div>
    );
};

export default Country;