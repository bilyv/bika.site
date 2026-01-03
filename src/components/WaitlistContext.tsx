
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import WaitlistModal from './WaitlistModal';

interface WaitlistContextType {
    openWaitlist: (email?: string) => void;
    closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    const openWaitlist = (initialEmail?: string) => {
        if (initialEmail) setEmail(initialEmail);
        setIsOpen(true);
    };

    const closeWaitlist = () => setIsOpen(false);

    return (
        <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist }}>
            {children}
            <WaitlistModal
                isOpen={isOpen}
                onClose={closeWaitlist}
                initialEmail={email}
            />
        </WaitlistContext.Provider>
    );
}

export function useWaitlist() {
    const context = useContext(WaitlistContext);
    if (context === undefined) {
        throw new Error('useWaitlist must be used within a WaitlistProvider');
    }
    return context;
}
