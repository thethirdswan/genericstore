'use client';

import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/page.module.css"

export default function Signup() {
    const [text, setText] = useState("")

    function confirm(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setText("Let's pretend you have signed up, hmm? Don't worry, your data didn't get anywhere.\n")
    }
    return (
        <div className="min-vh-100">
            <Header />
                <div className="w-50 m-auto mt-2 mb-2">
                    <h3 className="text-center">Sign Up</h3>
                    <form className={styles.signup} onSubmit={confirm} method="POST">
                        <label htmlFor="Name">Name</label><br/>
                        <input type="text" required name="Name"></input><br/>
                        <label htmlFor="Email">Email</label><br/>
                        <input type="email" required name="Email"></input><br/>
                        <label htmlFor="Password">Password</label><br/>
                        <input type="password" required name="Password"></input><br />
                        <input type="submit" value="Sign Up"></input>
                    </form>
                    <p>{text}</p>
                </div>
            <Footer />
        </div>
    )
}