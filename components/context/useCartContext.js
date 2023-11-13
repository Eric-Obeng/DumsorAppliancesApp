import React, { createContext, useContext, useState } from "react";

const useCartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (product) => {
        const updateCart = cart.filter((cartItem) => cartItem.id !== product.id)
        setCart(updateCart)
    }

    return (
        <useCartContext.Provider value={{ cart, addToCart, removeFromCart}} >
            {children}
        </useCartContext.Provider>
    )
}  

export function useCart() {
    return useContext(useCartContext)
}