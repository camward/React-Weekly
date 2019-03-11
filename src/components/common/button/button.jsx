import React from 'react'
import classNames from 'classnames'
import './button.scss'

const Button = props => {

    const { className, disabled, onClick } = props

    return (
        <button
            onClick={onClick}
            className={classNames('button', className)}
            disabled={disabled}
        >
            {props.children}
        </button>
    )
}

export default Button
