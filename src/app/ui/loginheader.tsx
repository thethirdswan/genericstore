import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function LoginHeader() {
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
      </header>
    )
}