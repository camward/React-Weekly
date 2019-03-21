import React, {Component} from 'react'
import './logger.scss'
import Loader from "../common/loader/loader"
import { t } from "i18next"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { LOGGER_STORE } from '../../store/'

@inject(LOGGER_STORE)
@observer
export class Logger extends Component {

    static propTypes = {
        loggerStore: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.getLogs = () => this.props.loggerStore.requestLogs()
    }

    componentWillMount() {
        this.getLogs()
    }

    renderLogs() {
        return (this.props.loggerStore.logs.length) ?
            this.props.loggerStore.logs.map((log, index) => {
                return (
                    <li key={index}>
                        <span className="left">
                            <span>{log.type}</span>
                            <span>{log.date}</span>
                        </span>
                        <span className="right">
                            <span>{log.source}</span>
                            <span><b>{log.ip}</b></span>
                        </span>
                    </li>
                )
            }) : t('log.noResult')
    }

    render() {
        return (
            <div>
                {
                    this.props.loggerStore.loading
                        ? <Loader />
                        : <ul className="logs">
                            <React.Fragment>
                                { this.renderLogs() }
                            </React.Fragment>
                        </ul>
                }

            </div>
        )
    }
}