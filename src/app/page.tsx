import Header from "@/app/ui/header";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className={styles.maintext}>Welcome to generic store</h2>
      <p className={styles.maintext}>Where all your shopping needs are fulfilled</p>
    </main>
  );
}
