import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { getMenu, getResturantNames } from '../../data';
import './style.scss';

const Main = () => {
	const resturantsName = getResturantNames();

	const [selectedResturant, setSelectedResturant] = useState(resturantsName[0]);
	const [menu, setMenu] = useState([]);
	const [selectedCache, setSelectedCache] = useState({});
	const [selectedItems, setSelectedItems] = useState([]);

	useEffect(() => {
		setMenu(getMenu(selectedResturant));
	}, [selectedResturant]);

	useEffect(() => {
		if (selectedCache[selectedResturant]?.length) {
			setSelectedItems(selectedCache[selectedResturant]);
			return;
		}

		setSelectedItems(menu?.filter(({ outofstock }) => outofstock));
	}, [menu]);

	const onClick = item => {
		if (selectedItems.includes(item)) {
			setSelectedItems(
				selectedItems?.filter(({ foodid }) => foodid !== item.foodid)
			);

			return;
		}

		setSelectedItems([...selectedItems, item]);
	};

	const onApply = () => {
		setSelectedCache({
			...selectedCache,
			[selectedResturant]: selectedItems,
		});
	};

	const onAllAvailable = () => {
		setSelectedItems([]);
	};

	const onAllUnavailable = () => {
		if (selectedItems === menu) {
			setSelectedItems(menu?.filter(({ outofstock }) => outofstock));
			return;
		}

		setSelectedItems(menu);
	};

	return (
		<div>
			<Header />

			<div className='main-wrapper'>
				<Sidebar
					selectedResturant={selectedResturant}
					setSelectedResturant={setSelectedResturant}
				/>

				<div className='main-container'>
					<div className='food-list'>
						{menu?.map((item, index) => {
							const { foodname, outofstock = false } = item || {};

							return (
								<div
									key={index}
									role='button'
									tabIndex={0}
									onKeyDown={() => {}}
									onClick={() => onClick(item)}
									className='food-item'
									style={{
										backgroundColor: selectedItems?.includes(item)
											? 'red'
											: null,
									}}>
									<p>{foodname}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<Footer
				onAllAvailable={onAllAvailable}
				onAllUnavailable={onAllUnavailable}
				onApply={onApply}
			/>
		</div>
	);
};

export default Main;
