import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/259670/pexels-photo-259670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>2024.01.01</span>
            </div>

            <div className={styles.bottom}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Desc</p>
                    <Link href={`/blog/slug`} className={styles.link}>READ MORE</Link>
                </div>
            </div>
        </div >
    );
}

export default PostCard;