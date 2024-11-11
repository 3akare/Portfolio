"use client";

import {Folder} from "../icons/Folder";
import FolderModal from "./FolderModal";
import {useState} from "react";

export default function Main(){
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal((prevState)=> !prevState);
    }

    return(
        <>
            <Folder onClick={() => handleModal()}/>
            <FolderModal showModal={showModal} handleModal={handleModal}/>
        </>
    )
}