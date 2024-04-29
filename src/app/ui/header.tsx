import Image from "next/image";
import styles from "@/app/page.module.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <header className={styles.header}>
      <Image 
      src="/logo.png"
      height={100}
      width={100}
      alt="logo"/>
      <h1 className={styles.headertext}>Generic Store</h1>
      <div className={styles.login}>
        <Button variant="light">Sign In</Button>
      </div>
    </header>
  );
}
