import React, {Component} from 'react'
import {LeftMenu} from './../../components/left-menu/left-menu'
import './layout.scss'
import {Link} from 'react-router-dom'
import {Portal} from "../../portal/portal"
import Modal from "../../portal/modal/modal"
import ChangeLang from "../../components/change-lang/change-lang"
import {Lang} from "../../components/common/lang/lang"

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
                        <span><Lang text="common.title" /></span>
                    </Link>
                    <div className="layout_header__right-menu">
                        <button className="layout_header__right-menu__btn" onClick={this.handleShow}>
                            <Lang text="modal.link" />
                        </button>
                        {
                            this.state.showModal && <Portal>
                                <Modal
                                    header={<Lang text="modal.header" />}
                                    content={<Lang text="modal.content" />}
                                    btnClose={<Lang text="modal.btnClose" />}
                                    onClick={this.handleHide}
                                />
                            </Portal>
                        }
                        <Link to="/log">
                            <span><Lang text="log.link" /></span>
                        </Link>
                        <ChangeLang />
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