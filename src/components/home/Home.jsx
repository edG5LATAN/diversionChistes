import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  getCategories,
  getRandomsJokes,
  listLaungt
} from "../../service/ApiService.js";

function Home() {
  const [categories, setCategories] = useState([]);
  const [categorie, setcategorie] = useState([]);
  const [valueCategorie, setValueCategorie] = useState("");
  const[change,setchange]=useState(false)
  const [audioObj,setAudioObj]=useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  useEffect(()=>{
  },[change])
  const getInfo = () => {
    if (valueCategorie.trim() != "") {
      getRandomsJokes(setcategorie, valueCategorie);
      changeAudio()
      return
    } else {
      console.log("vacion value categoria");
    }
  };

  const changeAudio = () => {
  const idAudio = Math.floor(Math.random() * listLaungt.length);
  const newAudioObj = listLaungt[idAudio];
  setAudioObj(newAudioObj);
    
};

  return (
    <div className="home_content">
      <div className="home_content_box">
        <h1>The best jokes about chuck norris</h1>
        <div className="home_content_box1">
          <h3>select one category</h3>
          <select
            onChange={(res) => setValueCategorie(res.target.value)}
            name=""
            id=""
            defaultValue=""
          >
            <option value="" defaultChecked>Select one</option>
            {categories.map((res, index) => {
              return (
                <option key={index} value={res}>
                  {res}
                </option>
              );
            })}
          </select>
          <button onClick={getInfo}>Search</button>
          {categorie == "" 
          ? (
            <div className="home_content-box-in">
              <textarea name="" id="" rows="10" cols="50" readOnly></textarea>
              <img src="./img/iconoChuck.png" alt="" />
            </div>
          ) : (
            <div className="home_content-box-in">
              <textarea
                value={categorie.value}
                name={categorie.id}
                id={categorie.id}
                rows="6"
                cols="50"
                readOnly
              ></textarea>
              <img src={audioObj.imagen} alt={audioObj.nombre} />
            
              <audio 
              src={audioObj.audio} autoPlay={true}></audio>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
