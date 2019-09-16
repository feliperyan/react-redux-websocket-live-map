import { connect } from 'react-redux'
import React from 'react'


const mapStateToProps = state => (
    {
        latest_message: JSON.stringify(state.latest_message)
    }
)

const ConsoleComponent = (props) => {
    return (
        <div>
            <h1>Latest Message: {props.latest_message}</h1>
        </div>
    )
}

export default connect(mapStateToProps)(ConsoleComponent);
