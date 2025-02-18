import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [isCartAnimated, setIsCartAnimated] = useState(false);

	const addToCart = (book) => {
		if (book.quantity === 0) {
			toast.error('This book is out of stock', {
				position: 'top-center',
				autoClose: 3000,
				closeOnClick: true,
				pauseOnHover: true,
				style: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-text)',
				},
			});
			return;
		}

		const existingItem = cart.find((item) => item.id === book.id);

		if (existingItem) {
			if (existingItem.quantity < existingItem.quantityAvailable) {
				setCart(
					cart.map((item) =>
						item.id === book.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					)
				);
				toast.info(`${book.title} added to cart!`, {
					position: 'top-center',
					autoClose: 2000,
					closeOnClick: true,
					pauseOnHover: true,
					style: {
						backgroundColor: 'var(--color-background)',
						color: 'var(--color-text)',
					},
				});
				setIsCartAnimated(true);
				setTimeout(() => setIsCartAnimated(false), 1000);
			} else {
				toast.error('No more of this book available in the stock', {
					position: 'top-center',
					autoClose: 3000,
					closeOnClick: true,
					pauseOnHover: true,
					style: {
						backgroundColor: 'var(--color-background)',
						color: 'var(--color-text)',
					},
				});
			}
		} else {
			setCart([
				...cart,
				{ ...book, quantity: 1, quantityAvailable: book.quantity },
			]);
			toast.info(`${book.title} added to cart!`, {
				position: 'top-center',
				autoClose: 2000,
				closeOnClick: true,
				pauseOnHover: true,
				style: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-text)',
				},
			});
			setIsCartAnimated(true);
			setTimeout(() => setIsCartAnimated(false), 1000);
		}
	};

	/* 
	
	
	
	
	
	
	
	*/

	const increaseQuantity = (id) => {
		const item = cart.find((item) => item.id === id);

		if (item.quantity < item.quantityAvailable) {
			setCart(
				cart.map((item) =>
					item.id === id
						? {
								...item,
								quantity: item.quantity + 1,
						  }
						: item
				)
			);
		} else {
			toast.error('No more stock available for this book', {
				position: 'top-center',
				autoClose: 3000,
				closeOnClick: true,
				pauseOnHover: true,
				style: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-text)',
				},
			});
		}
	};

	const decreaseQuantity = (id) => {
		const item = cart.find((item) => item.id === id);

		if (item.quantity > 1) {
			setCart(
				cart.map((item) =>
					item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
			);
		} else {
			removeFromCart(id);
		}
	};

	const removeFromCart = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const calculateTotalPrice = () => {
		return cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				isCartAnimated,
				addToCart,
				increaseQuantity,
				decreaseQuantity,
				removeFromCart,
				calculateTotalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
