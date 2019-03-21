import React, {Component} from 'react'
import {TaskList} from '../tasks/tasks-list/tasks-list'
import {Home} from '../home/home'
import {Route, Switch} from 'react-router-dom'
import {Logger} from '../logger/logger'

export class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/log" component={Logger} />
                    <Route path="/day/:day" component={TaskList} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}