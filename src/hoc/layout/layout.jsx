import React, {Component} from 'react'
import './layout.scss'

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout_content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout