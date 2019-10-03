import { connect } from 'react-redux'
import MyMapComponent from '../Components/map';

const mapStateToProps = state => (
    {
        map_data: state.the_map,
        drones: state.drones,
        quadrant: state.quadrant,
        port: state.dronePort,
        destinationFor: state.showDestinationsFor,
        destinations: state.destinations
    }
)

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showDestinations: (droneId) => dispatch({ type: 'SHOW_DESTINATIONS_FOR_DRONE', id: droneId}),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MyMapComponent);