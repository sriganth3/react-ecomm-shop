import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    setCartCount: () => {},
    removeItemFromCart: () => {},
});

const addCartItem = (cartItems, productToAdd, setCartCount, cartCount) =>{
    console.log("product to add");
    console.log(productToAdd);

    setCartCount(cartCount + 1);
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

const removeCartItem = (cartItems, productToRemove, setCartCount, cartCount) =>{
    console.log("product to remove");
    console.log(productToRemove);

    setCartCount(cartCount - 1);
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToRemove.id;
    })

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
        
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1}
         : cartItem
     }
     );


    // return [ ...cartItems, {...productToRemove, quantity: 1}];
}


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);  

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove, setCartCount, cartCount));
    }
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd, setCartCount, cartCount));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, setCartCount, removeItemFromCart};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

