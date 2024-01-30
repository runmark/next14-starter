import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import { deletePost } from "@/lib/action";
import Image from "next/image";

const AdminPosts = async () => {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            <h1>POSTS!!</h1>

            {
                posts.map((post) => {
                    return (
                        <div className={styles.post} key={post.id}>
                            <div className={styles.detail}>
                                <Image
                                    src={post.img || "/noAvatar.png"}
                                    alt=""
                                    width={50} height={50}
                                />
                                <span className={styles.postTitle}>{post.title}</span>
                            </div>

                            <form action={deletePost}>
                                <input type="hidden" value={post.id} name="id" />
                                <button className={styles.postButton}>
                                    Delete post!
                                </button>
                            </form>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default AdminPosts;