import Image from "next/image";
import folder from "./Folder.png"

export function Folder({... props}) {
    return (
        <div className={"relative top-14 float-end px-6 flex items-center flex-col text-xs text-white font-bold"} {...props}>
            <Image src={folder} alt={"Folder"} width={60} height={60}></Image>
            <p>About Me</p>
        </div>
    )
}