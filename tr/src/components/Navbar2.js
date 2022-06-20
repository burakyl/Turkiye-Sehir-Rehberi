import React from "react";
import "./style/navbar2.css"

const Navbar2=()=>{
    return(
        <div>
               <ul>
  <li><a href="/">Ana Sayfa</a></li>
  <li class="dropdown2">
    <a href="/city-list" class="dropbtn2">Şehirler</a>
    <div class="dropdown-content2">
    </div>
  </li>
</ul>

        </div>
    )
}
export default Navbar2;