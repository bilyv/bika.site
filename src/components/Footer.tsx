
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.logo}>bika<span>.</span></div>

                    <div className={styles.links}>
                        <Link href="/#features" className={styles.link}>Overview</Link>
                        <Link href="/#inventory" className={styles.link}>Inventory</Link>
                        <Link href="/#finance" className={styles.link}>Finance</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                        <Link href="#" className={styles.link}>Privacy</Link>
                    </div>

                    <div className={styles.bottom}>
                        <p>© 2026 Bika Inc. All rights reserved.</p>
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
