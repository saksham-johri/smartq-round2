import './style.scss';

const Footer = ({ onAllAvailable, onAllUnavailable, onApply }) => {
	return (
		<footer className='footer'>
			<button className='button' onClick={onAllUnavailable}>
				All Unavailable
			</button>

			<button className='button' onClick={onAllAvailable}>
				All Available
			</button>

			<button className='button' onClick={onApply}>
				Apply
			</button>
		</footer>
	);
};

export default Footer;
