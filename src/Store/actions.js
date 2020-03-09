// Adapted from Lina Rudashevski's (@aduranil) excellent post:
// https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3

export const wsConnect = host => ({ type: 'WS_CONNECT', host });
export const wsConnecting = host => ({ type: 'WS_CONNECTING', host });
export const wsConnected = host => ({ type: 'WS_CONNECTED', host });
export const wsDisconnect = host => ({ type: 'WS_DISCONNECT', host });
export const wsDisconnected = host => ({ type: 'WS_DISCONNECTED', host });

export const receivedMessage = message => ({type: 'MESSAGE_RECEIVED', message});
export const disconnectedToWS = () => ({type: 'STATUS_DISCONNECTED'});
export const connectedToWS = () => ({type: 'STATUS_CONNECTED'});

export const messageToServer = message => ({type: 'NEW_MESSAGE', message });