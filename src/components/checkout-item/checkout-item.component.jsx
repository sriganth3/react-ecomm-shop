import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ checkoutItem, addItemToCart, removeItemFromCart}) => {
  console.log(checkoutItem);
  const { id, name, quantity, imageUrl, price } = checkoutItem;
  return (
    // <Button onClick={() => removeItemFromCart(checkoutItem)}>{"decrement"}</Button>
    // <Button onClick={() => addItemToCart(checkoutItem)}>{"increment"}</Button>
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>&#10094;</div> 
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(checkoutItem)}>&#10095;</div>
      
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(checkoutItem, true)}>&#10005;</div>

      </div>
  );
};

export default CheckOutItem;
