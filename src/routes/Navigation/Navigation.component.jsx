import './Navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
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
					<Link className='nav__link' to='/sign-in'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
