// Adapted from Lina Rudashevski's (@aduranil) excellent post:
// https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3

import * as actions from '../Store/actions';

const SocketMiddleware = () => {
    let socket = null;

    const onOpen = store => (event) => {
        console.log('websocket open', event.target.url);
        store.dispatch(actions.wsConnected(event.target.url));
        store.dispatch(actions.connectedToWS());
    };

    const onClose = store => () => {
        store.dispatch(actions.wsDisconnected());
        store.dispatch(actions.disconnectedToWS());
    };

    const onMessage = store => (event) => {
        const payload = JSON.parse(event.data);
        console.log('receiving server message');
        store.dispatch(actions.receivedMessage(payload));
    };

    // the middleware part of this function
    return store => next => action => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }

                // connect to the remote host
                socket = new WebSocket(action.host);

                // websocket handlers
                socket.onmessage = onMessage(store);
                socket.onclose = onClose(store);
                socket.onopen = onOpen(store);

                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                //console.log('websocket closed');
                break;
            case 'NEW_MESSAGE':
                console.log('sending a message', action.message);
                socket.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.message }));
                break;
            default:
                //console.log('the next action:', action);
                return next(action);
        }
    };
};

export default SocketMiddleware();