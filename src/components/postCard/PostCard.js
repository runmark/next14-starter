import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {

    // console.log(post);
    // console.log(post.createdAt);
    // console.log(new Date());
    // console.log(post.desc);

    return (
        <div className={styles.container}>

            <div className={styles.top}>
                {
                    post.img && (
                        <div className={styles.imgContainer}>
                            <Image src={post.img} alt="" fill className={styles.img} />
                        </div>)
                }
                <span className={styles.date}>{post.createdAt.toString().slice(0, 15)}</span>
            </div>

            <div className={styles.bottom}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desc}>{post.body}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
                </div>
            </div>
        </div >
    );
}

export default PostCard;