import React, {Component} from 'react'
import './task-list.scss'
import {Task} from './task/task'
import {TaskAddForm} from "../task-add-form/task-add-form"
import Loader from "../../common/loader/loader"
import { t } from "i18next"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { TASK_STORE } from '../../../store/'
import {LOG_TYPE} from "../../../utils/logger-type"
import {log} from "../../../decorators/logger"

@inject(TASK_STORE)
@observer
export class TaskList extends Component {

    static propTypes = {
        taskStore: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.getTask = () => this.props.taskStore.requestTask()
    }

    @log(LOG_TYPE.GET_TASK_LIST)
    componentWillMount() {
        this.getTask()
    }

    renderTask() {
        return (this.props.taskStore.taskList.length) ?
            this.props.taskStore.taskList.map((task, index) => {
                return (
                    <Task
                        key={index}
                        task={task}
                        className="taskList_item"
                        description={task.description}
                        time={task.time}
                    />
                )
            }) : t('task.noTaskMessage')

    }

    render() {
        return (
            <div>
                {
                    this.props.taskStore.loading
                        ? <Loader />
                        : <ul className="taskList">
                            <React.Fragment>
                                { this.renderTask() }
                            </React.Fragment>
                        </ul>
                }

                <TaskAddForm />
            </div>
        )
    }
}