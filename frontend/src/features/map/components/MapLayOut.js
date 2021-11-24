import React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/map/style/Map.css'
import { LocalMap, LocalMapInfo, Options } from "features/map/index"


const MapLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="Mapcontainer">
        <span class="Header"><Header/></span>    

        <span class ="item14"><Options/></span><br/>
        <span class ="item15"><LocalMap/></span><br/>
        <span class ="item16"><LocalMapInfo/></span>

        <span class="Footer"><Footer/></span>
      </div>
    </div>
  );
}

export default MapLayOut;