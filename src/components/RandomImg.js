import React,{useEffect, useState} from 'react';
import '../Header.css'


function RandomImg(props) {


    console.log(props);
    const [randomBreedImg,setRandomBreedImg] = useState([]);
    function fetchRandomBreedImg(){
        fetch(`https://dog.ceo/api/breed/${props.name}/images/random/${props.count}`).then(
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

    useEffect(() => {
        fetchRandomBreedImg();
        
    },[props.name]);

    

    return (
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
    )
}

export default RandomImg
