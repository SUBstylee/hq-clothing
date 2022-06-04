import './CartIcon.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className='cart__icon__container' onClick={toggleIsCartOpen}>
			<ShoppingBagIcon className='shopping__bag__icon' />
			<span className='item__count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
