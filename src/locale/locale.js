import i18next from "i18next"
import intervalPlural from 'i18next-intervalplural-postprocessor'

export function prepareLocale(locale) {
    return import(`./${locale}/${locale}`)
        .then(langBundle => {
            return new Promise((resolve, reject) => {
                i18next.use(intervalPlural).init({
                    lng: locale,
                    resources: {
                        en: locale === 'en' ? langBundle : null,
                        ru: locale === 'ru' ? langBundle : null
                    }
                }, (err, t) => {
                    if (err) {
                        console.error('i18next init error:', err)
                        reject(err)
                    } else {
                        resolve(t)
                    }
                })
            })
        })
        .catch((error) => {
            console.error('Error while importing locale bundle', error)
        })
}
