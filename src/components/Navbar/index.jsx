import { useState, useEffect } from 'react';
import Text from '../Common/Text';
import { Link } from 'react-router-dom';
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineSearch,
	AiOutlineSun,
	AiOutlineMoon,
	AiOutlineBook,
} from 'react-icons/ai';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const [isNightMode, setIsNightMode] = useState(false);

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
				<div className={styles.link}>
					<Link to="/cart" className={styles.link}>
						<AiOutlineShoppingCart className={styles.icon} />
						<Text
							text="My Cart"
							fontSize="1.2rem"
							fontWeight="bold"
							color="var(--color-text)"
						/>
					</Link>
				</div>
				<div onClick={toggleNightMode} className={styles.link}>
					{isNightMode ? (
						<AiOutlineMoon className={styles.icon} />
					) : (
						<AiOutlineSun className={styles.icon} />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
