import { Link } from 'react-router-dom';
import Text from '../Common/Text';
import styles from './Footer.module.scss';
import { AiOutlineBook } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<Link to="/" className={styles.logo}>
					<AiOutlineBook
						className={styles.icon}
						style={{ fontSize: '1.8rem' }}
						color="var(--color-text)"
					/>
					<Text
						text="Great Library of Old"
						fontSize="1.3rem"
						fontWeight="bold"
						color="var(--color-text)"
					/>
				</Link>
			</div>
			<div className={styles.copyright}>
				<Text
					text="© 2025 - Todos os direitos reservados"
					fontSize="0.8rem"
					fontStyle="italic"
					color="var(--color-text)"
				/>
			</div>
			<div className={styles.anchor}>
				<a href="https://www.linkedin.com/in/dev-guilherme-gomes/">
					<Text
						text="Contact the Developer"
						fontSize="1rem"
						color="var(--color-text)"
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
