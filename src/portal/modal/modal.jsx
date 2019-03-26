import React from 'react'
import './modal.scss'
import Button from '../../components/common/button/button'

const Modal = props => {
    return (
        <div className="modal">
            <div className="modal_block">
                <div className="modal_block__header">
                    {props.header}
                </div>
                <div className="modal_block__content">
                    {props.content}
                </div>
                <div className="modal_block__footer">
                    <Button
                        className="primary"
                        onClick={props.onClick}>
                        {props.btnClose}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Modal