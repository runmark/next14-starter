
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils";
import { User } from "./models";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log(user, account, profile);

            try {
                connectToDb();
                const user = await User.findOne({ email: profile.email });

                if (!user) {
                    if (account.provider === 'github') {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        })
                        await newUser.save();
                    }
                }
            } catch (err) {
                console.log(err);
                return false;
            }

            return true;
        }
    }
})