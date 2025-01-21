import "./checkout.styles.scss";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

// /../cart-item/cart-item.component.jsx"

const CheckOut = () => {

    const {cartItems} = useContext(CartContext);
    return (
        <div>
        {/* <h1>CheckOut Component</h1>
        <h1>{JSON.stringify(cartItems)}</h1> */}
        {cartItems.map(item => <CheckOutItem key={item.id} checkoutItem={item}/>)}
        {/* {    cartItems.forEach(element => {
                <p>"abc"</p>
        })} */}
        </div>
    )
}

export default CheckOut;