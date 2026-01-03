
'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' }
    ];

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('language', langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                className={styles.triggerBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
            >
                <Languages size={20} />
            </button>

            {isOpen && (
                <div className={styles.menu}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={styles.menuItem}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className={styles.flag}>{lang.flag}</span>
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
