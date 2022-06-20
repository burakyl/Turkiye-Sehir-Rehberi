/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./Navbar";

import {useNavigate} from "react-router-dom"
import "./style/list.css"
const List = () => {
    const history =useNavigate();
    const handleClick=(name)=>{ 
        history("/city", {                          //Tıkladığımız şehrin ismini alıp /city ekranına gidip şehrin bilgilerini getiriyor
            state: { name:name}
          });
    }
  return (
    <div>
        <Navbar/>
        <div class="cards">
  <div class="card" name="Adana">
    <h2  class="card-title" name="Adana">Adana</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Adana" src="https://i4.hurimg.com/i/hurriyet/75/1110x740/605d851c4e3fe0040c7fcce8.jpg" alt=""/></a>
     </div>
  <div class="card" name="Adıyaman" >
    <h2 class="card-title" name="Adıyaman">Adıyaman</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Adıyaman" src="https://www.etstur.com/letsgo/wp-content/uploads/2021/03/Ad%C4%B1yaman-1.jpg" alt=""/></a>
    </div>
  <div class="card" name="Afyonkarahisar" >
    <h2 class="card-title" name="Afyonkarahisar">Afyonkarahisar</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Afyonkarahisar" src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5ed75e3118c7730ec03bf9d2.jpg" alt=""/></a>
  </div>
  <div class="card" name="Ağrı">
    <h2 class="card-title" name="Ağrı">Ağrı</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Ağrı" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/34/71/5e/mount-ararat.jpg?w=500&h=300&s=1" alt=""/></a>
     </div>
  <div class="card" name="Amasya" >
    <h2 class="card-title" name="Amasya">Amasya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Amasya" src="https://www.etstur.com/letsgo/wp-content/uploads/2021/05/Amasya-Genel-G%C3%B6r%C3%BCn%C3%BCm.jpg" alt=""/></a>
    </div>
  <div class="card" name="Ankara" >
    <h2 class="card-title" name="Ankara">Ankara</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Ankara" src="https://d3rh8btizouuof.cloudfront.net/images/sehir/ankara.jpg" alt=""/></a>
  </div>
  <div class="card" name="Antalya">
    <h2 class="card-title" name="Antalya">Antalya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Antalya" src="https://www.gunisigigazetesi.net/images/haberler/2022/02/antalya-ya-gidildiginde-yapilmasi-gereken-4-sey_355e2.jpg" alt=""/></a>
     </div>
  <div class="card" name="Artvin" >
    <h2 class="card-title" name="Artvin">Artvin</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Artvin" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Artvin-2611076.jpg" alt=""/></a>
    </div>
  <div class="card" name="Aydın" >
    <h2 class="card-title" name="Aydın">Aydın</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Aydın" src="https://iasbh.tmgrup.com.tr/29c2bb/650/344/0/161/1152/765?u=https://isbh.tmgrup.com.tr/sbh/2019/09/17/aydinda-gezilecek-yerler-aydinda-gorulmesi-gereken-10-guzel-yer-1568722221993.jpg" alt=""/></a>
  </div>
  <div class="card" name="Balıkesir">
    <h2 class="card-title" name="Balıkesir">Balıkesir</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Balıkesir" src="https://www.balikesirtaksiduragi.com/wp-content/uploads/2021/10/balikesir-cumhuriyet_meydani_1.jpeg" alt=""/></a>
     </div>
  <div class="card" name="Bilecik" >
    <h2 class="card-title" name="Bilecik">Bilecik</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bilecik" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/5e/b4/e1/bilecik-seyh-edebali.jpg?w=600&h=400&s=1" alt=""/></a>
    </div>
  <div class="card" name="Bingöl" >
    <h2 class="card-title" name="Bingöl">Bingöl</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bingöl" src="https://bingol.bel.tr/storage/media/2021/08/29/2244/c/bingol-big.jpg" alt=""/></a>
  </div>
  <div class="card" name="Bitlis">
    <h2 class="card-title" name="Bitlis">Bitlis</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bitlis" src="https://i4.hurimg.com/i/hurriyet/75/770x0/62067368c03c0e06e0af6a15.jpg" alt=""/></a>
     </div>
  <div class="card" name="Bolu" >
    <h2 class="card-title" name="Bolu">Bolu</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bolu" src="https://www.kulturportali.gov.tr/repoKulturPortali/large/uploads/bolu-golcuk.1-foto.fazil-karaduman.jpg?format=jpg&quality=50" alt=""/></a>
    </div>
  <div class="card" name="Burdur" >
    <h2 class="card-title" name="Burdur">Burdur</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Burdur" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Burdur_manzara_-_panoramio.jpg/640px-Burdur_manzara_-_panoramio.jpg" alt=""/></a>
  </div>
  <div class="card" name="Bursa">
    <h2 class="card-title" name="Bursa">Bursa</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bursa" src="https://www.pamukkale.com.tr/images/sehirler/bursa-1.jpg" alt=""/></a>
     </div>
  <div class="card" name="Çanakkale" >
    <h2 class="card-title" name="Çanakkale">Çanakkale</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Çanakkale" src="https://www.dalogluturizm.com/image/cache/Turlar/Yurt-ici-Kultur-Turlari/canakkale-turu/canakkale-06-1000x600.jpg" alt=""/></a>
    </div>
  <div class="card" name="Çankırı" >
    <h2 class="card-title" name="Çankırı">Çankırı</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Çankırı" src="https://www.bilgiustam.com/resimler/2015/04/6466_cankiri.jpg" alt=""/></a>
  </div>
  <div class="card" name="Çorum">
    <h2 class="card-title" name="Çorum">Çorum</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Çorum" src="http://www.corumhaber.net/images/haberler/2018/02/haydi_corumlular_birliktebuyuk_corum_yuruyusune_h77598_c50d3.jpg" alt=""/></a>
     </div>
  <div class="card" name="Denizli" >
    <h2 class="card-title" name="Denizli">Denizli</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Denizli" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/TR_Denizli_asv2020-02_img11_view_from_Teleferik_viewpoint.jpg/800px-TR_Denizli_asv2020-02_img11_view_from_Teleferik_viewpoint.jpg" alt=""/></a>
    </div>
  <div class="card" name="Diyarbakır" >
    <h2 class="card-title" name="Diyarbakır">Diyarbakır</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Diyarbakır" src="https://www.trthaber.com/resimler/1766000/diyarbakir-iha-1766380_2.jpg" alt=""/></a>
  </div>
  <div class="card" name="Edirne">
    <h2 class="card-title" name="Edirne">Edirne</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Edirne" src="https://cdnuploads.aa.com.tr/uploads/Contents/2019/04/15/thumbs_b_c_1c87775133a0675a1bf0aa5f88aa4c54.jpg" alt=""/></a>
     </div>
  <div class="card" name="Elazığ" >
    <h2 class="card-title" name="Elazığ">Elazığ</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Elazığ" src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/04/18/thumbs_b_c_ad9fa203a8ebb11d1684b8d41c651d05.jpg?v=114153" alt=""/></a>
    </div>
  <div class="card" name="Erzincan" >
    <h2 class="card-title" name="Erzincan">Erzincan</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Erzincan" src="https://www.erzincan.bel.tr/upload/slaytlar/2022_03_22-WjKWdCN36LsGdyMiin77.jpg" alt=""/></a>
  </div>
  <div class="card" name="Erzurum">
    <h2 class="card-title" name="Erzurum">Erzurum</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Erzurum" src="https://www.kiralacar.com/blog/wp-content/uploads/2019/07/Erzurum-gezi-rehberi.jpg" alt=""/></a>
     </div>
  <div class="card" name="Eskişehir" >
    <h2 class="card-title" name="Eskişehir">Eskişehir</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Eskişehir" src="https://d3rh8btizouuof.cloudfront.net/images/sehir/eskisehir.jpg" alt=""/></a>
    </div>
  <div class="card" name="Gaziantep" >
    <h2 class="card-title" name="Gaziantep">Gaziantep</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Gaziantep" src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Gaziantep/gaziantep-sehir-rehberi.jpg" alt=""/></a>
  </div>
  <div class="card" name="Giresun">
    <h2 class="card-title" name="Giresun">Giresun</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Giresun" src="https://www.bilet.com/images/air/cities/giresun.jpg" alt=""/></a>
     </div>
  <div class="card" name="Gümüşhane" >
    <h2 class="card-title" name="Gümüşhane">Gümüşhane</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Gümüşhane" src="https://i.dunya.com/storage/old/files/2018/1/4/397162/397162.jpg" alt=""/></a>
    </div>
  <div class="card" name="Hakkari" >
    <h2 class="card-title" name="Hakkari">Hakkari</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Hakkari" src="https://www.diyadinnet.com/d/etiket/hakkari-42.jpg" alt=""/></a>
  </div>
  <div class="card" name="Hatay">
    <h2 class="card-title" name="Hatay">Hatay</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Hatay" src="https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-Ekran-Al%25C4%25B1nt%25C4%25B1s%25C4%25B1-18-e1505044890395.png" alt=""/></a>
     </div>
  <div class="card" name="Isparta" >
    <h2 class="card-title" name="Isparta">Isparta</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Isparta" src="https://d3rh8btizouuof.cloudfront.net/images/sehir/isparta.jpg" alt=""/></a>
    </div>
  <div class="card" name="İçel" >
    <h2 class="card-title" name="İçel">İçel</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="İçel" src="https://www.yeniemlak.com/resize/785x450/1/8/7/mersine-yatirimcilarin-ilgisi-devam-etti-projesi-187954-1598362669.jpeg" alt=""/></a>
  </div>
  <div class="card" name="İstanbul">
    <h2 class="card-title" name="İstanbul">İstanbul</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="İstanbul" src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngt_we_bistanbul_gettyimages-668990458_hr.jpg?w=1600&h=900" alt=""/></a>
     </div>
  <div class="card" name="İzmir" >
    <h2 class="card-title" name="İzmir">İzmir</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="İzmir" src="https://imgrosetta.mynet.com.tr/file/12982460/12982460-640x380.png" alt=""/></a>
    </div>
  <div class="card" name="Kars" >
    <h2 class="card-title" name="Kars">Kars</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kars" src="https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/05123820/kars.jpg" alt=""/></a>
  </div>
  <div class="card" name="Kastamonu">
    <h2 class="card-title" name="Kastamonu">Kastamonu</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kastamonu" src="https://im.haberturk.com/2021/06/18/ver1624019794/3108255_810x458.jpg" alt=""/></a>
     </div>
  <div class="card" name="Kayseri" >
    <h2 class="card-title" name="Kayseri">Kayseri</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kayseri" src="https://www.kiralacar.com/blog/wp-content/uploads/2019/08/kayseri-gezi-rehberi-T%C3%9CRK%C4%B0YE%E2%80%99N%C4%B0N-K%C3%9CLT%C3%9CR-MOZA%C4%B0%C4%9E%C4%B0-KAYSER%C4%B0.jpg" alt=""/></a>
    </div>
  <div class="card" name="Kırklareli" >
    <h2 class="card-title" name="Kırklareli">Kırklareli</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kırklareli" src="https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-kirklareli-nasil-gidilir-gorsel-696x462.jpg" alt=""/></a>
  </div>
  <div class="card" name="Kırşehir">
    <h2 class="card-title" name="Kırşehir">Kırşehir</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kırşehir" src="https://blog.obilet.com/wp-content/uploads/2019/09/Kent-Park-K%C4%B1r%C5%9Fehir.jpg" alt=""/></a>
     </div>
  <div class="card" name="Kocaeli" >
    <h2 class="card-title" name="Kocaeli">Kocaeli</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kocaeli" src="https://static.daktilo.com/sites/535/uploads/2022/02/04/large/zmit-genel-13-1643958816.jpg" alt=""/></a>
    </div>
  <div class="card" name="Konya" >
    <h2 class="card-title" name="Konya">Konya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Konya" src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/07/23/129973.jpg" alt=""/></a>
  </div>
  <div class="card" name="Kütahya">
    <h2 class="card-title" name="Kütahya">Kütahya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kütahya" src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/08/12/thumbs_b_c_b8f0647ca4492786176feb421807b5c1.jpg" alt=""/></a>
     </div>
  <div class="card" name="Malatya" >
    <h2 class="card-title" name="Malatya">Malatya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Malatya" src="http://gezilecekyerler.com/wp-content/uploads/2017/06/Malatya.jpg" alt=""/></a>
    </div>
  <div class="card" name="Manisa" >
    <h2 class="card-title" name="Manisa">Manisa</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Manisa" src="https://www.manisahaberleri.com/images/haberler/2019/02/iste_manisa_nin_yeni_nufusu_h95523_56952.jpg" alt=""/></a>
  </div>
  <div class="card" name="Kahramanmaraş">
    <h2 class="card-title" name="Kahramanmaraş">Kahramanmaraş</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kahramanmaraş" src="https://kahramanmaras.bel.tr/fs/fields/image_gallery/gallery_image/2015/01/30/dsc_3524.jpg" alt=""/></a>
     </div>
  <div class="card" name="Mardin" >
    <h2 class="card-title" name="Mardin">Mardin</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Mardin" src="https://www.kulturportali.gov.tr/repoKulturPortali/Dokumanlar/MARDINGUNEYDENGORUNUMU2_20160229153250593.jpg?format=jpg&quality=50" alt=""/></a>
    </div>
  <div class="card" name="Muğla" >
    <h2 class="card-title" name="Muğla">Muğla</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Muğla" src="https://www.cumhuriyet.com.tr/Archive/2020/11/27/1794202/kapak_095739.jpg" alt=""/></a>
  </div>
  <div class="card" name="Muş">
    <h2 class="card-title" name="Muş">Muş</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Muş" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Mush_1213.jpg" alt=""/></a>
     </div>
  <div class="card" name="Nevşehir" >
    <h2 class="card-title" name="Nevşehir">Nevşehir</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Nevşehir" src="https://www.psikonterapi.com/wp-content/uploads/2018/08/Nev%C5%9Fehir-Psikolojik-Destek-ve-Terapi-Merkezi.jpg" alt=""/></a>
    </div>
  <div class="card" name="Niğde" >
    <h2 class="card-title" name="Niğde">Niğde</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Niğde" src="https://cdn.otelleri.net/landing/nigde/gezi-rehberi/bor-3661-9d.jpg" alt=""/></a>
  </div>
  <div class="card" name="Ordu">
    <h2 class="card-title" name="Ordu">Ordu</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Ordu" src="https://www.doka.org.tr/dosyalar/page_108/1554895337_1.jpg" alt=""/></a>
     </div>
  <div class="card" name="Rize" >
    <h2 class="card-title" name="Rize">Rize</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Rize" src="https://img.otelz.com/s3/placeimages/turkey/karadeniz/rize_rize-firtina-vadisi-8d5447.jpg" alt=""/></a>
    </div>
  <div class="card" name="Sakarya" >
    <h2 class="card-title" name="Sakarya">Sakarya</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Sakarya" src="https://i.cnnturk.com/i/cnnturk/75/740x416/60c2955517aca90e644bbffe.jpg" alt=""/></a>
  </div>
  <div class="card" name="Samsun">
    <h2 class="card-title" name="Samsun">Samsun</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Samsun" src="https://blog.microfon.co/wp-content/uploads/2019/11/4.png" alt=""/></a>
     </div>
  <div class="card" name="Siirt" >
    <h2 class="card-title" name="Siirt">Siirt</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Siirt" src="https://www.dika.org.tr/assets/upload/fotograflar/siirt.jpg" alt=""/></a>
    </div>
  <div class="card" name="Sinop" >
    <h2 class="card-title" name="Sinop">Sinop</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Sinop" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sinop_Overview_2009.JPG/1200px-Sinop_Overview_2009.JPG" alt=""/></a>
  </div>
  <div class="card" name="Sivas">
    <h2 class="card-title" name="Sivas">Sivas</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Sivas" src="https://blog.obilet.com/wp-content/uploads/2018/09/Sivasta-Gezilecek-Yerler.jpg" alt=""/></a>
     </div>
  <div class="card" name="Tekirdağ" >
    <h2 class="card-title" name="Tekirdağ">Tekirdağ</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Tekirdağ" src="https://www.tekirdag.bel.tr/content/WebSource/image/galeri/menu_foto/kent_rehberi.jpg" alt=""/></a>
    </div>
  <div class="card" name="Tokat" >
    <h2 class="card-title" name="Tokat">Tokat</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Tokat" src="https://www.kulturportali.gov.tr/contents/images/05022013_a4300353-f24e-41c5-ae6b-9a249a68380a.jpg" alt=""/></a>
  </div>
  <div class="card" name="Trabzon">
    <h2 class="card-title" name="Trabzon">Trabzon</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Trabzon" src="https://im.haberturk.com/2021/06/22/ver1624361235/3111775_810x458.jpg" alt=""/></a>
     </div>
  <div class="card" name="Tunceli" >
    <h2 class="card-title" name="Tunceli">Tunceli</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Tunceli" src="https://i2.milimaj.com/i/milliyet/75/1200x675/5f5ff5555542871184688de5.jpg" alt=""/></a>
    </div>
  <div class="card" name="Şanlıurfa" >
    <h2 class="card-title" name="Şanlıurfa">Şanlıurfa</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Şanlıurfa" src="https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/24/sanliurfanin_tarihi_yerleri_ve_yemekleri_gezilecek_yerler_meshur_lezzetler_1624199425_3525.jpg" alt=""/></a>
  </div>
  <div class="card" name="Uşak">
    <h2 class="card-title" name="Uşak">Uşak</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Uşak" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lydian_Cilandiras_Bridge_Karahalli_Usak_Province_Turkey.jpg/640px-Lydian_Cilandiras_Bridge_Karahalli_Usak_Province_Turkey.jpg" alt=""/></a>
     </div>
  <div class="card" name="Van" >
    <h2 class="card-title" name="Van">Van</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Van" src="https://i20.haber7.net/resize/1300x731//haber/haber7/photos/2022/04/van_nerede_vanda_gezilecek_yerler_nerelerdir_vana_nasil_gidilir_1643198912_459.jpg" alt=""/></a>
    </div>
  <div class="card" name="Yozgat" >
    <h2 class="card-title" name="Yozgat">Yozgat</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Yozgat" src="https://i2.milimaj.com/i/milliyet/75/0x0/5f5fee715542871184688da4.jpg" alt=""/></a>
  </div>
  <div class="card" name="Zonguldak">
    <h2 class="card-title" name="Zonguldak">Zonguldak</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Zonguldak" src="https://d3rh8btizouuof.cloudfront.net/images/sehir/zonguldak.jpg" alt=""/></a>
     </div>
  <div class="card" name="Aksaray" >
    <h2 class="card-title" name="Aksaray">Aksaray</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Aksaray" src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/05/thumbs/800x531/91088.jpg" alt=""/></a>
    </div>
  <div class="card" name="Bayburt" >
    <h2 class="card-title" name="Bayburt">Bayburt</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bayburt" src="https://www.turizmgunlugu.com/wp-content/uploads/2018/04/Bayburt-Kalesi-ve-%C3%87oruh-Nehri.jpg" alt=""/></a>
  </div>
  <div class="card" name="Karaman">
    <h2 class="card-title" name="Karaman">Karaman</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Karaman" src="https://cdn.otelleri.net/landing/karaman/gezi-rehberi/ermenek-3454-b5.jpg" alt=""/></a>
     </div>
  <div class="card" name="Kırıkkale" >
    <h2 class="card-title" name="Kırıkkale">Kırıkkale</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kırıkkale" src="https://www.gidilmeli.com/sayfa/resim/d5fa806f331adae1ce8e0663609729e0.JPG" alt=""/></a>
    </div>
  <div class="card" name="Batman" >
    <h2 class="card-title" name="Batman">Batman</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Batman" src="https://www.yerelnet.org.tr/wp-content/uploads/2021/05/Yerel-Net-127-6.jpg" alt=""/></a>
  </div>
  <div class="card" name="Şırnak">
    <h2 class="card-title" name="Şırnak">Şırnak</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Şırnak" src="https://img.otelz.com/s3/placeimages/turkey/sirnak/merkez_sirnak-merkez-f8b67e.jpg" alt=""/></a>
     </div>
  <div class="card" name="Bartın" >
    <h2 class="card-title" name="Bartın">Bartın</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Bartın" src="http://yurtmotoru.com/assets/img/iller/bartin.jpg" alt=""/></a>
    </div>
  <div class="card" name="Ardahan" >
    <h2 class="card-title" name="Ardahan">Ardahan</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Ardahan" src="https://im.haberturk.com/yerel_haber/2020/06/30/ver1593537061/79093387_620x410.jpg" alt=""/></a>
  </div>
  <div class="card" name="Iğdır">
    <h2 class="card-title" name="Iğdır">Iğdır</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Iğdır" src="https://peakvisor.com/photo/7/75/Mount_Ararat_and_the_Yerevan_skyline_in_spring_(50mm).jpg" alt=""/></a>
     </div>
  <div class="card" name="Yalova" >
    <h2 class="card-title" name="Yalova">Yalova</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Yalova" src="https://cdn.goturkiye.com/yalova/yalova-city-centre.jpg" alt=""/></a>
    </div>
  <div class="card" name="Karabük" >
    <h2 class="card-title" name="Karabük">Karabük</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Karabük" src="https://i.hbrcdn.com/haber/2020/06/16/karabuk-te-gezilmesi-gereken-yerler-nerelerdir-13328484_263_amp.jpg" alt=""/></a>
  </div>
  <div class="card" name="Kilis">
    <h2 class="card-title" name="Kilis">Kilis</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Kilis" src="https://i2.milimaj.com/i/milliyet/75/0x410/61b2455386b24a1a50ac5fe2.jpg" alt=""/></a>
     </div>
  <div class="card" name="Osmanyie" >
    <h2 class="card-title" name="Osmaniye">Osmaniye</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Osmaniye" src="https://staticb.yolcu360.com/blog/wp-content/uploads/2019/01/08152433/Osmaniye-gezi-rehberi-3.jpg" alt=""/></a>
    </div>
  <div class="card" name="Düzce" >
    <h2 class="card-title" name="Düzce">Düzce</h2><a onClick={(e)=>handleClick(e.target.name)}>
    <img name="Düzce" src="https://i2.milimaj.com/i/milliyet/75/0x0/61bb621386b24a1118603d59.jpg" alt=""/></a>
  </div>
</div>

    </div>
  );
};
export default List;
