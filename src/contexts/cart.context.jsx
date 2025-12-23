import { use, useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    setCartCount: () => {},
    removeItemFromCart: () => {},
    cartTotal: 0,
    setCartTotal: () => {}
});

const addCartItem = (cartItems, productToAdd) =>{
    console.log("product to add");
    console.log(productToAdd);

    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id;
    })

    if(existingCartItem){
        return cartItems.map((cartItem) => {
           return cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        }
        );
    }

    return [ ...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove,removeAllQuantity) =>{
    console.log("product to remove");
    console.log(productToRemove);

    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToRemove.id;
    })


    if(removeAllQuantity){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
        
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1}
         : cartItem
     }
     );
}


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0); 
    const [cartTotal, setCartTotal] = useState(0);  

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

    }, [cartItems])

    useEffect(() =>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setCartTotal(newCartTotal);

    }, [cartItems])

    const removeItemFromCart = (productToRemove, removeAllQuantity) => {
        setCartItems(removeCartItem(cartItems, productToRemove,removeAllQuantity));
    }
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, setCartCount, removeItemFromCart, cartTotal, setCartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

