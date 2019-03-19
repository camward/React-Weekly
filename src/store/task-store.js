import { action, observable } from 'mobx'
import axios from '../protocol/axios'
import { t } from "i18next";

export class TaskStore {

    @observable taskList = []
    @observable currentTask = null
    @observable loading = true
    @observable loadingForm = false
    @observable isFormValid = false
    @observable formControls = {
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

    @action
    setCurrentTask = (task) => {
        console.log(`set task ${task}`)
        this.currentTask = task
    }

    getTask = () => this.requestTask()

    @action
    requestTask = async () => {
        try {
            const response = await axios.get('/tasks.json')
            this.taskList = []

            Object.keys(response.data).forEach(key => {
                this.taskList.push({
                    id: key,
                    day: response.data[key].day,
                    time: response.data[key].time,
                    description: response.data[key].description
                })
            })

            this.loading = false
        } catch (e) {
            this.loading = false
            console.log(e)
        }
    }

    @action
    addTask = async () => {
        this.loadingForm = true

        try {
            const isFormValid = false;
            const formControls = { ...this.formControls };
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

            this.formControls = formControls
            this.isFormValid = isFormValid

            this.loadingForm = false
            this.getTask()
        } catch (e) {
            this.loadingForm = false
            console.log(e)
        }
    }

    @action
    removeTask = async id => {
        try {
            await axios.delete(`/tasks/${id}.json`)
            if (this.currentTask) this.currentTask.loading = false
            this.getTask()
        } catch (e) {
            if (this.currentTask) this.currentTask.loading = false
            console.log(e)
        }
    }

    @action
    resetStore = () => {
        this.taskList = []
        this.currentTask = null
        this.loading = true
        this.loadingForm = false
        this.isFormValid = false
        this.formControls = {
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
}

export const taskStore = new TaskStore()

