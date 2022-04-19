import { getResturantNames } from '../../data';
import './style.scss';

const Sidebar = ({ selectedResturant, setSelectedResturant = () => {} }) => {
	const resturantsName = getResturantNames();

	return (
		<nav className='sidebar'>
			<div className='container'>
				{resturantsName?.map((item, index) => (
					<div
						key={index}
						className={`item ${selectedResturant === item ? 'selected' : ''}`}
						role='button'
						tabIndex={0}
						onKeyDown={() => {}}
						onClick={() => setSelectedResturant(item)}>
						<p>{item}</p>
					</div>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;
