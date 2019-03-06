import React, {Component} from 'react'
import {LeftMenu} from './../../components/left-menu/left-menu'
import './layout.scss'
import {Link} from 'react-router-dom'
import { t } from "i18next"

export const LOGO = require('../../assets/images/logo.png')

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout_header">
                    <Link to="/">
                        <img src={LOGO} alt="logo" />
                        <span>{t('common.title')}</span>
                    </Link>
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