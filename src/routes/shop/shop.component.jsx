import SHOP_DATA from '../../shop-data.json';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import { ProductsContext } from '../../contexts/products.context.jsx';
import { useContext } from 'react';
import "./shop.styles.scss";
const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {products.map((product) => ( //{ } should not be used here, it's not rendering, not sure why
               <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default Shop;