import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (book) => {
		if (book.quantity === 0) {
			alert('This book is out of stock.');
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
			} else {
				alert('No more stock available for this book.');
			}
		} else {
			setCart([
				...cart,
				{ ...book, quantity: 1, quantityAvailable: book.quantity },
			]);
		}
	};

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
			alert('No more stock available for this book.');
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
