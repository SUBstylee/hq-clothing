import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/SignIn/SignIn.component';

const Shop = () => {
	return <h1>SHOP PAGE</h1>;
};

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='sign-in' element={<SignIn />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
