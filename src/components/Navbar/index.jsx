import Logo from '../Common/Logo';
import Text from '../Common/Text';
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineSearch,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div>
				<Link to="/" className={styles.logo}>
					<Logo width="3rem" />
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
			</div>
		</nav>
	);
};

export default Navbar;
