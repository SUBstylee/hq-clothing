import './CartDropdown.styles.scss';

import Button from '../Button/Button.component';

const CartDropdown = () => {
	return (
		<div className='cart__dropdown__container'>
			<div className='cart__items'></div>
			<Button>Go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
