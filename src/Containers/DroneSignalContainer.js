import { connect } from 'react-redux';
import DroneSignalComponent from '../Components/droneSignal';

const mapStateToProps = state => {
    return {
        issues: state.issues,
        drones: state.drones
    }
};

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      signalDefect: (droneId, issue) => dispatch({ 
          type: 'NEW_MESSAGE', message: {drone: droneId, issue: issue} 
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DroneSignalComponent);