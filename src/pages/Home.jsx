import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api.js';
import styles from './Home.module.scss';
import Text from '../components/Common/Text';

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const booksData = await getBooks();
			setBooks(booksData.slice(-12));
		};

		fetchBooks();
	}, []);

	return (
		<div className={styles.home}>
			<Text
				text="Welcome to the Great Library of Old"
				fontSize="2rem"
				fontWeight="bold"
			/>
			<Text text="Explore our latest additions" fontSize="1.2rem" />
			<div className={styles.booksBox}>
				{books.map((book) => (
					<div key={book.id} className={styles.bookCard}>
						<img
							src={book.cover}
							alt={book.title}
							className={styles.bookImage}
						/>
						<Text
							text={book.title}
							fontSize="1.2rem"
							fontWeight="bold"
						/>
						<Text
							text={book.author}
							fontSize="1rem"
							fontStyle="italic"
						/>
						<Text text={book.genre} fontSize="1rem" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
