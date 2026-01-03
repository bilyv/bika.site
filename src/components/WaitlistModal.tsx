
'use client';

import { useState } from 'react';
import styles from './WaitlistModal.module.css';
import { X } from 'lucide-react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialEmail?: string;
}

export default function WaitlistModal({ isOpen, onClose, initialEmail = '' }: WaitlistModalProps) {
    const [email, setEmail] = useState(initialEmail);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic here
        alert(`Thank you! ${email} has been added to the waitlist.`);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>
                <h2 className={styles.title}>Join the waitlist</h2>
                <p className={styles.desc}>
                    We're currently in invite-only beta. Enter your email to get early access.
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="you@gmail.com"
                        className={styles.input}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />
                    <button type="submit" className={styles.submitBtn}>
                        Join waitlist
                    </button>
                </form>
            </div>
        </div>
    );
}
