import Link from "next/link";


const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
];

export default function Links() {

    return (
        <div>
            {links.map(link => <Link href={link.path} key={link.path}>{link.title}</Link>)}
        </div>
    );

}