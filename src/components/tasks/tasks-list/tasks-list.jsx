import React, {Component} from 'react'
import './task-list.scss'
import {Task} from './task/task'
import {TaskAddForm} from "../task-add-form/task-add-form"
import Loader from "../../common/loader/loader"
import axios from "../../../protocol/axios"
import { t } from "i18next"

export class TaskList extends Component {

    state = {
        loading: true,
        tasks: []
    }

    async componentDidMount() {
        try {
            const tasks = []
            const response = await axios.get('/tasks.json')

            Object.keys(response.data).forEach(key => {
                tasks.push({
                    id: key,
                    day: response.data[key].day,
                    time: response.data[key].time,
                    description: response.data[key].description
                })
            })

            this.setState({
                tasks,
                loading: false
            })
        } catch (e) {
            this.setState({
                tasks: [],
                loading: false
            })
            console.log(e)
        }
    }

    renderTask() {
        return (this.state.tasks.length) ?
            this.state.tasks.map((task, index) => {
                return (
                    <Task
                        key={index}
                        id={task.id}
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
                    this.state.loading
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