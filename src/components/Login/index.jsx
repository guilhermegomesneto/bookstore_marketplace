import { useState } from 'react';
import { loginUser } from '../../services/api';
import styles from './Login.module.scss';
import Text from '../Common/Text';
import { toast } from 'react-toastify';

const Login = ({ switchToRegister, onLoginSuccess }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await loginUser(formData);
			localStorage.setItem('token', response.token);
			localStorage.setItem('user', JSON.stringify(response.user));
			onLoginSuccess(response.user);
		} catch (error) {
			console.error(error);
			toast.error('Login failed', {
				position: 'top-center',
				autoClose: 3000,
				closeOnClick: true,
				pauseOnHover: true,
				style: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-text)',
				},
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.loginForm}>
			<div className={styles.loginTextbox}>
				<Text text="Login" fontSize="1.4rem" fontWeight="bold" />
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					placeholder="Enter your username"
					required
					value={formData.username}
					onChange={(e) =>
						setFormData({ ...formData, username: e.target.value })
					}
				/>
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="Enter your password"
					required
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>
			</div>

			<button type="submit">Login</button>

			<div className={styles.switchText}>
				<p>
					New to the Library?{' '}
					<span onClick={switchToRegister}>Register here!</span>
				</p>
			</div>
		</form>
	);
};

export default Login;
