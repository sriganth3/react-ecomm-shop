
import  Button from '../button/button.component.jsx';
import "./cart-dropdown.styles.scss";
// import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartItem from "./../cart-item/cart-item.component.jsx"
import { CartContext } from '../../contexts/cart.context.jsx';
import { useContext } from 'react';

const CartDropDown = () => {
    const navigate = useNavigate();

    const {cartItems} = useContext(CartContext);
    
    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
    
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {console.log({cartItems})}
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            {/* <Link to="/checkout">
                <Button>
                    CHECKOUT
                </Button>
            </Link> */}

            <Button onClick={goToCheckOutHandler}> CHECKOUT </Button>
        </div>
    )
}

export default CartDropDown;