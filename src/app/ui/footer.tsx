'use client';

import clsx from 'clsx'
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname()
    return (
        <footer className={clsx("bg-secondary d-flex", {"position-sticky top-100": pathname === "/signup"}, {"position-sticky top-100": pathname === "/login"})}>
            <p className="text-white">Stay determined.</p>
        </footer>
    )
}