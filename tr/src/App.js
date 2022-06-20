import "./styles.css";
import TurkeyMap from "turkey-map-react";
import "antd/dist/antd.css";
import { Tooltip } from "antd";
import {useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar";

const App=()=> {
  const history =useNavigate();
  const handleClick=(name,e)=>{
    history("/city", {                   //Tıkladığımız şehrin ismini alıp /city ekranına gidip şehrin bilgilerini getiriyor
      state: { name:name}
    });
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="title">Türkiye Şehir Rehberi</div>
      
      <TurkeyMap                              //Haritanın gösterildiği fonksiyon
      onClick={({ plateNumber, name }) =>
      handleClick(name)
    }
        cityWrapper={(cityComponent, cityData) => (
          <Tooltip
            title={`${cityData.plateNumber} - ${cityData.name}`}
            key={cityData.id}
          >
            {cityComponent}
          </Tooltip>
        )}
      />
    </div>
  );
}
export default App;