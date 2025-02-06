import React, { useEffect, useState, useContext } from 'react';
import { getBooks } from '../services/api.js';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Text from '../components/Common/Text';
import { CartContext } from '../context/CartContext.jsx';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Home = () => {
	const [books, setBooks] = useState([]);
	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		const fetchBooks = async () => {
			const booksData = await getBooks();
			setBooks(booksData.slice(-10).reverse());
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
			<Text text="Check our latest additions" fontSize="1.2rem" />
			<div className={styles.booksBox}>
				{books.map((book) => (
					<div key={book.id} className={styles.bookCard}>
						<Link to={`/book/${book.id}`}>
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
						</Link>
						<Text
							text={book.author}
							fontSize="1rem"
							fontStyle="italic"
						/>
						<Text text={book.genre} fontSize="1rem" />
						<Text
							text={`Price: $${book.price}`}
							fontSize="1rem"
							fontWeight="bold"
						/>
						<AiOutlineShoppingCart
							className={styles.cartIcon}
							onClick={() => addToCart(book)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
