
import  Button from '../button/button.component.jsx';
import "./cart-dropdown.styles.scss";
import CartItem from "./../cart-item/cart-item.component.jsx"
import { CartContext } from '../../contexts/cart.context.jsx';
import { useContext } from 'react';

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {console.log({cartItems})}
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;