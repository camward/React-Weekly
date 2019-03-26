const COMMON = require('./common')
const ERROR = require('./error')
const FORM = require('./form')
const TASK = require('./task')
const LOG = require('./log')
const MODAL = require('./modal')
const WEEK_DAYS = require('./week-days')

const EN_BUNDLE = {
    translation: {
        common: COMMON,
        error: ERROR,
        form: FORM,
        task: TASK,
        log: LOG,
        modal: MODAL,
        weekDays: WEEK_DAYS
    }
}

module.exports = EN_BUNDLE
