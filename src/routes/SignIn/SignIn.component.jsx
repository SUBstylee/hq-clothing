import './SignIn.styles.scss';

import SignUpForm from '../../components/SignUpForm/SignUpForm.component';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { async } from '@firebase/util';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>SIGN IN PAGE</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
