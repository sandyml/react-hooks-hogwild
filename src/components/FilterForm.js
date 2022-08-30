import React from 'react';
// import HogTiles from './HogTiles';


function FilterForm({ handleDropDown, handleCheckBox, dropDown, checkBox }) {
    // console.log("State Drop Down", dropDown)
    return (
        <form>
            <input 
            type="checkbox" 
            value={checkBox ? "true" : ''} 
            onChange={handleCheckBox} 
            />
            <select onChange={handleDropDown} value={dropDown} >
                <option value="All">All</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </form>
    )
}

export default FilterForm;
