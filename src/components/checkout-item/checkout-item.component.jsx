import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ checkoutItem }) => {
  console.log(checkoutItem);
  const { id, name, quantity, imageUrl, price } = checkoutItem;
  return (
    <div className="checkout-item-container">

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{id}</th>
              <th><img src={imageUrl}></img></th>
              <th>{name}</th>
              <th><div>
              <Button>{"<"}</Button>
                {quantity}
                <Button>{">"}</Button>
              </div>
                </th>
              <th>{price}</th>
              <th><Button>X</Button></th>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default CheckOutItem;
