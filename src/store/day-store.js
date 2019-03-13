import { action, observable } from 'mobx'

export class DayStore {

    @observable
    day = null

    @action
    setDay = day => {
        this.day = day
    }

    @action
    resetStore = () => {
        this.day = null
    }
}

export const dayStore = new DayStore()

