
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    bika<span>.</span>
                </Link>

                <div className={styles.links}>
                    <Link href="#features" className={styles.link}>Features</Link>
                    <Link href="#inventory" className={styles.link}>Inventory</Link>
                    <Link href="#finance" className={styles.link}>Finance</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/login" className={styles.loginBtn}>
                        Log in
                    </Link>
                    <Link href="/signup" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
