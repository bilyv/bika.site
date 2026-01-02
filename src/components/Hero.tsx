

import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgBlob} />
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.badge}>New: AI-Powered Inventory Tracking</div>
                    <h1 className={styles.title}>
                        Master Your Business<br />
                        With One System
                    </h1>
                    <p className={styles.description}>
                        Bika brings your inventory, sales, expenses, and finance together.
                        Stop juggling multiple tools and start growing.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/signup" className="btn btn-primary">
                            Start Free Trial
                        </Link>
                        <Link href="#demo" className={`btn ${styles.secondaryBtn}`}>
                            View Demo
                        </Link>
                    </div>
                </div>

                <div className={styles.dashboardPreview}>
                    <Image
                        src="/dashboard.png"
                        alt="Bika Dashboard Interface"
                        width={1000}
                        height={600}
                        priority
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </section>
    );
}
