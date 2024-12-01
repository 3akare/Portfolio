import Link from "next/link";

export default function Header() {
    return (
        <header className={"w-full flex justify-center"}>
            <nav className={"fixed bg-white dark:bg-black top-0 w-full h-[4.75rem] z-20 container mx-auto max-w-[90rem] flex flex-row justify-between items-center px-[40px] md:px-[64px] lg:px-[80px]"}>
                <Link href={"/"} className={"capitalize font-semibold text-lg md:text-xl"}>3AKARE</Link>
                <ul className={"flex-row gap-1 font-medium text-lg hidden md:flex"}>
                    <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                        <Link href={"#"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                            Work
                        </Link>
                    </li>
                    <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                        <Link href={"#"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                            About
                        </Link>
                    </li>
                    <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                        <Link href={"#"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
