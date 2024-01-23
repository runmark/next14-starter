import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

// TEMPORARY DATA
// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
// ]

// const posts = [
//     { id: 1, title: "Post 1", body: ".....", userId: 1 },
//     { id: 2, title: "Post 2", body: ".....", userId: 2 },
//     { id: 3, title: "Post 3", body: ".....", userId: 3 },
//     { id: 4, title: "Post 4", body: ".....", userId: 4 },
// ]

export const getPosts = async () => {
    noStore();
    try {
        connectToDb();
        const posts = await Post.find();
        console.log(posts);
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const getPost = async (slug) => {
    noStore();
    try {
        connectToDb();
        return await Post.findOne({ slug });
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        return await User.findById(id);
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}