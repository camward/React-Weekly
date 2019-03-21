import React, {Component} from 'react'
import './task-add-form.scss'
import Button from "../../common/button/button"
import Input from "../../common/input/input"
import { t } from "i18next"
import Loader from "../../common/loader/loader"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { TASK_STORE } from '../../../store/'
import {LOG_TYPE} from "../../../utils/logger-type"
import {log} from "../../../decorators/logger"
import Error from "../../common/error/error"

@inject(TASK_STORE)
@observer
export class TaskAddForm extends Component {

    static propTypes = {
        taskStore: PropTypes.object
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addTask = async event => {
        event.preventDefault();
        this.addTaskFn()
    }

    @log(LOG_TYPE.ADD_TASK)
    addTaskFn() {
        this.props.taskStore.addTask()
    }

    updateTask = async event => {
        event.preventDefault();
        this.updateTaskFn()
    }

    @log(LOG_TYPE.UPDATE_TASK)
    updateTaskFn() {
        this.props.taskStore.updateTask()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    changeInput = (event, controlName) => {
        const formControls = { ...this.props.taskStore.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control
        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && formControls[name].value && isFormValid
        })

        this.props.taskStore.formControls = formControls
        this.props.taskStore.isFormValid = isFormValid
    }

    renderInputs() {
        return Object.keys(this.props.taskStore.formControls).map((controlName, index) => {
            const control = this.props.taskStore.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeInput(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="task-add">
                {
                    this.props.taskStore.loadingForm
                        ? <Loader/>
                        : <form onSubmit={this.submitHandler} className="task-add_form">

                            {this.renderInputs()}

                            {
                                this.props.taskStore.editMode
                                ? <Button
                                        className="primary"
                                        disabled={!this.props.taskStore.isFormValid}
                                        onClick={this.updateTask}
                                    >
                                        {t('form.buttonUpdate')}
                                  </Button>
                                : <Button
                                        className="primary"
                                        disabled={!this.props.taskStore.isFormValid}
                                        onClick={this.addTask}
                                    >
                                        {t('form.buttonAdd')}
                                  </Button>
                            }
                        </form>
                }
                { this.props.taskStore.error ? <Error data={this.props.taskStore.error} /> : "" }
            </div>
        )
    }
}