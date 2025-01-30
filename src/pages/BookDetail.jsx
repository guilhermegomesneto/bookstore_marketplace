import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/api';
import styles from './BookDetail.module.scss';
import Text from '../components/Common/Text';

const BookDetail = () => {
	const { id } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const bookData = await getBookById(id);
				setBook(bookData);
			} catch (error) {
				console.error('Error fetching book:', error);
			}
		};

		fetchBook();
	}, [id]);

	if (!book) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.bookDetail}>
			<img
				src={book.cover}
				alt={book.title}
				className={styles.bookImage}
			/>
			<Text text={book.title} fontSize="1.6rem" fontWeight="bold" />
			<Text text={book.author} fontSize="1.2rem" fontStyle="italic" />
			<Text text={book.genre} fontSize="1.2rem" />
			<Text
				text={`Price: $${book.price}`}
				fontSize="1.2rem"
				fontWeight="bold"
			/>
			<Text
				text={book.desc}
				fontSize="1rem"
				className={styles.bookDesc}
			/>
		</div>
	);
};

export default BookDetail;
