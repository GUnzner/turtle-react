import React from 'react';
import icon from '../images/icon.jpg';
import githubIcon from '../images/github.png';
import dght from '../images/dght.png';
import { useTranslation } from 'react-i18next';

function CustomFooter() { 
    const { t } = useTranslation();
    return (
        <> 
        <footer className="footer">
            <div className="container footer-container">
                <img 
                    alt="Icon"
                    style={{height: '20px'}}
                    src={icon}
                />
                <h3>{t('title')}</h3>
                { <ul className="footer-nav">
                    <li><a href="https://github.com/GUnzner" target="_blank"
                    rel="noreferrer">
                        <img alt="Github" style={{width: "50px"}} src={githubIcon}/>
                    </a></li>
                    <li><a href="https://schildkroeten.dght.de/" target="_blank"
                     rel="noreferrer">
                        <img alt="dght" style={{width: "50px"}} src={dght}/>
                    </a></li>
                </ul> }
            </div>
        </footer>
        </>
    );
}

export default CustomFooter