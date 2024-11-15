"use client";
import {useContext, useEffect} from "react";

import intelliJ from "@/../public/intellij.png"
import pycharm from "@/../public/pycharm.png"
import webstorm from "@/../public/webstorm.png"
import docker from "@/../public/docker.png"
import vscode from "@/../public/vscode.png"
import postman from "@/../public/postman.png"
import github from "@/../public/github.png"
import iterm from "@/../public/iterm.png"
import {MenuContext} from "@/app/components/MenuProvider";
import Image from "next/image";
import Genie from "@/app/components/Genie";


export default function Dock(){
    const array: object[] = [
        { name: "IntelliJ IDEA Community Edition", image: intelliJ},
        { name: "PyCharm Community", image: pycharm},
        { name: "PyCharm Community", image: webstorm},
        { name: "Docker Desktop", image: docker},
        { name: "Visual Studio Code", image: vscode},
        { name: "Postman", image: postman},
        { name: "Github", image: github},
        { name: "Iterm2", image: iterm},
    ]

    const {updateMenuTitle} = useContext(MenuContext);

    useEffect(()=>{
        document.querySelectorAll("#dock img").forEach( img => {
            img.addEventListener('click', () => {
                console.log(img.textContent)
            })

            img.addEventListener("mousemove", (event) => {
                const item= event.target
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const  itemRect = item?.getBoundingClientRect()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const offset = Math.abs(event.clientX - itemRect.left) / itemRect.width
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const prev = item?.previousElementSibling
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const next = item?.nextElementSibling
                const scale = 0.6

                resetScale()

                if (prev) {
                    prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
                }

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                item?.style.setProperty('--scale', 1 + scale)

                if (next) {
                    next.style.setProperty('--scale', 1 + scale * offset)
                }
            })
        })

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.querySelector('#dock').addEventListener('mouseleave', () => {
            resetScale()
        })

        function resetScale() {
            document.querySelectorAll('#dock img').forEach(img => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                img.style.setProperty("--scale", 1)
            })
        }
    }, [])

    return (
        <section>
            <div
                className={"fixed lg:flex min-w-4/5 hidden items-center justify-center backdrop-filter backdrop-blur-xl border-gray-100 border-opacity-20 border-[0.5px] bottom-0 my-11 rounded-3xl w-fit shadow-2xl left-1/2 -translate-x-1/2 translate-y-1/2 h-[4.5rem]"}>
                <div id="dock"
                    className={"flex flex-row items-center gap-6 hover:gap-8 transition-[gap] justify-center px-6 w-full"}>
                    {array.map((item, index: number) => {
                        return(
                            <Image key={index} className={"w-14 h-14"} src={item.image} alt={item.name} width={70} height={70} onClick={() => updateMenuTitle(item.name)}/>
                        )
                    })}
                </div>
                {/*<Genie/>*/}
            </div>
            <div className="lg:hidden text-white font-bold text-xl p-2 fixed bottom-0 text-center left-1/2 my-11 -translate-x-1/2 translate-y-1/2  ">
                View On A larger Screen to View the Iconic Dock
            </div>
        </section>
)
}
