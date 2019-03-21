import { dayStore } from './day-store'
import { taskStore } from './task-store'
import { loggerStore } from './logger-store'

export const stores = {
    dayStore,
    taskStore,
    loggerStore
};

export const DAY_STORE = 'dayStore';
export const TASK_STORE = 'taskStore';
export const LOGGER_STORE = 'loggerStore';

export const resetActiveStores = () => {
    dayStore.resetStore()
    taskStore.resetStore()
    loggerStore.resetStore()
};
