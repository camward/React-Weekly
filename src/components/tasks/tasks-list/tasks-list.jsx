import React, {Component} from 'react'
import './task-list.scss'
import {Task} from './task/task'

import {TaskAddForm} from "../task-add-form/task-add-form"

export class TaskList extends Component {
    render() {
        return (
            <div>
                <ul className="taskList">
                    <Task className="taskList_item" />
                    <Task className="taskList_item" />
                    <Task className="taskList_item" />
                    <Task className="taskList_item" />
                </ul>

                <TaskAddForm />
            </div>
        )
    }
}