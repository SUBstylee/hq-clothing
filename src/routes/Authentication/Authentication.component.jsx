import './Authentication.styles.scss';

import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';

const Authentication = () => {
	return (
		<div className='authentication__container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
