import React, {Component} from 'react'
import {TaskList} from '../tasks/tasks-list/tasks-list'
import {TaskAddForm} from '../tasks/task-add-form/task-add-form'
import './content.scss'

export class Content extends Component {
    render() {
        return (
            <div>
                <h1 className="contentHeader">Header</h1>
                <TaskList />
                <TaskAddForm />
            </div>
        )
    }
}