import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
	EmptyButton,
} from './CartDropdown.styles';

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
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button
				disabled={cartItems.length ? false : true}
				onClick={goToCheckoutHandler}>
				{cartItems.length ? 'Buy Now' : <EmptyButton>Buy Now</EmptyButton>}
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
