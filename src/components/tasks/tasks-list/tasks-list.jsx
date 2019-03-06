import React, {Component} from 'react'
import './task-list.scss'
import {Task} from './task/task'

export class TaskList extends Component {
    render() {
        return (
            <ul className="taskList">
                <Task className="taskList_item" />
                <Task className="taskList_item" />
                <Task className="taskList_item" />
                <Task className="taskList_item" />
            </ul>
        )
    }
}