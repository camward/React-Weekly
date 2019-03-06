import React, {Component} from 'react'
import './left-menu.scss'
import {NavLink} from 'react-router-dom'
import { t } from "i18next"

const links = [
    {to: '/day/mon', code: 'mon', exact: false},
    {to: '/day/tue', code: 'tue', exact: false},
    {to: '/day/wed', code: 'wed', exact: false},
    {to: '/day/thu', code: 'thu', exact: false},
    {to: '/day/fri', code: 'fri', exact: false},
    {to: '/day/sat', code: 'sat', exact: false},
    {to: '/day/sun', code: 'sun', exact: false}
]

export class LeftMenu extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li className="leftMenu-item" key={index}>
                    <NavLink to={link.to} exact={link.exact} activeClassName="link-active">
                        {t(`weekDays.${link.code}`)}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <ul className="leftMenu">
                    { this.renderLinks() }
                </ul>
            </React.Fragment>
        )
    }
}