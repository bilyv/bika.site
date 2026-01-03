
'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
    onLanguageSelect: (lang: string) => void;
}

export default function WelcomeScreen({ onLanguageSelect }: WelcomeScreenProps) {
    const { t } = useTranslation();
    const [isClosing, setIsClosing] = useState(false);

    const handleLanguageSelect = (lang: string) => {
        setIsClosing(true);
        setTimeout(() => {
            onLanguageSelect(lang);
        }, 500);
    };

    return (
        <div className={`${styles.screen} ${isClosing ? styles.fadeOut : ''}`}>
            <div className={styles.logo}>
                bika<span>.</span>
            </div>
            <h1 className={styles.title}>{t('welcome.choose')}</h1>
            <p className={styles.subtitle}>{t('welcome.subtitle')}</p>
            <div className={styles.languageButtons}>
                <button
                    className={styles.langBtn}
                    onClick={() => handleLanguageSelect('en')}
                >
                    <span className={styles.flag}>🇬🇧</span>
                    English
                </button>
                <button
                    className={styles.langBtn}
                    onClick={() => handleLanguageSelect('rw')}
                >
                    <span className={styles.flag}>🇷🇼</span>
                    Kinyarwanda
                </button>
            </div>
        </div>
    );
}
