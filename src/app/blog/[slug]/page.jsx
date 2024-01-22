import Image from "next/image";
import styles from "./singleBlogPost.module.css";

const SingleBlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19808876/pexels-photo-19808876/free-photo-of-misty-morning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill
                    className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/19808876/pexels-photo-19808876/free-photo-of-misty-morning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                        width={50} height={50}
                        className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>

                <div className={styles.content}>
                    Lorem,ipsum dolor sit amet consectetur adipisicing elit blanditiis adipisci minima reiciendis a autem assumenda
                </div>
            </div>
        </div >
    );
}

export default SingleBlogPost;
