import { useState, useEffect, useContext } from 'react';
import Text from '../Common/Text';
import { Link } from 'react-router-dom';
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineSearch,
	AiOutlineSun,
	AiOutlineMoon,
	AiOutlineBook,
	AiOutlinePlus,
	AiOutlineMinus,
} from 'react-icons/ai';
import styles from './Navbar.module.scss';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
	const [isNightMode, setIsNightMode] = useState(false);
	const {
		cart,
		isCartAnimated,
		calculateTotalPrice,
		increaseQuantity,
		decreaseQuantity,
	} = useContext(CartContext);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		if (isNightMode) {
			document.body.classList.add('night-mode');
		} else {
			document.body.classList.remove('night-mode');
		}
	}, [isNightMode]);

	const toggleNightMode = () => {
		setIsNightMode((prevMode) => !prevMode);
	};

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const totalItemsInCart = cart.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<nav className={styles.navbar}>
			<div>
				<Link to="/" className={styles.logo}>
					<AiOutlineBook
						className={styles.icon}
						style={{ fontSize: '2.75rem' }}
					/>
					<Text
						text="Great Library of Old"
						fontSize="1.4rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</Link>
			</div>
			<div className={styles.links}>
				<div>
					<Link to="/user" className={styles.link}>
						<AiOutlineUser className={styles.icon} />
						<Text
							text="My Account"
							fontSize="1.2rem"
							fontWeight="bold"
							color="var(--color-text)"
						/>
					</Link>
				</div>
				<div>
					<Link to="/search" className={styles.link}>
						<AiOutlineSearch className={styles.icon} />
						<Text
							text="Explore the Archive"
							fontSize="1.2rem"
							fontWeight="bold"
							color="var(--color-text)"
						/>
					</Link>
				</div>
				<div
					className={`${styles.link} ${
						isCartAnimated ? styles.cartAnimate : ''
					}`}
					onClick={toggleCart}
					style={{ cursor: 'pointer' }}
				>
					<div className={styles.cartIconWrapper}>
						<AiOutlineShoppingCart className={styles.icon} />
						{totalItemsInCart > 0 && (
							<span className={styles.cartBadge}>
								{totalItemsInCart}
							</span>
						)}
					</div>
					<Text
						text="My Cart"
						fontSize="1.2rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</div>
				<div onClick={toggleNightMode} className={styles.link}>
					{isNightMode ? (
						<AiOutlineMoon className={styles.icon} />
					) : (
						<AiOutlineSun className={styles.icon} />
					)}
				</div>
			</div>

			{isCartOpen && (
				<div className={styles.cartDropdown}>
					{cart.length > 0 ? (
						cart.map((item) => (
							<div key={item.id} className={styles.cartItem}>
								<Text
									text={item.title}
									fontSize="1.2rem"
									fontWeight="bold"
								/>
								<Text
									text={`Price: $${item.price}`}
									fontSize="1.1rem"
								/>
								<div className={styles.cartQuantity}>
									<button
										className={styles.quantityButton}
										onClick={() =>
											decreaseQuantity(item.id)
										}
									>
										<AiOutlineMinus fontSize="1rem" />
									</button>
									<Text
										text={item.quantity}
										fontSize="1.1rem"
									/>
									<button
										className={styles.quantityButton}
										onClick={() =>
											increaseQuantity(item.id)
										}
									>
										<AiOutlinePlus fontSize="1rem" />
									</button>
								</div>
							</div>
						))
					) : (
						<Text text="Your cart is empty" />
					)}

					<div className={styles.totalPrice}>
						<Text
							text={`Total: $${calculateTotalPrice().toFixed(2)}`}
							fontSize="1.2rem"
							fontWeight="bold"
						/>
					</div>

					<Link to="/cart">
						<button className={styles.checkoutButton}>
							<Text text="Go to Cart" fontWeight="bold" />
						</button>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
