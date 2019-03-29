import React from 'react'
import './change-lang.scss'
import { useTranslation } from 'react-i18next';

const ChangeLang = () => {
    const { i18n } = useTranslation();

    const changeLang = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <select name="change-lang" className="change-lang" onChange={changeLang}>
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>
    )
}

export default ChangeLang