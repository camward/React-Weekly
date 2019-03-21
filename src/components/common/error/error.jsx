import React from 'react'
import './error.scss'

const Error = props => (
    <div className="error">
        {props.data}
        {console.error(props.data)}
    </div>
)

export default Error