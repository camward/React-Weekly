import { loggerStore } from "../store/logger-store"

export function log(logType) {

    return function (target, name, descriptor) {
        const originalMethod = descriptor.value

        if (typeof originalMethod === 'function') {
            descriptor.value = function (...args) {
                let res = originalMethod.apply(this, args)
                loggerStore.commit(logType)
                return res
            }
        }

        return descriptor
    }
}