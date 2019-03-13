import React, {Component} from 'react'
import { t } from "i18next"
import { resetActiveStores } from '../../store'

export class Home extends Component {

    componentDidMount() {
        resetActiveStores()
    }

    render() {
        return (
            <div>{t('common.homeText')}</div>
        )
    }
}