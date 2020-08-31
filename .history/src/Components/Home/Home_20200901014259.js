import React from 'react';
import {useState, useEffect} from 'react'
const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response =>response.json())
        .then(data=> setCountry(data));
    },[])
    return (
        <div>
            <Country country = {country}/>
        </div>
    );
};

export default Home;