import { action, observable } from 'mobx'
import axios from '../protocol/axios'

export class LoggerStore {

    @observable logs = []
    @observable loading = false

    @action
    requestLogs = async () => {
        this.loading = true

        try {
            const response = await axios.get('/logs.json')
            this.logs = []

            Object.keys(response.data).forEach(key => {
                this.logs.push({
                    date: response.data[key].time,
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
        this.logs = []
        this.loading = false
    }
}

export const loggerStore = new LoggerStore()