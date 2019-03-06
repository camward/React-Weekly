import React, {Component} from 'react'
import classNames from 'classnames'
import './task.scss'

export class Task extends Component {
    render() {
        const { className } = this.props

        return (
            <li className={classNames(className)}>
                test
                <span className="taskList_btn">
                    <i className="taskList_btn_i taskList_btn_i-edit">E</i>
                    <i className="taskList_btn_i taskList_btn_i-delete">D</i>
                </span>
            </li>
        )
    }
}