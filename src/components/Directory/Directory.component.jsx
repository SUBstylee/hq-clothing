import './Directory.styles.scss';

import CategoryItem from '../CategoryItem/CategoryItem.component';

import categories from './categories';

const Categories = ({ category }) => {
	return (
		<div className='directory__container'>
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default Categories;
