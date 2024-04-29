import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-vh-100">
      <Header />
      <h2 className={styles.maintext}>Welcome to generic store</h2>
      <p className={styles.maintext}>Where all your shopping needs are fulfilled</p>
      <div className="d-flex flex-row m-2">
        <Image
        src="/nasigoreng.jpg"
        width={500}
        height={300}
        alt="nasi goreng"/>
        <p className="m-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus commodi iste minima officiis? Error in labore impedit quo! Aperiam illum eaque modi, non magnam aut quam culpa inventore perspiciatis officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet omnis autem iusto. Laborum debitis repellendus quibusdam ipsam fuga quasi magnam, neque praesentium dolore numquam quos nobis quis, accusantium, atque distinctio.</p>
      </div>
      <div className="d-flex flex-row-reverse m-2">
        <Image 
        src="/esteh.jpg"
        width={500}
        height={300}
        alt="es teh"
        />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, possimus? Necessitatibus accusantium ullam atque vero temporibus consequatur saepe, numquam architecto optio fuga voluptas ipsam natus, maiores, quidem dolore. Commodi, ratione? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid harum veritatis vel placeat impedit dicta non cumque repellat itaque illum. Porro suscipit, amet quas eos asperiores quos ipsam earum sunt?</p>
      </div>
      <p className="text-center">Jiafei products available:</p>
      <div className="d-flex justify-content-around">
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 1</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 2</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 3</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 4</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 5</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 6</p>
          <p>Rp10.000</p>
        </div>
        <div className={styles.items}>
          <Image
          src="/bayonettadress.jpg"
          width={100}
          height={100}
          alt="bayonetta"
          />
          <p>Item 7</p>
          <p>Rp10.000</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
