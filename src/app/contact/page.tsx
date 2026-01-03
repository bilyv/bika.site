
'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <main>
            <Navbar />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.header}>
                        <h1 className={styles.title}>{t('contact.title')}</h1>
                        <p className={styles.subtitle}>
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.infoCol}>
                            <div className={styles.infoItem}>
                                <h3>{t('contact.email')}</h3>
                                <a href="mailto:hello@bika.site">hello@bika.site</a>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>{t('contact.visit')}</h3>
                                <p>123 Business Way, San Francisco, CA</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>{t('contact.socials')}</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <a href="#" style={{ fontSize: '1rem', color: '#666' }}>Twitter</a>
                                    <a href="#" style={{ fontSize: '1rem', color: '#666' }}>LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCol}>
                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">{t('contact.name')}</label>
                                    <input type="text" id="name" placeholder="John Doe" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">{t('contact.emailAddress')}</label>
                                    <input type="email" id="email" placeholder="john@example.com" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="message">{t('contact.message')}</label>
                                    <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    {t('contact.send')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
