import React, {Component} from 'react'
import classNames from 'classnames'
import './task.scss'
import { t } from "i18next"

export class Task extends Component {

    editTask = (idx) => {
        console.log(`edit task ${idx}`)
    }

    removeTask = (idx) => {
        console.log(`remove task ${idx}`)
    }

    render() {
        const { className, description, time, index } = this.props

        return (
            <li className={classNames(className)}>
                {description}<br />{time}
                <span className="taskList_btn">
                    <i className="taskList_btn_i taskList_btn_i-edit"
                       onClick={() => this.editTask(index)}>
                       {t('task.edit')}
                    </i>
                    <i className="taskList_btn_i taskList_btn_i-delete"
                       onClick={() => this.removeTask(index)}>
                       {t('task.remove')}
                    </i>
                </span>
            </li>
        )
    }
}