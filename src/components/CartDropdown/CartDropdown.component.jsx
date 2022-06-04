import './CartDropdown.styles.scss';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		setIsCartOpen(false);
	};
	return (
		<div className='cart__dropdown__container'>
			<div className='cart__items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>Buy Now</Button>
		</div>
	);
};

export default CartDropdown;
