import React,{useEffect,useState} from 'react';
import './BreedImage.css';

import Model from './Model';

function BreedImage({breed}) {


    const [breedImg,setBreedImg] = useState("");
    const [openModel,setOpenModel] = useState(false);


    function fetchBreedImg(){
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(
            res =>{
                return res.json();
            }
        ).then(
            data =>{
                console.log(data.message);
                setBreedImg(data.message);
            }
        )
    }

    useEffect(() => {
        fetchBreedImg();
        
    },[breed])

    const breedHandle =()=>{
        setOpenModel(true);
    }


    return (
        <div className="container">
            <div className = "container-child" >
                <img src={breedImg} alt={breed} id="imgtag" onClick={breedHandle}  />
                <p className="title" >{breed}</p>
            </div>
                {openModel && <Model uniqbreed ={breed} togglePopup = {setOpenModel} toggle = {openModel}/>}
        </div>
    )
}

export default BreedImage
