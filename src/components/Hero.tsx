
'use client';

import { useState } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { useWaitlist } from './WaitlistContext';

export default function Hero() {
    const [email, setEmail] = useState('');
    const { openWaitlist } = useWaitlist();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        openWaitlist(email);
    };

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
                    <form className={styles.ctaGroup} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.secondaryBtn}>
                            Join waitlist
                        </button>
                    </form>
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
