import React from 'react'

const Card = ({cardTitle ,onClick}) => {
 
    return (
            <div class="card h-100 text-white bg-secondary" style={{"width": "10rem"}}>
               <img src="https://restcountries.eu/rest/v2/flag" class="card-img-top" alt="country flag"/>
               <div class="card-body">
                 <h5 class="card-title">{cardTitle}</h5>
                 <a href="#" class="btn btn-info" onClick={onClick} id={cardTitle}>more</a>
               </div>
    
            </div>        
    );
};

export default Card
