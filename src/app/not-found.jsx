import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h1>NotFound</h1>
            <p>The page you are looking for is not found!</p>
            <Link href='/'>Please Return Home!!</Link>
        </div>
    );
}

export default NotFound;