import Immutable from 'seamless-immutable';

const initialState = Immutable(
    {
        the_map: {
            lat: -33.852695,
            lng: 151.246606,
            zoom: 13,
            markers: [[-33.849371, 151.258811], [-33.846508, 151.291528]]
        },
        latest_message: 'Last one!',
        connection_status: 'connecting...'
    }
)

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGE_RECEIVED':
            console.log('received message in reducer');
            return state.merge({latest_message: action.message})
        case 'STATUS_CONNECTED':
            return state.merge({connection_status: "Connected"})
        case 'STATUS_DISCONNECTED':
                return state.merge({connection_status: "Disconnected"})
        default:
            console.log('reducer', state, action);
            return state;
    }
}

export default reducer;