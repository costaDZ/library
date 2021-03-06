import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';


const AppContent = React.createContext();

const AppProvider = ({ children }) => {

    const { t, i18n } = useTranslation();


    function handelClick(e) {
        i18n.changeLanguage(e);
        let htmlContainer = document.querySelector("html");

        htmlContainer.lang = e;
        if (e === "ar") {
            htmlContainer.setAttribute("dir", "rtl");
        } else {
            htmlContainer.setAttribute("dir", "ltr");
        }


    }


    return (
        <AppContent.Provider value={
            {
                handelClick,
                t
            }
        }>
            {children}
        </AppContent.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContent);
}

export { AppContent, AppProvider }