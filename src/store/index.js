import { dayStore } from './day-store'
import { taskStore } from './task-store'

export const stores = {
    dayStore,
    taskStore
};

export const DAY_STORE = 'dayStore';
export const TASK_STORE = 'taskStore';

export const resetActiveStores = () => {
    dayStore.resetStore()
    taskStore.resetStore()
};
