import React, {useState} from 'react';
import Navbar from "./navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Home from "./pages/Home";
import CustomFooter from './components/footer';
import {Route, Routes} from "react-router-dom";
import Carousel from './components/carousel';

import Provider from './I18n/provider';
import { LOCALES } from './I18n/locales';
import translate from './I18n/translate';

function App() {
   const [locale, setLocale] = useState(LOCALES.ENGLISH);
    return (
        <> 
        <Provider locale={locale}>
        <Navbar/>
        <div className="content container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        {translate("hello")}
        <Carousel /> 
        
        </div>
        
        </Provider>
        <CustomFooter/>
        </>
        
    );
}

export default App