import React from "react";
import Info from "./Info";
import { Map, Marker } from "pigeon-maps";

const Googlemap = () => {
  return (
    <div className="App">
      <Map height={400} defaultCenter={[52.45735, 13.54081]} defaultZoom={11}>
        <Marker width={50} anchor={[52.45735, 13.54081]} />
        <Info />
      </Map>
    </div>
  );
}
export default Googlemap;