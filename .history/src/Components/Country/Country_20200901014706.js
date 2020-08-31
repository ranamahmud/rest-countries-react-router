import React from 'react';

const Country = (props) => {
    const {name, capital} = props.country;
    const countryStyle = {
        border: '1px solid goldern'
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
        </div>
    );
};

export default Country;