import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from './User.module.scss';
import Text from '../components/Common/Text';

const User = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className={styles.userPage}>
			<div className={styles.toggleButtons}>
				<button
					className={
						isLogin ? styles.activeButton : styles.inactiveButton
					}
					onClick={() => setIsLogin(true)}
				>
					<Text text="Login" fontWeight="bold" />
				</button>
				<button
					className={
						!isLogin ? styles.activeButton : styles.inactiveButton
					}
					onClick={() => setIsLogin(false)}
				>
					<Text text="Register" fontWeight="bold" />
				</button>
			</div>

			<div className={styles.formContainer}>
				{isLogin ? <Login /> : <Register />}
			</div>
		</div>
	);
};

export default User;
