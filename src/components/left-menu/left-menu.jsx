import React, {Component} from 'react'
import './left-menu.scss'
import {NavLink} from 'react-router-dom'
import { t } from "i18next"
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { DAY_STORE, TASK_STORE } from '../../store/'
import { log } from "../../decorators/logger"
import {LOG_TYPE} from "../../utils/logger-type"

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

    getDay = () => {
        let day = window.location.pathname.match(/\w+/g)
        return (this.props.dayStore.day) ? this.props.dayStore.day : (day) ? day[1] : ""
    }

    @log(LOG_TYPE.SET_MENU)
    setDay(code) {
        this.getTask()
        this.props.dayStore.setDay(code)
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li className={classNames({
                    "leftMenu-item": true,
                    "li-active": link.code === this.getDay()
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