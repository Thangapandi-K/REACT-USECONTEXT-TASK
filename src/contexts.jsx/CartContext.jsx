import React, { createContext, useState } from 'react'
import { products } from '../products/Products'

  // create context
    export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cartData, setCartData] = useState(products);

    

  return (
    // passing data as props through context provider
    <cartContext.Provider value={{cartData, setCartData}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider;