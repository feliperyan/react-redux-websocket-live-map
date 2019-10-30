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
            <p>Latest Tick: {props.latest_message}</p>
        </div>
    )
}

export default connect(mapStateToProps)(ConsoleComponent);
