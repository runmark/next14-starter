
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';

const login = async (credentials) => {
    const { username, password } = credentials;

    try {

        connectToDb();
        const user = await User.findOne({ username });

        if (!user) {
            throw new Error("wrong credentials!");
        }

        if (! await bcrypt.compare(password, user.password)) {
            throw new Error("wrong credentials!");
        }

        return user;
    } catch (err) {
        console.log(err);
        throw new Error('Failed to login!');
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);

            if (account.provider === 'github') {

                try {
                    connectToDb();
                    const user = await User.findOne({ email: profile.email });

                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        })
                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }

            return true;
        }
    }
})