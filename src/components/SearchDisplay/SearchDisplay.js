import { useState } from 'react';
import styles from './SearchDisplay.module.css';
import SearchInput from '../SearchInput/SearchInput';
import ResultView from '../ResultView/ResultView';

export default function SearchDisplay() {
	const [searchResultList, setSearchResultList] = useState([]);

	return (
		<>
			<section className={styles.searchInputSection}>
				<SearchInput setSearchResultList={setSearchResultList} />
			</section>
			<section className={styles.resultViewSection}>
				<ResultView noteList={searchResultList} />
			</section>
		</>
	);
}