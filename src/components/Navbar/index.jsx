import Logo from '../Common/Logo';
import Text from '../Common/Text';
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineSearch,
} from 'react-icons/ai';

import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Logo width="3rem" />
				<Text
					text="Great Library of Old"
					fontSize="1.4rem"
					fontWeight="bold"
					color="var(--color-text)"
				/>
			</div>
			<div className={styles.links}>
				<div className={styles.link}>
					<AiOutlineUser className={styles.icon} />
					<Text
						text="My Account"
						fontSize="1.2rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</div>
				<div className={styles.link}>
					<AiOutlineSearch className={styles.icon} />
					<Text
						text="Explore the Archive"
						fontSize="1.2rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</div>
				<div className={styles.link}>
					<AiOutlineShoppingCart className={styles.icon} />
					<Text
						text="My Cart"
						fontSize="1.2rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
