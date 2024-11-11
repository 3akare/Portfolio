import {AppleLogo} from "@/app/icons/AppleLogo";
import {Battery} from "@/app/icons/Battery";
import {Wifi} from "@/app/icons/Wifi";
import {Search} from "@/app/icons/Search";
import {ControlCenter} from "@/app/icons/ControlCenter";
import {Siri} from "@/app/icons/Siri";

export default function Navigation(){
    return(
        <header>
            <nav
                className={"fixed inset-0 h-6 w-screen text-white text-base bg-orange-500 flex items-center backdrop-filter backdrop-blur-lg border-y-black border-opacity-15 border-x-0 border-[1px] bg-opacity-20 px-8 justify-between z-10"}>
                <section className={"flex flex-row gap-5 items-center text-sm font-medium"}>
                    <span className={"flex flex-row items-center gap-5"}>
                        <AppleLogo width={22} height={22}/>
                        <p className={"font-bold"}>Finder</p>
                    </span>
                    <ul className={"flex flex-row gap-5 items-center"}>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Window</li>
                        <li>Help</li>
                    </ul>
                </section>
                <ul className={"flex flex-row items-center gap-4 text-sm font-medium"}>
                    <li><Battery width={24} height={24}/></li>
                    <li><Wifi width={18} height={18}/></li>
                    <li><Search width={18} height={18}/></li>
                    <li><ControlCenter width={18} height={18}/></li>
                    <li><Siri width={18} height={18}/></li>
                    <li className={"flex flex-row gap-4"}>
                        <p>Sat 9 Nov</p>
                        <p>12:28</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}