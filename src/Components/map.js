import React from 'react';
import { Map, TileLayer, Popup, Rectangle, Tooltip, Marker} from 'react-leaflet';
import L from 'leaflet';
import './map.css';

import { DriftMarker } from "leaflet-drift-marker"

const theStyle = {
    width: "80%",
    height: "600px"
};

export const droneIcon = new L.Icon({
    iconUrl: require('../assets/drone_purple.svg'),
    iconRetinaUrl: require('../assets/drone_purple.svg'),
    iconAnchor: [12, 12],
    popupAnchor: [3, -15],
    iconSize: [25, 25],
    shadowUrl: require('../assets/shadow.svg'),
    shadowSize: [25, 25],
    shadowAnchor: [9, 10],
  })

  export const homeIcon = new L.Icon({
    iconUrl: require('../assets/home.svg'),
    iconRetinaUrl: require('../assets/home.svg'),
    iconAnchor: [12, 12],
    popupAnchor: [3, -15],
    iconSize: [25, 25],
  })

const MyMapComponent = (props) => {

    return (
        <div className="map-container">
            <p>My Map here: {JSON.stringify(props.map_data)}</p>
            <Map center={[props.map_data.lat, props.map_data.lng]} zoom={props.map_data.zoom} style={theStyle}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.port} onClick={() => props.showDestinations("ok")}>
                    <Popup>
                        Drone Airport
                    </Popup>
                </Marker>
                {props.drones.map((val, index) => {
                    return (
                        <DriftMarker icon={droneIcon} position={val.pos} duration={1000} key={val.id} onClick={() => props.showDestinations(val.id)}>
                        <Popup>
                            Drone ID: <span style={{fontWeight: "bold"}}>{val.id}</span><br/>
                            Delivery: {val.next} / {val.dest.length - 1} <br/>
                            Next: {val.dest[val.next].Lat}, {val.dest[val.next].Lon} <br/>

                        </Popup>
                        </DriftMarker>                         
                    )
                })}
                {props.destinations.map((val, index) => {
                    return (
                        <Marker icon={homeIcon} position={[val.Lat, val.Lon]} key={index}>                        
                        </Marker>                         
                    )
                })}
                {/* <Rectangle bounds={props.quadrant} color="orange">
                    <Tooltip>Quadrant 1</Tooltip>
                </Rectangle>                  */}
            </Map>
            
        </div>
    )
}

export default MyMapComponent;

