'use client';

import clsx from 'clsx'
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname()
    return (
        <footer className={clsx("bg-secondary d-flex", {"position-fixed bottom-0 w-100": pathname === "/signup"}, {"position-fixed bottom-0 w-100": pathname === "/login"}, {"position-fixed bottom-0 w-100": pathname === "/onepage"})}>
            <p className="text-white">Stay determined.</p>
        </footer>
    )
}