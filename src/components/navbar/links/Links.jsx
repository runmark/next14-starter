"use client";

import { handleLogout } from "@/lib/action";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";


const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
];

export default function Links({ session }) {

    const [open, setOpen] = useState(false);

    //TODO temporary
    // const session = auth();
    // const isAdmin = true;
    // console.log("=========", session);

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map(
                    link => <NavLink item={link} key={link.title} />
                )}
                {
                    session?.user ? (
                        <>
                            {session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}

                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    )
                        : <NavLink item={{ title: "Login", path: "/login" }} />
                }
            </div>

            <div>
                <Image src="/menu.png" alt=""
                    className={styles.menuButton}
                    width={20} height={20}
                    onClick={() => setOpen(!open)}
                />
                {open &&
                    <div className={styles.mobileLinks}>
                        {links.map(
                            link => <NavLink item={link} key={link.title} />
                        )}
                    </div>
                }
            </div>
        </div>
    );

}