"use client";

import {createContext, ReactElement, useState} from "react";
export const MenuContext = createContext({});

export default function MenuProvider({children}: {children: ReactElement}){
    const [menuTitle, setMenuTitle] = useState("Finder");

    const updateMenuTitle = (title: string) => {
        setMenuTitle(title);
    }
    return (
        <MenuContext.Provider value={{ menuTitle, updateMenuTitle} }>
            {children}
        </MenuContext.Provider>
    )
}