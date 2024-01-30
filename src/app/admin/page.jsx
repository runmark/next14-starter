import AdminPosts from "@/components/adminPosts/adminPosts";
import { Suspense } from "react";

import styles from "./page.module.css";
import AdminUsers from "@/components/adminUsers/adminUsers";

const AdminPage = () => {
    return (

        <div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>posts loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}></div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>user loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}></div>
            </div>
        </div>

    );
}

export default AdminPage;