import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);
	const linkElementShop = screen.getByText('SHOP');
	const linkElementSignIn = screen.getByText('SIGN IN');
	expect(linkElementShop).toBeInTheDocument();
	expect(linkElementSignIn).toBeInTheDocument();
});
