import React from 'react';


function HogDetail({ specialty, greased , weight }) {

    return (
        <div>
            <p className='subtleText'>SPECIALTY: {specialty}</p>
            <p className='subtleText'>GREASED: {greased ? "GREASED" : "NOT GREASED"}</p>
            <p className='subtleText'>WEIGHT: {weight}</p>
        
        </div>
    )
    

    
}


export default HogDetail;
