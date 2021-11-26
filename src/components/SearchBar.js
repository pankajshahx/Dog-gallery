import React, { useState } from 'react'

import '../App.css'

function SearchBar(props) {
    //console.log(props);
    // const [breed,setBreed] = useState("");


    return (
        <div id="searchbreed">
            <input type="search" className="searchbar" value = {props.term} 
            placeholder="Type here to filter by breed" 
            onChange={(e)=>{props.searchHandler(e.target.value);}} />
        </div>
    )
}

export default SearchBar
