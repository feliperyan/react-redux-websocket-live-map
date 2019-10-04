import Immutable from 'seamless-immutable';


// {
//     "CurrentPosition":{"Lat":-33.817895281911255,"Lon":151.20037163461956},
//     "Destinations":[
//         {"Lat":-33.81427780845335,"Lon":151.21800438499446},
//         {"Lat":-33.81822848102088,"Lon":151.19874751303485},
//         {"Lat":-33.872137914956745,"Lon":151.18828752301656},
//         {"Lat":-33.85225,"Lon":151.2172}
//         ],
//     "NextDestination":1,
//     "Speed": 0.003,
//     "Name":"air1-1"
// }

const initialState = Immutable(
    {
        the_map: {
            lat: -33.852695,
            lng: 151.246606,
            zoom: 13,            
        },
        latest_message: 'Last one!',
        connection_status: 'connecting...',
        drones: [],
        destinations: [],
        showDestinationsFor: "",
        quadrant: [[-33.827365, 151.269182], [-33.832502, 151.280542]],
        dronePort: [-33.852695, 151.246606]
    }
)

function reducer(state = initialState, action) {
    
    switch (action.type) {

        case 'MESSAGE_RECEIVED':
            console.log('received message in reducer');            
            const s = state.merge({latest_message: action.message});
            return parseMessage(action.message, s);
            
        case 'STATUS_CONNECTED':
            return state.merge({connection_status: "Connected"})

        case 'STATUS_DISCONNECTED':
            return state.merge({connection_status: "Disconnected"})

        case 'SHOW_DESTINATIONS_FOR_DRONE':
            console.log("Clicked Marker");
            console.log(action);
            
            return showHideDestinationsForDrone(action.id, state);

        default:
            console.log('reducer', state, action);
            return state;
    }
}

// Checks the array of drones. If a matching drone was found, update its position
// else insert a drone into the array.
const parseMessage = (message, state) => {
    let the_drones = Immutable.asMutable(state.drones, {deep: true});

    let found = false;

    for(let i = 0; i < the_drones.length; i++){
        if (the_drones[i].id === message.Name) {
            the_drones[i].pos = [message.CurrentPosition.Lat, message.CurrentPosition.Lon];
            the_drones[i].next = message.NextDestination
            found = true;
        }
    };

    if (!found){
        the_drones.push({
            id: message.Name, 
            pos: [message.CurrentPosition.Lat, message.CurrentPosition.Lon],
            dest: message.Destinations,
            next: message.NextDestination
        });
    }

    return state.merge({drones: the_drones})
}

const showHideDestinationsForDrone = (id, state) => {    

    // if we get the same droneID we should toggle off the destinations.
    if (id === state.showDestinationsFor){
        return state.merge({showDestinationsFor: "", destinations: []})
    }

    for(let i = 0; i < state.drones.length; i++){
        if (state.drones[i].id === id) {
            return state.merge({showDestinationsFor: id, destinations: state.drones[i].dest})
        }
    }
}

export default reducer;

