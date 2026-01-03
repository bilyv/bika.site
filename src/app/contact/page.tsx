
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.header}>
                        <h1 className={styles.title}>Let's talk</h1>
                        <p className={styles.subtitle}>
                            Have questions about Bika? We're here to help you scale your business operations effectively.
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.infoCol}>
                            <div className={styles.infoItem}>
                                <h3>Email us</h3>
                                <a href="mailto:hello@bika.site">hello@bika.site</a>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Visit us</h3>
                                <p>123 Business Way, San Francisco, CA</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Socials</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <a href="#" style={{ fontSize: '1rem', color: '#666' }}>Twitter</a>
                                    <a href="#" style={{ fontSize: '1rem', color: '#666' }}>LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCol}>
                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Send Message
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
