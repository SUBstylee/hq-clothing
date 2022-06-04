import './CartItem.styles.scss';

const CartItem = ({ cartItem }) => {
	const { imageUrl, price, name, quantity } = cartItem;

	return (
		<div className='cart__item__container'>
			<img src={imageUrl} alt={name} />
			<div className='item__details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
