import React from 'react';
import {useState, useEffect} from 'react'
import Country from '../Country/Country'
const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response =>response.json())
        .then(data=> setCountries(data));
    },[])
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {
                countries.map(country =>
                    <Country country = {country}/>
                )
            }
        </div>
    );
};

export default Home;