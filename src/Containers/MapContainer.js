import { connect } from 'react-redux'
import MyMapComponent from '../Components/map';

const mapStateToProps = state => (
    {
        map_data: state.the_map,
        drones: state.drones
    }
)

export default connect(mapStateToProps)(MyMapComponent);