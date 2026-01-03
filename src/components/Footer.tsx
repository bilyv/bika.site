
'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.logo}>bika<span>.</span></div>

                    <div className={styles.links}>
                        <Link href="/#features" className={styles.link}>{t('nav.overview')}</Link>
                        <Link href="/#inventory" className={styles.link}>{t('features.inventory.title')}</Link>
                        <Link href="/#finance" className={styles.link}>{t('features.finance.title')}</Link>
                        <Link href="/contact" className={styles.link}>{t('nav.contact')}</Link>
                        <Link href="#" className={styles.link}>{t('footer.privacy')}</Link>
                    </div>

                    <div className={styles.bottom}>
                        <p>{t('footer.copyright')}</p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <span style={{ cursor: 'pointer' }}>Twitter</span>
                            <span style={{ cursor: 'pointer' }}>LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
