import React, {Component} from 'react'
import {TaskList} from '../tasks/tasks-list/tasks-list'
import {Home} from '../home/home'
import {Route, Switch} from 'react-router-dom'

export class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/day/:day" component={TaskList} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}