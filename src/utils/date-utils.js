import i18next from "i18next"

const language = i18next.language

const options = {
    timeZone: "Europe/Moscow",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

export const formatDate = (timestamp) => {
    if (!timestamp) {
        return
    }

    return new Intl.DateTimeFormat(language, options).format(timestamp)
}

export const shortFormatDate = (date) => {
    if (!date) {
        return
    }

    let [year, month, day] = date.match(/\d+/g)
    return `${day}.${month}.${year}`
}