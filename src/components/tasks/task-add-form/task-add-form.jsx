import React, {Component} from 'react'
import './task-add-form.scss'
import Button from "../../common/button/button"
import Input from "../../common/input/input"
import { t } from "i18next"
import axios from "../../../protocol/axios"
import Loader from "../../common/loader/loader"

export class TaskAddForm extends Component {

    state = {
        loading: false,
        isFormValid: false,
        formControls: {
            description: {
                value: '',
                label: t('form.description.label'),
                errorMessage: t('form.description.error'),
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            },
            time: {
                value: '',
                label: t('form.time.label'),
                errorMessage: t('form.time.error'),
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            }
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    setStatusLoader = (status) => {
        let loading = status;
        this.setState({
            loading
        });
    }

    addTask = async event => {
        event.preventDefault();
        this.setStatusLoader(true)

        try {
            const isFormValid = false;
            const formControls = { ...this.state.formControls };
            let day = window.location.pathname.match(/\w+/g)

            let param = {
                description: formControls.description.value,
                time: formControls.time.value,
                day: day[1]
            }

            await axios.post('/tasks.json', param)

            Object.keys(formControls).forEach(objectKey => {
                formControls[objectKey].value = "";
            });

            this.setState({
                formControls,
                isFormValid,
            });

            this.setStatusLoader(false)

            console.log('add task')
        } catch (e) {
            console.log(e)
            this.setStatusLoader(false)
        }
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
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control
        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && formControls[name].value && isFormValid
        })

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
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
                    this.state.loading
                        ? <Loader/>
                        : <form onSubmit={this.submitHandler} className="task-add_form">

                            {this.renderInputs()}

                            <Button
                                className="primary"
                                disabled={!this.state.isFormValid}
                                onClick={this.addTask}
                            >
                                {t('form.button')}
                            </Button>
                        </form>
                }
            </div>
        )
    }
}