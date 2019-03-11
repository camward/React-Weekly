const COMMON = require('./common')
const ERROR = require('./error')
const FORM = require('./form')
const TASK = require('./task')
const WEEK_DAYS = require('./week-days')

const RU_BUNDLE = {
    translation: {
        common: COMMON,
        error: ERROR,
        form: FORM,
        task: TASK,
        weekDays: WEEK_DAYS
    }
}

module.exports = RU_BUNDLE
