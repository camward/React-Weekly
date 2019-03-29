import React from 'react'
import classNames from 'classnames'
import {Lang} from "../lang/lang"
import './input.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const { className, value, disabled, onChange, errorMessage } = props

    return (
        <div className={classNames(
            'input-block',
            className,
            {
                'invalid': isInvalid(props)
            }
        )}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
            {
                isInvalid(props)
                    ? <span>{errorMessage || <Lang text="error.form" />}</span>
                    : null
            }
        </div>
    )
}

export default Input
