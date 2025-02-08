import Store from "@/utils/Store";
import Link from "next/link";

export default function Navigation () {

    return (
        <nav>
            {Store.navigation.map((el, i) => (
                <Link className="nav_item" key={i} href={el.link}>{el.title}</Link>
            ))}
        </nav>
    )
}