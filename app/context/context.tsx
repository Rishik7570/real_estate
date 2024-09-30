'use client'
import { StaticImageData } from "next/image";
import React, { createContext, ReactNode, useState } from "react";

type props = {
    children:ReactNode
}

type product = {
    id: number;
    name: string;
    location: string;
    image: StaticImageData;
    price: number;
    rooms: string;
    type: string;
    description: string;
}

type cart = {
    product: product | undefined;
    date: string;
    time: string;
}

type context = {
    product: product | undefined
    setProduct: React.Dispatch<React.SetStateAction<product | undefined>>
    cart: cart[]
    setCart: React.Dispatch<React.SetStateAction<cart[]>>
    visibleCart: boolean
    setVisibleCart: React.Dispatch<React.SetStateAction<boolean>>
    date: string
    setDate: React.Dispatch<React.SetStateAction<string>>
    time: string
    setTime: React.Dispatch<React.SetStateAction<string>>
    addToCart: () => void
    removeFromCart: (id: number) => void
}


export const Context = createContext<context | null>(null)

const ContextProvider = (props:props)=>{

    const [product,setProduct] = useState<product>()
    const [visibleCart,setVisibleCart] = useState(false)
    const [cart,setCart] = useState<cart[]>([])
    const [date,setDate] = useState('')
    const [time,setTime] = useState("Not selected")
    const [agent,setAgent] = useState("")

    const addToCart = ()=>{
        // eslint-disable-next-line prefer-const
        let tempcart = structuredClone(cart)
        // eslint-disable-next-line prefer-const
        let tempdata = {
            product,
            date,
            time
        }

        tempcart.push(tempdata)
        
        setCart(tempcart)
    }

    const removeFromCart = (id:number)=>{
        let tempcart = structuredClone(cart)
        tempcart = tempcart.filter((item)=>item.product?.id !== id)
        
        setCart(tempcart)
    }

    const value = {
        product,setProduct,
        cart,setCart,
        visibleCart,setVisibleCart,
        date,setDate,
        time,setTime,
        addToCart,removeFromCart,
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider