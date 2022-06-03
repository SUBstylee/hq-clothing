import './Button.styles.scss';

/*
default

inverted

google sign in
*/

const BUTTON_TYPE_CLASSES = {
	inverted: 'inverted',
	google: 'google__sign__in',
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button__container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
