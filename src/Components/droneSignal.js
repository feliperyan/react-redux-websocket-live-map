import React from 'react'

const DroneSignalComponent = (props) => {
    return (
        <div>
            {props.drones.map((val, index) => {
                return (
                    <div>
                        <p key={val.id}>Drone {val.id}</p>
                        <button onClick={ () => {
                            props.signalDefect(val.id, 'Obstruction'); }
                        }> BUTTON </button>
                    </div>
                );
            })}
            
        </div>
    )
};

export default DroneSignalComponent;