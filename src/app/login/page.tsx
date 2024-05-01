import Header from "@/app/ui/loginheader"
import Footer from "@/app/ui/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/page.module.css"

export default function Login() {
    return (
        <div className="min-vh-100">
            <Header />
            <div className="w-50 m-auto mt-2 mb-2">
                    <h3 className="text-center">Log in</h3>
                    <form className={styles.signup}>
                        <p>Email</p>
                        <input type="text" required></input>
                        <p>Password</p>
                        <input type="password" required></input><br />
                        <input type="submit" value="Log in"></input>
                    </form>
                </div>
            <Footer />
        </div>
    )
}