"use client";

import { handleCredentialLogin } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const CredentialLoginForm = () => {

    const [state, formAction] = useFormState(handleCredentialLogin, undefined);

    const router = useRouter();

    // useEffect doesn't work, 
    // because handleCredentialLogin will throw a NEXT_REDIRECT error,
    // to prevent any action, and ensure the redirect action.
    // so we should use middleware instead of useEffect.
    // useEffect(() => {
    //     state?.success && router.push("/");
    // }, [state?.success, router]);

    return (
        <form action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login with Credential</button>
            {state?.error}
        </form>
    );
}

export default CredentialLoginForm;