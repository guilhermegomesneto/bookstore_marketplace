import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from './User.module.scss';

const User = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className={styles.userPage}>
			{isLogin ? (
				<Login switchToRegister={() => setIsLogin(false)} />
			) : (
				<Register switchToLogin={() => setIsLogin(true)} />
			)}
		</div>
	);
};

export default User;
