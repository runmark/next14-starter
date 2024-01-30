
import { addUser } from "@/lib/action";
import useFormState from "react-dom";

const AdminUserForm = () => {

    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="img" name="img" />
            <input type="password" placeholder="password" name="password" />
            <select name="isAdmin">
                <option value='false'>Is Admin?</option>
                <option value='false'>No</option>
                <option value='true'>Yes</option>
            </select>
            <button>add user!!</button>
            {state?.error}
        </form>
    );
}

export default AdminUserForm;