import Logo from '../Common/Logo';
import Title from '../Common/Title';
import {
	AiOutlineShoppingCart,
	AiOutlineUser,
	AiOutlineSearch,
} from 'react-icons/ai';

import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Logo width="3rem" />
				<Title
					text="Great Library Archive"
					fontSize="1.4rem"
					color="var(--color-text)"
				/>
			</div>
			<div className={styles.links}>
				<div className={styles.link}>
					<AiOutlineUser className={styles.icon} />
					<Title
						text="My Account"
						fontSize="1.2rem"
						color="var(--color-text)"
					/>
				</div>
				<div className={styles.link}>
					<AiOutlineShoppingCart className={styles.icon} />
					<Title
						text="My Cart"
						fontSize="1.2rem"
						color="var(--color-text)"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
