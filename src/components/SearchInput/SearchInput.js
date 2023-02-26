import styles from './SearchInput.module.css';
import processSearch from '../../utils/search';

export default function SearchInput({ setSearchResultList }) {

	function searchInputResults(inputValue) {
		return processSearch(inputValue)
				.then(notes => {
					setSearchResultList(notes);
				})
				.catch(err => console.log(err));
	}

	function onKeyUpHandler(event) {
		const inputValue = event.target.value;
		if (inputValue && event.keyCode === 13) {
			searchInputResults(inputValue);
		}
	}

	return (
		<>
			<input
				onKeyUp={onKeyUpHandler}
				type={'search'}
				placeholder="Search..."
				className={styles.searchInput} />
		</>
	);
}