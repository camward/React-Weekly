import React, {Component} from 'react'
import {LeftMenu} from './../../components/left-menu/left-menu'
import './layout.scss'

export const LOGO = require('../../assets/images/logo.png')

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout_header">
                    <img src={LOGO} alt="logo" />
                    <span>weekly</span>
                </div>
                <div className="layout_content">
                    <div className="layout_content_left">
                        <LeftMenu />
                    </div>
                    <div className="layout_content_center">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout