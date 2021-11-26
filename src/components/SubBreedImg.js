import React,{useState,useEffect} from 'react';
//import './BreedImage.css';
//import '../HomeComponent/subbreed/BreedImage.css'
//import '../HomeComponent/subbreed/BreedImage.css';
import './BreedImage.css'

function SubBreedImg({uniqsubBreed,uniqbreed}) {

    //console.log(uniqbreed);


    const [subBreedImg,setSubBreedImg] = useState("");

    function fetchSubBreedImg(){
        fetch(`https://dog.ceo/api/breed/${uniqbreed}/${uniqsubBreed}/images/random`).then(
            res =>{
                return res.json();
            }
        ).then(
            data =>{
                console.log(data.message);
                setSubBreedImg(data.message);
            }
        )
    }

    useEffect(() => {
        fetchSubBreedImg();
        
    },[uniqsubBreed]);



    return (
        <div>
                <div className = "container-child">
                    <img  src={subBreedImg} alt={uniqsubBreed} />
                    <p className="title">{uniqsubBreed}</p>
                </div>
        </div>
    )
}

export default SubBreedImg
