import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

const addCartItem = (cartItems, productToAdd) =>{
    console.log("product to add");
    console.log(productToAdd);
    // var found = false;
    // cartItems.forEach(element => {
    //     if(element.name === productToAdd.name){
    //         found = true
    //         element.quantity++;
    //         return cartItems;
    //     }
    // });
   
    // if(!found){
    //     cartItems.push({...productToAdd, quantity : 1 });
    // }
    

    // return cartItems;

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

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

