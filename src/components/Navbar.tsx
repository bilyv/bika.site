
'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useWaitlist } from './WaitlistContext';

export default function Navbar() {
    const { openWaitlist } = useWaitlist();

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
                    <button onClick={() => openWaitlist()} className={styles.waitlistBtn}>
                        Join waitlist
                    </button>
                </div>
            </div>
        </nav>
    );
}
