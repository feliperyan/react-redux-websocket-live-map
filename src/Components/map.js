import React from 'react';
import { Map, TileLayer, Popup, Rectangle, Tooltip, Marker} from 'react-leaflet';
import L from 'leaflet';


import { DriftMarker } from "leaflet-drift-marker"

export const droneIcon = new L.Icon({
    iconUrl: dronePurple, //require('../assets/drone_purple.svg'),
    iconRetinaUrl: dronePurple, //require('../assets/drone_purple.svg'),
    iconAnchor: [12, 12],
    popupAnchor: [3, -15],
    iconSize: [25, 25],
    shadowUrl:  shadow, //require('../assets/shadow.svg'),
    shadowSize: [25, 25],
    shadowAnchor: [9, 10],
  })

  export const homeIcon = new L.Icon({
    iconUrl: homePic, //require('../assets/home.svg'),
    iconRetinaUrl: homePic, //require('../assets/home.svg'),
    iconAnchor: [12, 12],
    popupAnchor: [3, -15],
    iconSize: [25, 25],
  })

const MyMapComponent = (props) => {

    return (
        <div>            
            <Map className="map-tag" center={[props.map_data.lat, props.map_data.lng]} zoom={props.map_data.zoom}>

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
                            Delivery: {val.next} / {val.Destinations.length - 1} <br/>
                            Next: {val.Destinations[val.next].Lat}, {val.Destinations[val.next].Lon} <br/>
                        </Popup>
                        </DriftMarker>                         
                    )
                })}
                {props.destinations.map((val, index) => {
                    if (index !== props.destinations.length -1){
                        return (
                            <Marker icon={homeIcon} position={[val.Lat, val.Lon]} key={index}>                        
                            </Marker>                         
                        )
                    }
                })}
            </Map>

            <p>Map centre: {JSON.stringify(props.map_data)}</p>

        </div>
    )
}

export default MyMapComponent;

