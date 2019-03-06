import React, {Component} from 'react'
import './left-menu.scss'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/day/mon', label: 'Понедельник', exact: false},
    {to: '/day/tue', label: 'Вторник', exact: false},
    {to: '/day/wed', label: 'Среда', exact: false},
    {to: '/day/thu', label: 'Четверг', exact: false},
    {to: '/day/fri', label: 'Пятница', exact: false},
    {to: '/day/sat', label: 'Суббота', exact: false},
    {to: '/day/sun', label: 'Воскресенье', exact: false}
]

export class LeftMenu extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li className="leftMenu-item" key={index}>
                    <NavLink to={link.to} exact={link.exact} activeClassName="link-active">
                        {link.label}
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