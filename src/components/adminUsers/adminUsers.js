
import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {

    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>Users!@!!</h1>
            {
                users.map((user) => {
                    return (
                        <div className={styles.user} key={user.id}>
                            <div className={styles.detail}>
                                <Image
                                    src={user.img || "/noavatar.png"}
                                    alt=""
                                    width={50} height={50} />
                                <span className={styles.username}>{user.username}</span>
                            </div>

                            <form action={deleteUser}>
                                <input type="hidden" value={user.id} name="id" />
                                <button className={styles.userButton}> Delete user!  </button>
                            </form>
                        </div>
                    );

                })
            }
        </div>
    );
}

export default AdminUsers;