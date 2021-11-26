
import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import RandomImg from './RandomImg';
//import './Header.css';
//import '../BreedHelper/Header.css'
import '../Header.css'
import CustomSearch from './CustomSearch';


function Header({breeds}) {
    const [modelOpen,setModalOpen] = useState(false);
    
    const [name,setName] = useState("");
    const [count,setCount] = useState(0);
    
    // const [getImg,setGetImg] = useState(false);
    


    const searchHandler=()=>{
        setModalOpen(!modelOpen);
    }

    
    // const getRandomImg=()=>{
    //     setGetImg(true);
    // }

    const breedinfo=(name,count)=>{
        
        console.log(name,count);
        setName(name);
        setCount(count);
    }
    

    
    return (
        <div>
            <header className="header">
                <h2 id="title">Dog Gallery</h2>
                <button id="search" onClick={searchHandler}>Custom Search</button>

            </header>
            <div>
                <Modal isOpen={modelOpen}>
                    <div className="box">
                        <h2 id="Csearch">Custom Search</h2>
                        <button className="cancel" onClick={searchHandler}>X</button>
                    </div>
                    <CustomSearch breeds={breeds} breedinfo = {breedinfo} />
                    {/* <div className="list">
                        <div className="dlist">
                            <select className="dropdownlist"  onChange = {handleChang}>
                                {
                                    breeds.map(
                                        breed=>(
                                            <option className="list-item"  >{breed}</option>
                                        )
                                    )
                                    
                                }
                            </select>
                        </div>
                        <div className="inpt">
                            <input id="inpnumber" type="number" placeholder="Number of Images" onChange={inputNumber} />
                        </div>
                    </div>
                    <div className="getImg">
                        <button className="getbtn" onClick={getRandomImg}>Get Images</button>
                    </div>
                    */}
                    <h3>Showing {count} images of {name}</h3> 
                    
                    <div>
                        {count && name!=="" && <RandomImg 
                            count={count} 
                            name={name} 
                        />}  
                    </div>
                    
                </Modal>
            </div>
        </div>
    )
}

export default Header
