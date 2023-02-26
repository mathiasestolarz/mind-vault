import styles from './ResultView.module.css';

export default function ResultView({ noteList }) {

	return (
		<ul className={styles.noteList}>
			{noteList.length ?
				noteList.map(note => {
					return (<li key={note.id} className={styles.note}>
						<div className={styles.noteTitle}>{note.title}</div>
						<div className={styles.noteContent}>{note.content}</div>
					</li>);
				}) :
				<span>No results</span>
			}
		</ul>
	);
}