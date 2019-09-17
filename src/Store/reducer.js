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
        drones: []
    }
)

function reducer(state = initialState, action) {
    
    switch (action.type) {

        case 'MESSAGE_RECEIVED':
            console.log('received message in reducer');
            // return state.merge({latest_message: action.message});
            // parseMessage(action.message, state);
            const s = state.merge({latest_message: action.message});
            return parseMessage(action.message, s);
            
        case 'STATUS_CONNECTED':
            return state.merge({connection_status: "Connected"})

        case 'STATUS_DISCONNECTED':
            return state.merge({connection_status: "Disconnected"})

        default:
            console.log('reducer', state, action);
            return state;

    }
}

export const parseMessage = (message, state) => {
    let the_drones = Immutable.asMutable(state.drones, {deep: true});

    let found = false;

    for(let i = 0; i < the_drones.length; i++){
        if (the_drones[i].id === message.Name) {
            the_drones[i].pos = [message.CurrentPosition.Lat, message.CurrentPosition.Lon];
            found = true;
        }
    };

    if (!found){
        the_drones.push({id: message.Name, pos: [message.CurrentPosition.Lat, message.CurrentPosition.Lon]});
    }

    return state.merge({drones: the_drones})
}

export default reducer;