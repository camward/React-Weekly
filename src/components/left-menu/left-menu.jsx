import React, {Component} from 'react'
import './left-menu.scss'
import {NavLink} from 'react-router-dom'
import { t } from "i18next"
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { DAY_STORE, TASK_STORE } from '../../store/'

const links = [
    {to: '/day/mon', code: 'mon', exact: false},
    {to: '/day/tue', code: 'tue', exact: false},
    {to: '/day/wed', code: 'wed', exact: false},
    {to: '/day/thu', code: 'thu', exact: false},
    {to: '/day/fri', code: 'fri', exact: false},
    {to: '/day/sat', code: 'sat', exact: false},
    {to: '/day/sun', code: 'sun', exact: false}
]

@inject(DAY_STORE, TASK_STORE)
@observer
export class LeftMenu extends Component {

    static propTypes = {
        dayStore: PropTypes.object,
        taskStore: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.getTask = () => this.props.taskStore.requestTask()
    }

    setDay = (code) => {
        this.getTask()
        this.props.dayStore.setDay(code)
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li className={classNames({
                    "leftMenu-item": true,
                    "li-active": link.code === this.props.dayStore.day
                })} key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={() => this.setDay(link.code)}
                    >
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