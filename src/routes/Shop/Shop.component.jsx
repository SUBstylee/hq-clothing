import './Shop.styles.scss';

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/ProductCard/ProductCard.component';

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className='products__container'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
