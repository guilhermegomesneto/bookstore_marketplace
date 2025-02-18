import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Text from '../components/Common/Text';
import {
	AiOutlinePlus,
	AiOutlineMinus,
	AiOutlineShoppingCart,
} from 'react-icons/ai';

const Cart = () => {
	const { cart, increaseQuantity, decreaseQuantity, calculateTotalPrice } =
		useContext(CartContext);

	return (
		<div className={styles.cartContainer}>
			<div className={styles.cartPageTitle}>
				<Text text="Your Cart" fontSize="2rem" fontWeight="bold" />
				<Text text="Check your cart items" fontSize="1.2rem" />
			</div>

			{cart.length > 0 ? (
				<div className={styles.cartItems}>
					{cart.map((item) => (
						<div key={item.id} className={styles.cartItem}>
							<img
								src={item.cover}
								alt={item.title}
								className={styles.bookImage}
							/>
							<div className={styles.itemDetails}>
								<Text
									text={item.title}
									fontSize="1.2rem"
									fontWeight="bold"
								/>
								<Text text={`Price: $${item.price}`} />
								<div className={styles.cartQuantity}>
									<button
										className={styles.quantityButton}
										onClick={() =>
											decreaseQuantity(item.id)
										}
									>
										<AiOutlineMinus />
									</button>
									<Text text={item.quantity} />
									<button
										className={styles.quantityButton}
										onClick={() =>
											increaseQuantity(item.id)
										}
									>
										<AiOutlinePlus />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={styles.emptyCart}>
					<AiOutlineShoppingCart
						className={styles.cartIcon}
						style={{ fontSize: '5rem' }}
					/>
					<Text text="Your cart is empty" fontSize="1.5rem" />
				</div>
			)}

			{cart.length > 0 && (
				<div className={styles.checkoutSection}>
					<Text
						text={`Total: $${calculateTotalPrice().toFixed(2)}`}
						fontSize="1.2rem"
						fontWeight="bold"
					/>
					<Link to="/checkout">
						<button className={styles.checkoutButton}>
							Proceed to Checkout
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
