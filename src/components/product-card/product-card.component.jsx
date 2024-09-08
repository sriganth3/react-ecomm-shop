import './product-card.styles.scss';
import Button from "../button/button.component.jsx";
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartContext);
    const {name, price, imageUrl} = product;

    const addProductToCart = () => addItemToCart(product);
   return( 
   <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </div>
   );
}

export default ProductCard;