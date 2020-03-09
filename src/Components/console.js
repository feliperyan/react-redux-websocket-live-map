import { connect } from 'react-redux'
import React from 'react'


const mapStateToProps = state => (
    {
        latest_message: JSON.stringify(state.latest_message),
        status: state.connection_status
    }
)

const ConsoleComponent = (props) => {
    return (
        <div className="console">
            <p>Connection Status: {props.status}</p>
            {/* <p>Latest Message: {props.latest_message}</p> */}
        </div>
    )
}

export default connect(mapStateToProps)(ConsoleComponent);
