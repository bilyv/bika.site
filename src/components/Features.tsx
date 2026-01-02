
import styles from './Features.module.css';
import {
    Package,
    TrendingUp,
    Receipt,
    Wallet,
    FileText
} from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Package,
        title: "Inventory Tracking",
        desc: "Real-time stock monitoring, low stock alerts, and automated reordering. Never run out of inventory again."
    },
    {
        icon: TrendingUp,
        title: "Sales Management",
        desc: "Track every sale, manage customer relationships, and analyze purchasing trends to boost your revenue."
    },
    {
        icon: Receipt,
        title: "Expense Tracking",
        desc: "Monitor business spending, categorize expenses, and see exactly where your money is going."
    },
    {
        icon: Wallet,
        title: "Finance & Accounting",
        desc: "Complete financial overview with profit & loss statements, balance sheets, and cash flow analysis."
    },
    {
        icon: FileText,
        title: "Document Managment",
        desc: "Store and organize invoices, receipts, and contracts securely in one accessible location."
    }
];

export default function Features() {
    return (
        <section className={styles.section} id="features">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Everything You Need to Run Your Business</h2>
                    <p className={styles.subtitle}>
                        Bika replaces your disconnected tools with one unified operating system.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDesc}>{feature.desc}</p>
                            </div>
                            <Link href="#" className={styles.learnMore}>Learn more →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
