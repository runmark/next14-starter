import { getUser } from "@/lib/data";
import styles from "./author.module.css";
import Image from "next/image";


// FETCH DATA WITH AN API
// const getData = async (userid) => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);

//     if (!res.ok) {
//         throw new Error("wrong");
//     }

//     return res.json();
// }

const Author = async ({ userId }) => {

    const user = await getUser(userId);
    console.log("=======", userId, user);

    return (
        <div className={styles.container}>

            <Image src={user.img ?? "/noavatar.png"} alt=""
                width={50} height={50}
                className={styles.avatar} />

            <div className={styles.texts}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>{user.username}</span>
            </div>
        </div>
    );
}

export default Author;