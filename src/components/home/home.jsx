import React, {Component} from 'react'
import { t } from "i18next"

export class Home extends Component {
    render() {
        return (
            <div>{t('common.homeText')}</div>
        )
    }
}