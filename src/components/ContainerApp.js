import React from "react";
import "../styles/containerApp.css"

export const ContainerApp = ({children})=> {
    return (
        <div className="containerApp">
            {children}
        </div>
    )
}