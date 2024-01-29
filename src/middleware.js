import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

// console.log(NextAuth(authConfig));
// return: 
// {
//     handlers: { GET: [Function: httpHandler], POST: [Function: httpHandler] },
//     auth: [Function],
//     signIn: [Function: signIn],
//     signOut: [Function: signOut],
//     update: [Function: update]
// }

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware