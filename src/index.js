import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
// import pipeline from 'promise-sequence/lib/pipeline'
// import { prepareLocale } from './locale/locale'
import './locale/i18n'
import { stores } from './store'
import { Provider } from 'mobx-react'

/*export const LOCALE = 'ru'

pipeline([
    () => {
        console.group('Initialization')
    },
    () => {
        console.info('>>> locale ready')
        return prepareLocale(LOCALE)
    },
    (t) => {
        console.info('>>> set title')
        document.title = t('common.title')
    },
    () => {
        console.info('>>> app start')
        startApplication()
    }
])
    .then(() => {
        console.groupEnd()
    })
    .catch((error) => {
        console.error(error)
        console.groupEnd()
        startApplication()
    })*/


const app = (
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

// function startApplication() {
    ReactDOM.render(app, document.getElementById('root'));
// }

serviceWorker.unregister();
