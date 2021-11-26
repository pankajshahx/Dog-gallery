import React,{useState} from 'react';
//import './Header.css'
import '../Header.css'

function CustomSearch({breeds,breedinfo}) {
    const [breedName,setBreedName] = useState("");
    const [imgCount,setImgCount] = useState(0);


    const handleChang=(e)=>{
        setBreedName(e.target.value);
    }
    const inputNumber=(e)=>{
        setImgCount(e.target.value);
    }


    const handleData = (e) =>{
        e.preventDefault();
        if(breedName==""){
            alert("Enter Breed Name");
        }else if(imgCount<1 || imgCount>30){
            alert("Plz Enter A valid numver")
        }else{
            


            breedinfo(breedName,imgCount);
            setBreedName("");
            setImgCount(0);

        }
    }

    
    return (
        <div>
            <form onSubmit={handleData} >
                <div className="dlist">
                    <select className="dropdownlist" onChange={handleChang} value={breedName} name="" id="">
                        {
                            breeds.map(
                                breed=>(
                                    <option className="list-item"   >{breed}</option>
                                )
                            )
                            
                        }
                    </select>
                </div>
                    <div className="inpt">
                        <input id="inpnumber" type="number"  onChange={inputNumber} placeholder="Number of Images" />
                    </div>
                    <div className="getImg">
                        <button className="getbtn" type="submit">Get Images</button>
                    </div>

            </form>
        </div>
    )
}

export default CustomSearch
