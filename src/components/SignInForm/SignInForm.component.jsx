import './SignInForm.styles.scss';

import { useState } from 'react';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case 'auth/wrong-password':
					alert('Incorrect Password!');
					break;
				case 'auth/user-not-found':
					alert(
						'Unregistered Email!\nCheck your email address,\nor register for an account.',
					);
					break;
				default:
					console.error(err);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className='sign__in__container'>
			<h2>Already have an account?</h2>
			<span>Sign in with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className='buttons__container'>
					<Button type='submit'>Sign In</Button>
					<Button
						buttonType={'google'}
						type='button'
						onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
