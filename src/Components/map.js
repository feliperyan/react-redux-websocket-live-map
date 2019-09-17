import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

const theStyle = {
    width: "300px",
    height: "300px"
};

const MyMapComponent = (props) => {
    // let state = {
    //     lat: 51.505,
    //     lng: -0.09,
    //     zoom: 13,
    // }

    return (
        <div className="map-container">
            <p>My Map here: {JSON.stringify(props.map_data)}</p>
            <Map center={[props.map_data.lat, props.map_data.lng]} zoom={props.map_data.zoom} style={theStyle}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.map_data.markers.map((val, index) => {
                return (
                    <Marker position={val}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> 
                )
                })}                                
            </Map>
        </div>
    )
}

export default MyMapComponent;

