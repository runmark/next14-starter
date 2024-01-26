
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API
const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/blog", { cache: 'no-store', next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("something went wrong");
    }

    return res.json();
}

const BlogPage = async () => {

    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts?.map(
                (post) => {
                    return (
                        <div className={styles.post} key={post.id}>
                            <PostCard post={post} />
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default BlogPage;