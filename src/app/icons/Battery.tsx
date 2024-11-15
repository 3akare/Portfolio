"use client";
import {SVGProps, useEffect, useState} from "react";

export function Battery(props: SVGProps<SVGSVGElement>) {
    const [battery, setBattery] = useState(0);
    useEffect(()=> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigator.getBattery().then((battery: { level: number; addEventListener: (arg0: string, arg1: () => void) => void; }) => {
            const batteryPercentage = battery.level * 100;
            setBattery(batteryPercentage)
            // Add event listener to update the percentage when it changes
            battery.addEventListener('levelchange', () => {
                setBattery(battery.level * 100)
            })})
    }, [])
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="bevel"
             className="lucide lucide-battery" {...props}>
            <rect width="16" height="10" x="2" y="7" rx="2" ry="2" fill={"transparent"}/>
            <rect width={battery/100 * 16} height="10" x="2" y="7" rx="2" ry="2" fill="white"/>
            <line x1="22" x2="22" y1="11" y2="13" strokeWidth="2"/>
        </svg>
    )
}