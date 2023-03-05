import React from "react";
import { createPortal } from "react-dom";


export const Modal = ({children})=> {
    return createPortal(
        children,
        document.getElementById("modal")
    )
}