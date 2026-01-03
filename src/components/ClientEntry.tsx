
'use client';

import { useEffect, useState, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import WelcomeScreen from './WelcomeScreen';

interface ClientEntryProps {
    children: ReactNode;
}

export default function ClientEntry({ children }: ClientEntryProps) {
    const [languageSelected, setLanguageSelected] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguageSelected(true);
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageSelect = (lang: string) => {
        localStorage.setItem('language', lang);
        i18n.changeLanguage(lang);
        setLanguageSelected(true);
    };

    if (!mounted) {
        return null;
    }

    return (
        <I18nextProvider i18n={i18n}>
            {!languageSelected && <WelcomeScreen onLanguageSelect={handleLanguageSelect} />}
            {languageSelected && children}
        </I18nextProvider>
    );
}
