
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <h2 style={{ fontWeight: 800, fontSize: '1.5rem' }}>bika.</h2>
                        <p className={styles.brandDesc}>
                            The complete operating system for your business. Manage inventory, finance, and more.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>Product</h4>
                        <div className={styles.links}>
                            <Link href="#" className={styles.link}>Features</Link>
                            <Link href="#" className={styles.link}>Pricing</Link>
                            <Link href="#" className={styles.link}>Inventory</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>Company</h4>
                        <div className={styles.links}>
                            <Link href="#" className={styles.link}>About</Link>
                            <Link href="#" className={styles.link}>Blog</Link>
                            <Link href="#" className={styles.link}>Careers</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>Legal</h4>
                        <div className={styles.links}>
                            <Link href="#" className={styles.link}>Privacy</Link>
                            <Link href="#" className={styles.link}>Terms</Link>
                            <Link href="#" className={styles.link}>Security</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2024 Bika Inc. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
