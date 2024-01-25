import Author from "@/components/author/Author";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./singleBlogPost.module.css";


// FETCH DATA WITH AN API
const getData = async ({ slug }) => {

    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: "no-cache" });
    // console.log("========", `http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("sth went wrong");
    }

    return res.json();
}

export const generateMetadata = async ({ params }) => {


    const { slug } = params;
    // console.log("==========xxxxx", slug);
    const blog = await getData({ slug });

    return {
        title: blog.title,
        description: blog.desc,
    };
}

const SingleBlogPost = async ({ params }) => {

    const { slug } = params;
    // FETCH DATA WITH AN API
    // const post = await getData({ slug: slug });

    // FETCH DATA WITHOUT AN API
    const post = await getData({ slug });
    // console.log("=======", slug, post);


    return (
        <div className={styles.container}>
            {
                post?.img &&
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill
                        className={styles.img} />
                </div>
            }
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>

                    <Suspense fallback={<div>loading...</div>}>
                        <Author userId={post.userId} />
                    </Suspense>

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
                    </div>
                </div>

                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div >
    );
}

export default SingleBlogPost;
