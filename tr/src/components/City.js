import React, { useEffect, useState } from "react";
import "./style/city.css";
import axios from "axios"                       //veri çekmeye yarıyor
import { useLocation } from "react-router-dom";
import Navbar2 from "./Navbar2";


const City = () => {
  const location = useLocation();
  const cityLink=location.state.name.toLowerCase()
  const [city,setCity]=useState([]);
  useEffect(()=>{
    const loadCity=async()=>{
      
    const response =await axios.get(                //Haritadan gelen şehir ismine göre backendten şehir bilgilerini veriyor
      `http://localhost:4000/api/city/${cityLink}`
    );
    setCity(response.data.data);
    

    }
    loadCity();
  },[])
  
  return (
    <body>
      <Navbar2/>
      <div class="division0">
        <h1> {city.cityName}</h1>

        <div class="division1">
           <img src={`${city.cityImg}`}/> {        /* link girmediğimiz için altları çizili */}
        </div>

        <div class="division2">
          <b>{city.cityName} Hakkında</b>
          <p>
            {city.cityInfo}
          </p>
          <b>{city.cityName}'da Görülecek Yerler</b>
          <br/>
          <b>{city.city1Title}</b>
          <p>
            {city.city1}
          </p>
          <br/>
          <b>{city.city2Title}</b>
          <p>
            {city.city2}
          </p>
          <br/>
          <b>{city.city3Title}</b>
          <p>
            {city.city3}
          </p>
          <br/>
          <b>{city.city4Title}</b>
          <p>
            {city.city4}
          </p>
          <br/>
          <b>{city.city5Title}</b>
          <p>
            {city.city5}
          </p>
          <br/>
          <b>{city.city6Title}</b>
          <p>
            {city.city6}
          </p>
          <br/>
          <b>{city.city7Title}</b>
          <p>
            {city.city7}
          </p>
          <br/>
          <b>{city.city8Title}</b>
          <p>
            {city.city8}
          </p>
          <br/>
          <b>{city.city9Title}</b>
          <p>
            {city.city9}
          </p>
          <br/>
          <b>{city.city10Title}</b>
          <p>
            {city.city10}
          </p>
          <br/>
          <b>{city.city11Title}</b>
          <p>
            {city.city11}
          </p>
          <br/>
          <b>{city.city12Title}</b>
          <p>
            {city.city12}
          </p>
          <br/>
          <b>{city.city13Title}</b>
          <p>
            {city.city13}
          </p>
          <br/>
          <b>{city.city14Title}</b>
          <p>
            {city.city14}
          </p>
          <br/>
          <b>{city.city15Title}</b>
          <p>
            {city.city15}
          </p>
        </div>
      </div>
    </body>
  );
};
export default City;
