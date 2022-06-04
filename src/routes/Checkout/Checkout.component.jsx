import './Checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className='checkout__container'>
			<div className='checkout__header'>
				<div className='header__block'>
					<span>Product</span>
				</div>
				<div className='header__block'>
					<span>Description</span>
				</div>
				<div className='header__block'>
					<span>Quantity</span>
				</div>
				<div className='header__block'>
					<span>Price</span>
				</div>
				<div className='header__block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<span className='Total'>Total: ${cartTotal}</span>
		</div>
	);
};

export default Checkout;
