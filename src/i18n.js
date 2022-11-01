import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: 'Edit <1>src/App.js</1> and save to reload.',
                        part2: 'Learn React'
                    },
                    navbar: {
                        part1: 'Home',
                        part2: 'Posts',
                        part3: 'Dashboard',
                        part4: 'Add item',
                        part5: 'Manage collection',
                        logout: 'Logout',
                        login: 'Login',
                        signup: 'Sing up',
                    }
                }
            },
            pl: {
                translation: {
                    description: {
                        part1: 'Edytuj <1>src/App.js</1> i zapisz aby odswieżyć',
                        part2: `Ucz się React'a`
                    },
                    navbar: {
                        part1: 'Główna',
                        part2: 'Posty',
                        part3: 'Panel administratora',
                        part4: 'Dodaj przedmiot',
                        part5: 'Zarządzaj kolejkcją',
                        logout: 'Wyloguj się',
                        login: 'Zaloguj się',
                        signup: 'Zarejestruj się',
                    }
                }
            }
        }
    });

export default i18n;
