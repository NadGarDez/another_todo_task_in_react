import React, { Children, cloneElement } from "react";
import "../styles/todoCard.css";

export const TodoCard = ({children, mediaQuery})=> {

    const arrayChildren = Children.toArray(children)

    return (
        <div className="card">
            {
                arrayChildren.map(
                    item => cloneElement(item, {mediaQuery})
                )
            }
        </div>
    )
}