import React, { useEffect, useState, useContext } from 'react';
import { searchBooks } from '../services/api.js';
import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
import Text from '../components/Common/Text';
import { CartContext } from '../context/CartContext.jsx';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMoreResults, setHasMoreResults] = useState(true);
	const resultsPerPage = 10;
	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		const fetchBooks = async () => {
			const booksData = await searchBooks(currentPage, query);

			setResults(booksData.books);
			setHasMoreResults(
				booksData.books.length === resultsPerPage &&
					booksData.totalBooks > currentPage * resultsPerPage
			);
		};

		if (query.length >= 3) {
			fetchBooks();
		} else {
			setResults([]);
			setHasMoreResults(true);
		}
	}, [query, currentPage]);

	const handleInputChange = (e) => {
		setQuery(e.target.value);
		setCurrentPage(1);
		setHasMoreResults(true);
	};

	const handleNextPage = () => {
		if (hasMoreResults) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className={styles.search}>
			<Text
				text="Explore Our Library"
				fontSize="2rem"
				fontWeight="bold"
			/>
			<Text text="Search a book by name" fontSize="1.2rem" />
			<input
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Type at least 3 characters..."
				className={styles.searchInput}
			/>
			<div className={styles.booksBox}>
				{results.map((book) => (
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
							text={`${book.quantity} in stock`}
							fontWeight="normal"
							fontStyle="italic"
						/>
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

			{results.length > 0 && (
				<div className={styles.pagination}>
					<button
						onClick={handlePrevPage}
						disabled={currentPage === 1}
					>
						Previous
					</button>
					<span>Page {currentPage}</span>
					<button onClick={handleNextPage} disabled={!hasMoreResults}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Search;
