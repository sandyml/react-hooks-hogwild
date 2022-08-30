import React, { useState } from 'react';
import HogDetail from './HogDetail';
// import hogsData from '../porkers_data';

function HogTiles({ hog: { name, specialty, greased, weight, image} }) {
    let [detailToggle, setDetailToggle] = useState(false)

    // function for toggle
    /*eslint no-const-assign: "error"*/
    /*eslint-env es6*/
    function  handleToggle() {
        setDetailToggle(detailToggle = !detailToggle)
    }
    
    return (
        <div className='ui eight wide column pigTile' onClick={handleToggle}>
            <h3>{name}</h3>
            <img className='tile-img' src={image} alt={name} />
            {detailToggle && <HogDetail specialty={specialty} greased={greased} weight={weight} />}
        </div>
    )
    

    
}

export default HogTiles;
