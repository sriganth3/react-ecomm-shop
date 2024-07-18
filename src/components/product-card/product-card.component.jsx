import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted'>Add to Card</Button>
    </div>
}

export default ProductCard;