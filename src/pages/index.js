import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import SearchDisplay from '../components/SearchDisplay/SearchDisplay';
import Footer from '../components/Footer/Footer';


export default function Home() {
	return (
		<>
			<Head>
				<title>Mind Vault</title>
				<meta name="description" content="Access your vault of knowledge instantly." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<SearchDisplay />
			<Footer />
		</>
	);
}
