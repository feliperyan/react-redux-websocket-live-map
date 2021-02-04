import React from 'react'

const DroneSignalComponent = (props) => {
    return (
        <div className="signal-comp">
            {props.drones.map((val, index) => {
                return (
                    <div className="signal-comp-drone">
                        <p key={val.id}>Drone: {val.id}<br/>Status: {val.status}</p>
                        <button onClick={ () => {
                            props.signalDefect(val.id, 'Obstruction'); }
                        }> Introduce <span role="img" aria-label="kangaroo">🦘</span> </button>                        
                    </div>                    
                );
            })}
            
        </div>
    )
};

export default DroneSignalComponent;