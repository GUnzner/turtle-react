import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();
    return (
        <><section className="content-section container">
            <h2 className="headline">{t('Contact')}</h2>

            <form className="form" action="https://formsubmit.co/de80cbb99f8354174954316160f9cb98" method="POST">
                <div>
                    <label>{t('Full-name')}(*)</label>
                    <div>
                        <input type="text" name="name" pattern="[a-zA-Z ]+" required />
                    </div>
                </div>
                <div>
                    <label>{t('email')}(*)</label>
                    <div>
                        <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required="required,email" />
                    </div>
                </div>
                <div>
                    <label for="phone">{t('phone')}</label>
                    <div>
                        <input type="tel" name="phone" pattern="[0-9+]+" />
                    </div>
                </div>
                <div>
                    <label>{t('message')}(*)</label>
                    <div>
                        <textarea type="text" name="message" placeholder={t('your message')} maxlength="1000" style={{height: '10rem'}} required="required"></textarea>
                    </div>
                </div>
                <button className="button" type="submit">{t('submit')}</button>
            </form>

        </section>
        <br />
        <section className="content-section container">
                <h3 className="small-header">{t('find')}</h3>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255345.72472220365!2d-90.8494165252299!3d-0.26092301444182975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aab23acc78137a5%3A0x2a4992f090979738!2sSantiago%20Island!5e0!3m2!1sen!2sit!4v1645800668802!5m2!1sen!2sit" 
                width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </section></>
    )
}