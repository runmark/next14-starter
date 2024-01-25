"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn } from "./auth";

export const clickme = async () => {
    console.log("hela wa");
}

export const addPost = async (formData) => {

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    const newPost = new Post({
        title, desc, slug, userId
    });

    try {
        connectToDb();
        await newPost.save();
        console.log('saved to db');
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log('deleted from db');
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

}

export const handleGithubLogin = async () => {
    await signIn('github');
}