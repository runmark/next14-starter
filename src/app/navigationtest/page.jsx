"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const NavigationTest = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(pathname);
    console.log(searchParams.get('param'));

    const route = useRouter();

    const handleClick = () => {
        console.log("click here!!");
        route.refresh();
    }

    return (
        <div>
            <Link href="/">hello</Link>
            <br />
            <button onClick={handleClick}>write and route</button>
        </div>
    );
}

export default NavigationTest;