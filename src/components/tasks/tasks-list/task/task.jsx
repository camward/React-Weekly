import React, {Component} from 'react'
import classNames from 'classnames'
import './task.scss'
import { t } from "i18next"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { TASK_STORE } from '../../../../store/'
import Loader from "../../../common/loader/loader"

@inject(TASK_STORE)
@observer
export class Task extends Component {

    static propTypes = {
        taskStore: PropTypes.object,
        loading: PropTypes.bool
    }

    static defaultProps = {
        loading: false
    }

    editTask = task => {
        this.props.taskStore.setCurrentTask(task)
    }

    removeTask = task => {
        task.loading = true
        this.props.taskStore.setCurrentTask(task)

        this.props.taskStore.removeTask(task.id)
    }

    render() {
        const { className, description, time, task } = this.props

        return (
            <li className={classNames(className)}>
                {description}<br />{time}
                    {
                        this.props.taskStore.currentTask &&
                        this.props.taskStore.currentTask.loading &&
                        this.props.taskStore.currentTask.id === task.id
                        ? <Loader />
                        : <span className="taskList_btn">
                            <i className="taskList_btn_i taskList_btn_i-edit"
                               onClick={() => this.editTask(task)}>
                               {t('task.edit')}
                            </i>
                            <i className="taskList_btn_i taskList_btn_i-delete"
                               onClick={() => this.removeTask(task)}>
                               {t('task.remove')}
                            </i>
                        </span>
                    }
            </li>
        )
    }
}