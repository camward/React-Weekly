import { action, observable } from 'mobx'
import axios from '../protocol/axios'

export class TaskStore {

    @observable taskList = []
    @observable currentTask = null
    @observable loading = true

    @action
    setCurrentTask = (task) => {
        console.log(`set task ${task}`)
        this.currentTask = task
    }

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
    resetStore = () => {
        this.taskList = []
        this.currentTask = null
        this.loading = true
    }
}

export const taskStore = new TaskStore()

