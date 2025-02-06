import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (book) => {
		const existingItem = cart.find((item) => item.id === book.id);

		if (existingItem) {
			setCart(
				cart.map((item) =>
					item.id === book.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCart([...cart, { ...book, quantity: 1 }]);
		}
	};

	const increaseQuantity = (id) => {
		setCart(
			cart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
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
