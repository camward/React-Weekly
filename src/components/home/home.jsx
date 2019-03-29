import React, {Component} from 'react'
import {Lang} from "../common/lang/lang"
import { resetActiveStores } from '../../store'

export class Home extends Component {

    componentDidMount() {
        resetActiveStores()
    }

    render() {
        return (
            <div>
                <Lang text="common.homeText" />
            </div>
        )
    }
}