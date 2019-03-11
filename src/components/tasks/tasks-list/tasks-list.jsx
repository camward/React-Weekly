import React, {Component} from 'react'
import './task-list.scss'
import {Task} from './task/task'
import {TaskAddForm} from "../task-add-form/task-add-form"

const tasks = [
    {description: "Angular", time: "12.04"},
    {description: "React", time: "04.05"},
    {description: "Ember", time: "23.11"},
    {description: "Vue", time: "30.09"},
]

export class TaskList extends Component {

    renderTask() {
        return tasks.map((task, index) => {
            return (
                <Task
                    key={index}
                    index={index}
                    className="taskList_item"
                    description={task.description}
                    time={task.time}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="taskList">
                    <React.Fragment>
                        { this.renderTask() }
                    </React.Fragment>
                </ul>

                <TaskAddForm />
            </div>
        )
    }
}