import React, { createContext, ReactNode } from "react";

type props = {
    children:ReactNode
}

export const Context = createContext(null)

const ContextProvider = (props:props)=>{

    const value = {

    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider