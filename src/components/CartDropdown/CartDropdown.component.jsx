import './CartDropdown.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className='cart__dropdown__container'>
			<div className='cart__items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button>Buy Now</Button>
		</div>
	);
};

export default CartDropdown;
