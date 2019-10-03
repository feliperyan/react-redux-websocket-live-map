import React from 'react';
import { Map, TileLayer, Popup, Rectangle, Tooltip, Marker} from 'react-leaflet';
import './map.css';

import { DriftMarker } from "leaflet-drift-marker"

const theStyle = {
    width: "80%",
    height: "600px"
};

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
                        <DriftMarker position={val.pos} duration={1000} key={val.id} onClick={() => props.showDestinations(val.id)}>
                        <Popup>
                            Drone ID: <span style={{fontWeight: "bold"}}>{val.id}</span><br/>
                            Next Delivery: {val.dest[val.next].Lat}, {val.dest[val.next].Lon}
                        </Popup>
                        </DriftMarker>                         
                    )
                })}
                {props.destinations.map((val, index) => {
                    return (
                        <Marker position={[val.Lat, val.Lon]} key={index}>                        
                        </Marker>                         
                    )
                })}
                <Rectangle bounds={props.quadrant} color="orange">
                    <Tooltip>Quadrant 1</Tooltip>
                </Rectangle>                 
            </Map>
            
        </div>
    )
}

export default MyMapComponent;

