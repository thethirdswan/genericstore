import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { articles }  from "@/app/lib/multiData";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"


export default function OnePage() {
    return (
        <div className="min-vh-100">
        <Header />
            <a href="/">{articles[0].tag}</a>
            <p>{articles[0].date}</p>
            <p>{articles[0].content}</p>
        <Footer />
        </div>
    )
}