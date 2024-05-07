'use client';

import Header from "@/app/ui/header"
import Footer from "@/app/ui/footer"
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/page.module.css"

export default function Login() {
    const [text, setText] = useState("")

    function confirm(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setText(text + "Let's pretend you have logged in, hmm?\n")
    }
    return (
        <div className="min-vh-100">
            <Header />
            <div className="w-50 m-auto mt-2 mb-2">
                    <h3 className="text-center">Log in</h3>
                    <form className={styles.signup} onSubmit={confirm} method="POST">
                        <label htmlFor="Email">Email</label><br/>
                        <input type="email" required name="Email"></input><br/>
                        <label htmlFor="Password">Password</label><br/>
                        <input type="password" required name="Password"></input><br />
                        <input type="submit" value="Log in"></input>
                    </form>
                    <p>{text}</p>
                </div>
            <Footer />
        </div>
    )
}