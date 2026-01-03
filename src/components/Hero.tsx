
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Master Your Business<br />
                        Efficiency with Bika
                    </h1>
                    <p className={styles.description}>
                        Your inventory, sales, and finance—all in one place.<br />
                        One simple, unified view of your business growth.
                    </p>
                    <div className={styles.ctaGroup}>
                        <div className={styles.inputPlaceholder}>Enter email</div>
                        <Link href="/signup" className={styles.secondaryBtn}>
                            Join waitlist
                        </Link>
                    </div>
                </div>

                <div className={styles.dashboardPreview}>
                    <Image
                        src="/dashboard.png"
                        alt="Bika Dashboard Interface"
                        width={1100}
                        height={700}
                        priority
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </section>
    );
}
