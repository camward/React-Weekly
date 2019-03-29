import React, {Component} from 'react'
import { useTranslation } from 'react-i18next';

const LanguageText = props => {
    const { t } = useTranslation();
    const { text, variable } = props

    if (variable) return t(`${text}.${variable}`)
    return t(text)
}

export class Lang extends Component {
    render() {
        return (
            <LanguageText text={this.props.text} variable={this.props.variable} />
        )
    }
}