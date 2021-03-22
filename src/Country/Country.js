import React from 'react';

const Country = (props) => {

    const country = props.country

    const {name, flag} = country

    const handleCountryDetails = props.handleCountryDetails;

    return (
        <div>
        
                <img style={{width:"80px"}} src={flag} alt=""/>
            <p>Country name : {name}</p>
          
            <button onClick={() => handleCountryDetails (country)}>Click to details</button>

        </div>
    );
};

export default Country;