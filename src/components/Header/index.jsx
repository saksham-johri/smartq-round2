import './style.scss';

const Header = ({ searchText, setSearchText }) => {
	return (
		<header className='header'>
			<input
				value={searchText}
				onChange={({ target: { value } }) => setSearchText(value)}
				className='input'
				placeholder='Search'
			/>
		</header>
	);
};

export default Header;
