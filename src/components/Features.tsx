
'use client';

import styles from './Features.module.css';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { features } from '@/lib/features';

export default function Features() {
    const { t } = useTranslation();

    return (
        <section className={styles.section} id="features">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('features.title')}</h2>
                    <p className={styles.subtitle}>
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <Link href={`/features/${feature.slug}`} key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{t(feature.titleKey)}</h3>
                            <p className={styles.cardDesc}>{t(feature.descKey)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
