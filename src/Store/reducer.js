import Immutable from 'seamless-immutable';

const initialState = Immutable(
    {
        theMap: '',
        latest_message: 'Last one!'
    }
)

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    return state;
}

export default reducer;