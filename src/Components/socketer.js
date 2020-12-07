import React from 'react';
import { connect } from 'react-redux';
import { wsConnect } from '../Store/actions';


class Socketer extends React.Component {
    componentDidMount() {
        // const { id } = this.props;
        // if (id) {
        //   this.connectAndJoin();
        // }

        this.connectAndJoin(this.props.address);
    }

    connectAndJoin = (addr) => {
        const { dispatch } = this.props;
                
        // Local Dev
        const host = addr;
        
        dispatch(wsConnect(host));
    };


    render() {
        
        return (
            // <p> Connections status: {this.props.connection_status} </p>
            <br/>
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