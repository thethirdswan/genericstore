import Image from "next/image";
import styles from "@/app/page.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
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
                <Button variant="light" className={styles.loginbutton}>Sign Up</Button>
            </Link>
            <Link href="/login">
                <Button variant="primary" className={styles.loginbutton}>Log In</Button>
            </Link>
      </div>
    </header>
  );
}
