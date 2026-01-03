
'use client';

import { features } from "@/lib/features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../feature.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function FeaturePage() {
    const params = useParams();
    const slug = params?.slug as string;
    const { t } = useTranslation();

    const feature = features.find(f => f.slug === slug);

    if (!feature) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.content}>
                        <Link href="/#features" className={styles.backBtn}>
                            <ArrowLeft size={16} /> {t('features.back')}
                        </Link>

                        <header className={styles.header}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={40} />
                            </div>
                            <h1 className={styles.title}>{t(feature.titleKey)}</h1>
                            <p className={styles.mainDesc}>{t(feature.longDescKey)}</p>
                        </header>

                        <section className={styles.section}>
                            <h2>{t('features.theProblem')}</h2>
                            <p>{t(feature.problemKey)}</p>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.solutionBox}>
                                <h3>{t('features.howBikaSolvesIt')}</h3>
                                <p>{t(feature.solutionKey)}</p>
                            </div>
                        </section>

                        <div className={styles.ctaWrapper}>
                            <h2>{t('features.ready')}</h2>
                            <p>{t('features.readyDesc')}</p>
                            <Link href="/signup" className={styles.ctaBtn}>
                                {t('features.getStarted')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
