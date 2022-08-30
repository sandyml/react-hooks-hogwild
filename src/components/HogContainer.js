import React, { useState } from 'react';
import HogTiles from './HogTiles';
import FilterForm from './FilterForm';
import hogsData from '../porkers_data';


function HogContainer() {
    const [hogs] = useState(hogsData) 
    const [dropDown, setDropDown] = useState("All")
    // const [dropDown, setDropDown] = useState(false)
    // const [checkBox, setCheckBox] = useState("All")
    let [checkBox, setCheckBox] = useState(false)

    // function for dropdown
    function handleDropDown(event) {
        // console.log("Drop Down", handleDropDown)
        const handle = event.target.value
        setDropDown(handle)
    }

    // function for checkbox
    // eslint-disable-next-line
    function handleCheckBox() {
        // console.log("Check Box", handleCheckBox)
        setCheckBox(checkBox = !checkBox)
    }

    // function for filter
    function hogFilter() {
        if(checkBox) {
        return hogs.filter(hog => hog.greased)
        } else {
            return hogs
        }
    }

    // function for sorting
    function sortHogs() {
        const array = hogFilter()

        if(dropDown === "Weight") {
            return array.sort((a, b) => a.weight - b.weight )
        } else if(dropDown === "Name") {
            return array.sort((a, b) => a.name.localeCompare(b.name))
        } else {
            return array
        }
    }

    const hogTile = sortHogs().map((hog, index) => <HogTiles hog={hog} key={index} />)
    
    return (
        <div>
            <div>
                <FilterForm 
                handleDropDown={handleDropDown} 
                handleCheckBox={handleCheckBox} 
                checkBox={checkBox}
                dropDown={dropDown}
                />
            </div>
            <div className="ui grid container" >
                {hogTile}
            </div>
        </div>
    )
    

    
}

export default HogContainer;
