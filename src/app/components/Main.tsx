"use client";

import {Folder} from "../icons/Folder";
import FolderModal from "./FolderModal";
import {useContext, useState} from "react";
import {MenuContext} from "@/app/components/MenuProvider";

export default function Main(){
    const [showModal, setShowModal] = useState(false);
    const {updateMenuTitle} = useContext(MenuContext);
    const handleModal = () => {
        setShowModal((prevState)=> !prevState);
    }

    return(
        <section className={"flex float-end flex-col gap-8"}>
            <Folder name={"About Me"} type={"about"} onClick={() => { handleModal(); updateMenuTitle("Finder")}}/>
            <Folder name={"Resume"} type={"resume"}/>
            <FolderModal showModal={showModal} handleModal={handleModal}/>
        </section>
    )
}