
import styles from './Features.module.css';
import {
    Package,
    TrendingUp,
    Receipt,
    Wallet,
    FileText
} from 'lucide-react';
import Link from 'next/link';

export const features = [
    {
        slug: "inventory",
        icon: Package,
        title: "Inventory Tracking",
        desc: "Real-time stock monitoring, low stock alerts, and automated reordering. Never run out of inventory again."
    },
    {
        slug: "sales",
        icon: TrendingUp,
        title: "Sales Management",
        desc: "Track every sale, manage customer relationships, and analyze purchasing trends to boost your revenue."
    },
    {
        slug: "expenses",
        icon: Receipt,
        title: "Expense Tracking",
        desc: "Monitor business spending, categorize expenses, and see exactly where your money is going."
    },
    {
        slug: "finance",
        icon: Wallet,
        title: "Finance & Accounting",
        desc: "Complete financial overview with profit & loss statements, balance sheets, and cash flow analysis."
    },
    {
        slug: "documents",
        icon: FileText,
        title: "Document Management",
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
                        Bika replaces your disconnected tools with one unified operating system. Click a module to learn more.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <Link href={`/features/${feature.slug}`} key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
