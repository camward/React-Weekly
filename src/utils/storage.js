export const setDataStorage = (storageName, data) => window.localStorage.setItem(storageName, data)

export const getDataStorage = (storageName) => window.localStorage.getItem(storageName)

export const clearDataStorage = (storageName) => window.localStorage.removeItem(storageName)

export const cleanAllStorage = () => window.localStorage.clear()