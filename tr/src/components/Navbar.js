/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./style/navbar.css"
import {useNavigate} from "react-router-dom"

const Navbar =()=>{
  const history =useNavigate();

    const handleClick=(name)=>{
        history("/city", {
            state: { name:name}
          });
    }
    return(
        <div className="fixed">
            <ul>
  <li><a href="/">Ana Sayfa</a></li>
  <li class="dropdown">
    <a href="/city-list" class="dropbtn">Şehirler</a>
    <div class="dropdown-content">
    <a onClick={(e)=>handleClick(e.target.name)} name="Adana">Adana</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Adıyaman">Adıyaman</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Afyonkarahisar">Afyonkarahisar</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Ağrı">Ağrı</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Amasya">Amasya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Ankara">Ankara</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Antalya">Antalya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Artvin">Artvin</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Aydın">Aydın</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Balıkesir">Balıkesir</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bilecik">Bilecik</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bingöl">Bingöl</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bitlis">Bitlis</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bolu">Bolu</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Burdur">Burdur</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bursa">Bursa</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Çanakkale">Çanakkale</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Çankırı">Çankırı</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Çorum">Çorum</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Denizli">Denizli</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Diyarbakır">Diyarbakır</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Edirne">Edirne</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Elazığ">Elazığ</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Erzincan">Erzincan</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Erzurum">Erzurum</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Eskişehir">Eskişehir</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Gaziantep">Gaziantep</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Giresun">Giresun</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Gümüşhane">Gümüşhane</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Hakkâri">Hakkâri</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Hatay">Hatay</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Isparta">Isparta</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Mersin">Mersin</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="İstanbul">İstanbul</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="İzmir">İzmir</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kars">Kars</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kastamonu">Kastamonu</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kayseri">Kayseri</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kırklareli">Kırklareli</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kırşehir">Kırşehir</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kocaeli">Kocaeli</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Konya">Konya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kütahya">Kütahya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Malatya">Malatya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Manisa">Manisa</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kahramanmaraş">Kahramanmaraş</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Mardin">Mardin</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Muğla">Muğla</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Muş">Muş</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Nevşehir">Nevşehir</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Niğde">Niğde</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Ordu">Ordu</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Rize">Rize</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Sakarya">Sakarya</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Samsun">Samsun</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Siirt">Siirt</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Sinop">Sinop</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Sivas">Sivas</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Tekirdağ">Tekirdağ</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Tokat">Tokat</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Trabzon">Trabzon</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Tunceli">Tunceli</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Şanlıurfa">Şanlıurfa</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Uşak">Uşak</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Van">Van</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Yozgat">Yozgat</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Zonguldak">Zonguldak</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Aksaray">Aksaray</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bayburt">Bayburt</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Karaman">Karaman</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kırıkkale">Kırıkkale</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Batman">Batman</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Şırnak">Şırnak</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Bartın">Bartın</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Ardahan">Ardahan</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Iğdır">Iğdır</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Yalova">Yalova</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Karabük">Karabük</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Kilis">Kilis</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Osmaniye">Osmaniye</a>
    <a onClick={(e)=>handleClick(e.target.name)} name="Düzce">Düzce</a>
    </div>
  </li>
</ul>
        </div>
    )
}
export default Navbar;