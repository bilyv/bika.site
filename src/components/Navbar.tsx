
'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { useWaitlist } from './WaitlistContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { openWaitlist } = useWaitlist();
    const { t } = useTranslation();

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.links}>
                    <Link href="/#features" className={styles.link}>{t('nav.overview')}</Link>
                    <Link href="/contact" className={styles.link}>{t('nav.contact')}</Link>
                </div>

                <Link href="/" className={styles.logo}>
                    bika<span>.</span>
                </Link>

                <div className={styles.actions}>
                    <LanguageSwitcher />
                    <button onClick={() => openWaitlist()} className={styles.waitlistBtn}>
                        {t('nav.joinWaitlist')}
                    </button>
                </div>
            </div>
        </nav>
    );
}
