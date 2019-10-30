import React from 'react';
import { connect } from 'react-redux';
import { wsConnect } from '../Store/actions';


class Socketer extends React.Component {
    componentDidMount() {
        // const { id } = this.props;
        // if (id) {
        //   this.connectAndJoin();
        // }

        this.connectAndJoin();
    }

    connectAndJoin = () => {
        const { dispatch } = this.props;
        // const host = `ws://127.0.0.1:8000/ws/game/${id}?token=${localStorage.getItem('token')}`;
        
        // Local Dev
        // const host = 'ws://localhost:8080/ws'
        
        // Heroku Prod
        const host = 'wss://high-vol-vehicle-cnsmr-fryan.herokuapp.com/ws'
        
        dispatch(wsConnect(host));
    };


    render() {
        // abridged for brevity
        return (
            <p> Connections status: {this.props.connection_status} </p>
        );
    }

}

// the original below seems to be about the auth wrapper:
//https://react-redux.js.org/using-react-redux/connect-mapstate#ownprops-optional

// const mapStateToProps = (state, ownProps) => (
//     {
//         id: ownProps.match && ownProps.match.params.id,
//     }
// );

const mapStateToProps = (state) => (
    { connection_status: state.connection_status }
)

export default connect(mapStateToProps)(Socketer);