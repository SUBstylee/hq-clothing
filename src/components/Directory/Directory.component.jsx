import './Directory.styles.scss';

import DirectoryItem from '../DirectoryItem/DirectoryItem.component';

import categories from './categories';

const Categories = ({ category }) => {
	return (
		<div className='directory__container'>
			{categories.map((category) => (
				<DirectoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default Categories;
