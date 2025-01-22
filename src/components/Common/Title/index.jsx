import styles from './Title.module.scss';

const Title = ({ text, fontSize, color }) => {
	return (
		<div>
			<h1
				className={styles.text}
				style={{ color: color, fontSize: fontSize }}
			>
				{text}
			</h1>
		</div>
	);
};

export default Title;
