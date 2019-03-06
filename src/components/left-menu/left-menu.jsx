import React, {Component} from 'react'
import './left-menu.scss'

export class LeftMenu extends Component {
    render() {
        return (
            <ul className="leftMenu">
                <li className="leftMenu-item">Понедельник</li>
                <li className="leftMenu-item">Вторник</li>
                <li className="leftMenu-item">Среда</li>
                <li className="leftMenu-item">Четверг</li>
                <li className="leftMenu-item">Пятница</li>
                <li className="leftMenu-item">Суббота</li>
                <li className="leftMenu-item">Воскресенье</li>
            </ul>
        )
    }
}