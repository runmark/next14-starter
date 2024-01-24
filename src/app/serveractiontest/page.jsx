import { addPost, deletePost } from "@/lib/action";


const ServerActionTest = () => {

    // const actionInComponent = async () => {
    //     'use server';
    //     console.log("halowa");
    // }

    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title" />
                <input placeholder="desc" name="desc" />
                <input placeholder="slug" name="slug" />
                <input placeholder="userId" name="userId" />
                <button>add post!!</button>
            </form>
            <form action={deletePost}>
                <input type="text" placeholder="id" name="id" />
                <button>delete me!!</button>
            </form>
        </div >
    );
}

export default ServerActionTest;