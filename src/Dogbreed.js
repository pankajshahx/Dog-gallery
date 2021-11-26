import React, { useState,useEffect } from 'react';
import './Dogbreed.css';
import BreedImage from './components/BreedImage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function Dogbreed() {

    const [breeds,setBreed] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    const [searchResult,setSearchResult] = useState([]);
    

    function fetchBreeds(){
        fetch('https://dog.ceo/api/breeds/list/all').then(
            res =>{
                return res.json();
            }
        ).then(
            data =>{
                // console.log(data.message);
                console.log(Object.keys(data.message)); 
                
                setBreed(Object.keys(data.message));
            }
        )
    }
        
    useEffect(() => {
        fetchBreeds();
        
    },[])


    const handleSearch = (searchTerm) =>{
        console.log(searchTerm);
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newbreedList = breeds.filter((breed)=>{
                return breed.includes(searchTerm);
            });
            setSearchResult(newbreedList);
        }else{
            setSearchResult(breeds);
        }
    }


    return (
        <div>
            <Header breeds={breeds} />
            <SearchBar term = {searchTerm} searchHandler={handleSearch}  />
            <div className="image-contains">
                
                {
                    searchResult.map(
                        breed =>(
                            <div className="child">
                                <BreedImage breed = {breed}/>
                            </div>
                            
                        )
                    )
                }
                
            </div>
        </div>
    )
}

export default Dogbreed
