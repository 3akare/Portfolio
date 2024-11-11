"use client";
import {useEffect } from "react";

import java from "@/../public/java.png"
import spring from "@/../public/spring.png"
import javascript from "@/../public/javascript.png"
import python from "@/../public/python.png"
import mongodb from "@/../public/mongoDB.png"
import mysql from "@/../public/mysql.png"
import nodejs from "@/../public/nodejs.png"
import nextjs from "@/../public/nextjs.png"
import firebase from "@/../public/firebase.png"
import react from "@/../public/react.png"
import tailwind from "@/../public/tailwindcss.png"
import c from "@/../public/c.png"


export default function Dock(){
    const array: object[] = [
        { skill: "C", image: c.src},
        { skill: "Java", image: java.src},
        { skill: "Spring Boot", image: spring.src, color: "bg-[rgb(151,193,92)]"},
        { skill: "Javascript", image: javascript.src, color: `bg-[rgb(249,214,73)]`},
        { skill: "ReactJS", image: react.src},
        { skill: "NextJS", image: nextjs.src},
        { skill: "Python", image: python.src},
        { skill: "NodeJS", image: nodejs.src},
        { skill: "MongoDB", image: mongodb.src},
        { skill: "MySQL", image: mysql.src},
        { skill: "Firebase", image: firebase.src},
        { skill: "TailwindCSS", image: tailwind.src, color: "bg-[rgb(16,23,41)]"},
    ]

    useEffect(()=>{
        document.querySelectorAll("#dock li").forEach( li => {
            li.addEventListener('click', () => {
                console.log(li.textContent)
            })

            li.addEventListener("mousemove", (event) => {
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
                const scale = 0.8

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
            document.querySelectorAll('#dock li').forEach(li => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                li.style.setProperty("--scale", 1)
            })
        }
    }, [])

    return(
        <div className={"fixed flex items-center justify-center backdrop-filter backdrop-blur-xl border-gray-100 border-opacity-20 border-[0.5px] bottom-0 my-11 rounded-3xl w-fit shadow-2xl left-1/2 -translate-x-1/2 translate-y-1/2 h-[4.5rem]"}>
            <ul id="dock" className={"flex flex-row items-center gap-6 hover:gap-8 transition-[gap] justify-center px-6"}>
                {array.map((item, index:number)=>{
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    return <li data-tooltip={item.skill} style={{'--image-url': `url(${item.image})`}} className={`w-14 h-14 ${item.color === undefined ? "bg-white" : item.color} rounded-md bg-contain  bg-no-repeat bg-center bg-[image:var(--image-url)] bg-origin-content p-1`} key={index}></li>
                })}
            </ul>
        </div>
    )
}
