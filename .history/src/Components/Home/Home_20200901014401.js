import React from 'react';
import {useState, useEffect} from 'react'
import Country from '../Country/Country'
const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response =>response.json())
        .then(data=> setCountry(data));
    },[])
    return (
        <div>
            <h1>Countries: {country.length}</h1>
            <Country country = {country}/>
        </div>
    );
};

export default Home;