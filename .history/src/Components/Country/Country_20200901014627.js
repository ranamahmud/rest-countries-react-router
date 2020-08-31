import React from 'react';

const Country = (props) => {
    const {name, capital} = props.country;

    return (
        <div style={textAlign: 'center'}>
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
        </div>
    );
};

export default Country;