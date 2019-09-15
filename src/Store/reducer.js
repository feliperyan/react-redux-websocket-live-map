import Immutable from 'seamless-immutable';

const initialState = Immutable(
    {
        theMap: '',
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