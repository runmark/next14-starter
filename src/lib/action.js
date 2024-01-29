"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

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

export const handleLogout = async () => {
    await signOut();
}

export const handleRegister = async (previousState, formData) => {
    const { username, email, img, password, passwordAgain } = Object.fromEntries(formData);

    if (password !== passwordAgain) {
        return ({ error: "password does not match!" });
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "user already registered! " };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            img: img,
        });

        await newUser.save();
        console.log("saved to db");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "sth went wrong" };
    }
}

export const handleCredentialLogin = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "invalid username or password" }
        }

        throw err;
    }


}