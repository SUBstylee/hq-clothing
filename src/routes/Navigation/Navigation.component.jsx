import './Navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

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
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
