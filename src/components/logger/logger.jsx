import React, {Component} from 'react'
import './logger.scss'
import Loader from "../common/loader/loader"
import {Lang} from "../common/lang/lang"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { LOGGER_STORE } from '../../store/'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import Error from "../common/error/error"

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
            }) : <Lang text="log.noResult" />
    }

    render() {
        return (
            <div className="logs-block">
                {
                    this.props.loggerStore.loading
                        ? <Loader />
                        : <PerfectScrollbar>
                            <ul className="logs-block_ul">
                                <React.Fragment>
                                    { this.renderLogs() }
                                </React.Fragment>
                            </ul>
                        </PerfectScrollbar>
                }
                { this.props.loggerStore.error ? <Error data={this.props.loggerStore.error} /> : "" }
            </div>
        )
    }
}