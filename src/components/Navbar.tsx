
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.links}>
                    <Link href="/#features" className={styles.link}>Overview</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>

                <Link href="/" className={styles.logo}>
                    bika<span>.</span>
                </Link>

                <div className={styles.actions}>
                    <Link href="/signup" className={styles.waitlistBtn}>
                        Join waitlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}
