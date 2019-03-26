import React, {Component} from 'react'
import {LeftMenu} from './../../components/left-menu/left-menu'
import './layout.scss'
import {Link} from 'react-router-dom'
import { t } from "i18next"
import {Portal} from "../../portal/portal"
import Modal from "../../portal/modal/modal"

export const LOGO = require('../../assets/images/logo.png')

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    handleShow = () => {
        this.setState({showModal: true});
    }

    handleHide = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div className="layout">
                <div className="layout_header">
                    <Link to="/">
                        <img src={LOGO} alt="logo" />
                        <span>{t('common.title')}</span>
                    </Link>
                    <div className="layout_header__right-menu">
                        <a href="javascript:void(0)" onClick={this.handleShow}>
                            <span>{t('modal.link')}</span>
                        </a>
                        {
                            this.state.showModal && <Portal>
                                <Modal
                                    header={t('modal.header')}
                                    content={t('modal.content')}
                                    btnClose={t('modal.btnClose')}
                                    onClick={this.handleHide}
                                />
                            </Portal>
                        }
                        <Link to="/log">
                            <span>{t('log.link')}</span>
                        </Link>
                    </div>
                </div>
                <div className="layout_content">
                    <div className="layout_content_left">
                        <LeftMenu />
                    </div>
                    <div className="layout_content_center">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout