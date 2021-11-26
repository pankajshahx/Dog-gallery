import Modal from 'react-modal';
import React, { useState,useEffect } from 'react';


import './Modal.css';
//import '../components/'
import '../Dogbreed.css'
// import '../Dogbreed'
//import SubBreedImg from './SubBreedImg';

import SubBreedImg from './SubBreedImg';

function Model({uniqbreed, togglePopup , toggle}) {

    //console.log(uniqbreed);

    const [subBreed,setSubBreed] = useState([]);
    const [randomBreedImg,setRandomBreedImg] = useState([]);

    function fetchRandomBreedImg(){
        fetch(`https://dog.ceo/api/breed/${uniqbreed}/images/random/3`).then(
            res =>{
                return res.json();
            }
        ).then(
            data =>{
                console.log(data.message);
                setRandomBreedImg(data.message);
            }
        )
    }

    function fetchSubBreed(){
        fetch(`https://dog.ceo/api/breed/${uniqbreed}/list`).then(
            res =>{
                return res.json();
            }
        ).then(
            data =>{
                console.log(data.message);
                setSubBreed(data.message);
            }
        )
    }

    useEffect(() => {
        fetchSubBreed();
        fetchRandomBreedImg();
        
    },[uniqbreed])

    
    return (
        <div className="main">
            {/* <div className="popup--back">
                <div className="popup--content">
                    <div className="content">
                        <h2 className="heading">{uniqbreed}</h2>
                        <button className="popup--close" onClick={()=>{togglePopup(!toggle)}}>x</button>
                    </div> */}
                    
            <Modal isOpen={toggle}>
                <div className="container">
                    <div className="childcontainer">
                        <h2 className="heading">{uniqbreed}</h2>
                        <button className="close" onClick={()=>{togglePopup(!toggle)}}>X</button>
                    </div>
                </div>
                <h3>Sub-Breeds</h3>
                <div className="image-contains">
                        {
                            subBreed.length?
                            subBreed.map(
                                subB=>(
                                    <div className="child">
                                        < SubBreedImg uniqsubBreed = {subB} uniqbreed={uniqbreed} />
                                    </div>
                                )
                            ):
                            <h1 style={{color:'red'}}>No SubBreed</h1>

                        }

                </div>
                <h3>More Images</h3>
                <div className="image-contains">
                        {
                            randomBreedImg.map(
                                randomImg=>(
                                    <div className="child">
                                        <img src={randomImg} alt={randomImg} />
                                    </div>
                                )
                            )

                        }

                </div>

                
            </Modal>
            

                    
        </div>
        
    )
}

export default Model
