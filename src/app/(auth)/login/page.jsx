import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = async () => {

    // const session = await auth();
    // console.log(session);

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>login in with Github</button>
            </form>
        </div>
    );
}

export default LoginPage;