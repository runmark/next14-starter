import CredentialLoginForm from "@/components/loginForm/page";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {

    // const session = await auth();
    // console.log(session);

    // auth?.user && router.push("/");

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>login in with Github</button>
            </form>
            <CredentialLoginForm />
        </div>
    );
}

export default LoginPage;