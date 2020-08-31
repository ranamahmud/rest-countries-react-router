import React from 'react';
import {useState, useEffect} from 'react'
const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response =>response.json())
        .then(data=> console.log(data));
    },[])
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;