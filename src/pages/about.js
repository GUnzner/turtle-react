import React from 'react';
import turtle from "../images/Schildi.JPG";
import { useTranslation } from 'react-i18next';

export default function About(){
    const { t } = useTranslation();
    return (
    <><h1 className="headline">{t('about')}</h1>
    <p>{t('about-text')}</p>
    <img alt='Schildi' className="mb-5" style={{height: '50vw'}} src={turtle}></img></>
    )
}