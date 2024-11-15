import Image from "next/image";
import folder from "./Folder.png"
import {FileDownload} from "./FileDownload"
import Link from "next/link";

export function Folder({... props}) {
    return (
        <div className={"relative top-14 float-end px-6 flex items-center flex-col text-xs text-white font-bold"} {...props}>
            {
                props.type === "resume" ?
                    <Link href={"#"}>
                        <Image src={folder} alt={"Folder"} width={60} height={60}></Image>
                    </Link>:
                    <Image src={folder} alt={"Folder"} width={60} height={60}></Image>
            }
            <span className={"flex-row items-center gap-1 flex"}>
                <p>{props.name}</p>
                {props.type === "resume" && <FileDownload width={15} height={15} />}
            </span>
        </div>
    )
}