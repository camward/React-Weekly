import { dayStore } from './day-store'

export const stores = {
    dayStore
};

export const DAY_STORE = 'dayStore';

export const resetActiveStores = () => {
    dayStore.resetStore()
};
