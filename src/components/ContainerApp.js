import React from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/containerApp.css"

export const ContainerApp = ({children})=> {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="containerApp">
            {children({
                mediaQuery: {
                    isDesktopOrLaptop,
                    isBigScreen,
                    isTabletOrMobile
                }
            })}
        </div>
    )
}