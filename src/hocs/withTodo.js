import React from "react"

export const WithTodo = (WrappedComponent, todoProps)=> {

    const ReturnedFunction = (props)=> {

        const newProps = {...props, ...todoProps}
        return (
            <WrappedComponent {...newProps} />
        )
    }


    return ReturnedFunction;
}