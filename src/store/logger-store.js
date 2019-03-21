import { action, observable } from 'mobx'
import axios from '../protocol/axios'
import { formatDate } from "../utils/date-utils"

export class LoggerStore {

    @observable logs = []
    @observable loading = false

    @action
    requestLogs = async () => {
        this.loading = true

        try {
            const response = await axios.get('/logs.json')
            this.logs = []

            if (response && response.data) {
                Object.keys(response.data).forEach(key => {
                    this.logs.push({
                        date: response.data[key].date,
                        type: response.data[key].type,
                        ip: response.data[key].ip,
                        source: response.data[key].source
                    })
                })

                this.logs = this.logs.slice().reverse()
            }

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

    commit = (logType) => {
        let logMessage = {}
        logMessage.date = formatDate(Date.now())
        logMessage.type = logType
        logMessage.ip = window.location.hostname
        logMessage.source = 'client'
        this.addLog(logMessage)
    }

    addLog = (logMessage) => this.addLogItem(logMessage);

    addLogItem = async (logMessage) => {
        try {
            await axios.post('/logs.json', logMessage)
        } catch (e) {
            console.log(e)
        }
    }
}

export const loggerStore = new LoggerStore()