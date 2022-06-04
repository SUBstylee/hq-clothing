import './Navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import CartIcon from '../../components/CartIcon/CartIcon.component';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className='Navigation'>
				<Link className='logo__container' to='/'>
					<Logo className='logo' />
				</Link>
				<div className='nav__links__container'>
					<Link className='nav__link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav__link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav__link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
