import "./checkout.styles.scss";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

// /../cart-item/cart-item.component.jsx"

const CheckOut = () => {

    const {cartItems, addItemToCart, removeItemFromCart, cartTotal} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(item => <CheckOutItem key={item.id} checkoutItem={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>)}

        <span className="Total">Total: $ {cartTotal}</span>
        </div>

        
    )
}

export default CheckOut;