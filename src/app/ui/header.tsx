'use client';

import Image from "next/image";
import { usePathname } from 'next/navigation';
import styles from "@/app/page.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
    <Link href="/">
        <Image 
        src="/logo.png"
        height={100}
        width={100}
        alt="logo"/>
      </Link>
      <h1 className={styles.headertext}>Generic Store</h1>
      <div className={styles.login}>
            <Link href="/signup">
                <Button variant="light" className={clsx("loginbutton", {"d-none" : pathName === "/signup"})}>Sign Up</Button>
            </Link>
            <Link href="/login">
                <Button variant="primary" className={clsx("loginbutton", {"d-none" : pathName === "/login"})}>Log In</Button>
            </Link>
      </div>
    </header>
  );
}
