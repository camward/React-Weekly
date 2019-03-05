import React, {Component} from 'react'
import './left-menu.scss'

export class LeftMenu extends Component {
    render() {
        return (
            <ul>
                <li>Понедельник</li>
                <li>Вторник</li>
                <li>Среда</li>
                <li>Четверг</li>
                <li>Пятница</li>
                <li>Суббота</li>
                <li>Воскресенье</li>
            </ul>
        )
    }
}