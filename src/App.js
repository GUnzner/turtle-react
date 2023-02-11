import React, {useEffect} from 'react';
import Navbar from "./navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Home from "./pages/Home";
import CustomFooter from './components/footer';
import {Route, Routes} from "react-router-dom";
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'de'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/turtle-react/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false}
  });



function App() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('title')
    }, [t])
    
    
    return (
      <div className="sticky-footer">
          <ShoppingCartProvider>
          <Navbar/>
          <div className="content container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/donate" element={<Donate />} />
              </Routes>
        
          
          </div>

          <CustomFooter/>
          </ShoppingCartProvider>
      </div>
        
    );
}

export default App