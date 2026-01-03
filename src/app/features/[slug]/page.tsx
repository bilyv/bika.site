
import { features } from "@/components/Features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../feature.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Enhanced content for detail pages
const featureDetails: Record<string, { description: string, problem: string, solution: string }> = {
    inventory: {
        description: "Bika's Inventory Tracking module provides a birds-eye view of your entire stock ecosystem, from warehouse to point of sale.",
        problem: "Most businesses struggle with 'hidden' stock costs, stockouts during peak seasons, and manual entry errors that lead to lost revenue.",
        solution: "Bika automates stock levels with real-time syncing. We use predictive alerts to tell you when a product is running low before it happens, and our QR scanning system eliminates manual entry errors entirely."
    },
    sales: {
        description: "Our Sales Management system isn't just a record of transactions; it's a growth engine that analyzes every purchase to find your next opportunity.",
        problem: "Data siloed in different sales channels makes it impossible to understand true customer lifetime value or identify which products actually drive your margins.",
        solution: "Bika unifies all sales data—online and offline—into one dashboard. We provide automated customer segmentation and visual reports that show you exactly which sales strategies are working and which are wasting your budget."
    },
    expenses: {
        description: "Track every cent that leaves your business with our automated Expense Tracking module, built for transparency and tax readiness.",
        problem: "Lost receipts, uncategorized spending, and late-night expense reporting are massive time sinks that hurt business profitability and create tax compliance risks.",
        solution: "With Bika, employees can snap photos of receipts on the go. Our AI automatically extracts amounts and categories, matching them to your bank feeds. You get a real-time burn-rate view that keeps your spending on track."
    },
    finance: {
        description: "Professional Finance & Accounting tools that give you CFO-level insights without the complexity of traditional accounting software.",
        problem: "Relying on old spreadsheets or complex software means business owners are often making decisions based on data that is weeks or months out of date.",
        solution: "Bika generates your Balance Sheets, P&L statements, and Cash Flow reports instantly. Our simplified ledger system handles double-entry accounting in the background, so you always know your exact financial health in real-time."
    },
    documents: {
        description: "A secure, centralized vault for all your business Documents, organized by project, client, or financial year.",
        problem: "Searching through physical folders or cluttered email threads for a specific contract or invoice can waste hours of productive time every week.",
        solution: "Bika's Document Management system automatically links files to relevant transactions and clients. Everything is encrypted and searchable, meaning the contract you need is always just a two-second search away."
    }
};

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const feature = features.find(f => f.slug === slug);
    const detail = featureDetails[slug];

    if (!feature || !detail) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.content}>
                        <Link href="/#features" className={styles.backBtn}>
                            <ArrowLeft size={16} /> Back to features
                        </Link>

                        <header className={styles.header}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={40} />
                            </div>
                            <h1 className={styles.title}>{feature.title}</h1>
                            <p className={styles.mainDesc}>{detail.description}</p>
                        </header>

                        <section className={styles.section}>
                            <h2>The Problem</h2>
                            <p>{detail.problem}</p>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.solutionBox}>
                                <h3>How Bika Solves It</h3>
                                <p>{detail.solution}</p>
                            </div>
                        </section>

                        <div className={styles.ctaWrapper}>
                            <h2>Ready to transform your business?</h2>
                            <p>Join thousands of businesses already scaling with Bika.</p>
                            <Link href="/signup" className={styles.ctaBtn}>
                                Get Started for Free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return features.map((feature) => ({
        slug: feature.slug,
    }));
}
