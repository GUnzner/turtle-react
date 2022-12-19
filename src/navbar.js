import {Link, useMatch, useResolvedPath} from "react-router-dom"
import React, {useState} from "react"

import Provider from './I18n/provider';
import { LOCALES } from './I18n/locales';
import translate from './I18n/translate';



export default function Navbar () {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);
    return (
        <Provider locale={locale}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-left">
            <ul className="navbar-nav mr-auto">
            <Link to="/" className="site-title">Save the Turtles</Link> 
                <CustomLink to="/about" className="link">About</CustomLink>
                <CustomLink to="/donate" className="link">Donate</CustomLink>
                <CustomLink to="/contact" className="link">Contact</CustomLink>
                <button  onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
                <button  onClick={() => setLocale(LOCALES.GERMAN)}>Deutsch</button>
            </ul>
        </nav>
        </Provider>
    
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props}>{children}</Link>
        </li>
    )
}