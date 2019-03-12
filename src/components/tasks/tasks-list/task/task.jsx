import React, {Component} from 'react'
import classNames from 'classnames'
import './task.scss'
import { t } from "i18next"

export class Task extends Component {

    editTask = (id) => {
        console.log(`edit task ${id}`)
    }

    removeTask = (id) => {
        console.log(`remove task ${id}`)
    }

    render() {
        const { className, description, time, id } = this.props

        return (
            <li className={classNames(className)}>
                {description}<br />{time}
                <span className="taskList_btn">
                    <i className="taskList_btn_i taskList_btn_i-edit"
                       onClick={() => this.editTask(id)}>
                       {t('task.edit')}
                    </i>
                    <i className="taskList_btn_i taskList_btn_i-delete"
                       onClick={() => this.removeTask(id)}>
                       {t('task.remove')}
                    </i>
                </span>
            </li>
        )
    }
}