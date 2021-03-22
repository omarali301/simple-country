import React from 'react';

const CountryDetails = (props) => {
    const cart = props.cart;
// console.log(cart)


    // const {name, flag, population, language} = cart
    return (
        <div style={{border: '1px solid gray', padding: "10px" , borderRadius: "5px", width : '400px' }}>
            <h3>This is cart: {cart.length}</h3>

            {
                cart.map(cart => 
                    <ul> 
                          <li> <img style={{width:"100px"}} src={cart.flag} alt=""/> </li>
                        <li> Name of country : {cart.name}</li>
                        <li> Population : {cart.population}</li>
                      
                    
                    </ul>
               
                
                
                
                
                )
            }
            {/* <img src={flag} alt=""/>
            <h1>Country name : {name}</h1>
            <p>Population : {population}</p> */}

        </div>
    );
};

export default CountryDetails;