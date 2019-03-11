import React, {Component} from 'react'
import './task-add-form.scss'
import Button from "../../common/button/button"
import Input from "../../common/input/input"

export class TaskAddForm extends Component {

    state = {
        isFormValid: false,
        formControls: {
            description: {
                value: '',
                label: 'Описание задачи',
                errorMessage: 'Добавьте описание',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            },
            time: {
                value: '',
                label: 'Срок выполнения',
                errorMessage: 'Укажите срок',
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

    addTask = () => {
        console.log('add task')
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
            isFormValid = formControls[name].valid && isFormValid
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
                <form onSubmit={this.submitHandler} className="task-add_form">

                    { this.renderInputs() }

                    <Button
                        className="primary"
                        disabled={!this.state.isFormValid}
                        onClick={this.addTask}
                    >
                        Добавить задачу
                    </Button>
                </form>
            </div>
        )
    }
}