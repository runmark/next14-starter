// "use client";
import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
    title: 'contact | Next App',
    description: 'contact | Next.js starter app',
}


const ContactPage = () => {

    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => { setIsClient(true) }, []);

    const a = Math.random();
    // console.log(a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {/* <div suppressHydrationWarning>
                    {a}
                </div> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (optional)" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
                    <button className={styles.btn}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;