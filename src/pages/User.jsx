import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from './User.module.scss';
import Text from '../components/Common/Text';

const User = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		const userData = localStorage.getItem('user');
		if (token && userData) {
			setUser(JSON.parse(userData));
			setIsAuthenticated(true);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<div className={styles.userPage}>
			{isAuthenticated ? (
				<div className={styles.userInfo}>
					<div className={styles.userPageTitle}>
						<Text
							text="Your Account"
							fontSize="2rem"
							fontWeight="bold"
						/>
						<Text
							text="Check your account information"
							fontSize="1.2rem"
						/>
					</div>
					<div className={styles.userCard}>
						<Text text={`Name: ${user.name}`} fontSize="1.1rem" />
						<Text
							text={`Username: ${user.username}`}
							fontSize="1.1rem"
						/>
						<Text text={`Email: ${user.email}`} fontSize="1.1rem" />
						<button onClick={handleLogout}>Logout</button>
					</div>
				</div>
			) : (
				<div className={styles.formContainer}>
					{isLogin ? (
						<Login
							switchToRegister={() => setIsLogin(false)}
							onLoginSuccess={(userData) => {
								setUser(userData);
								setIsAuthenticated(true);
							}}
						/>
					) : (
						<Register switchToLogin={() => setIsLogin(true)} />
					)}
				</div>
			)}
		</div>
	);
};

export default User;
