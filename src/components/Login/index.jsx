import { useState } from 'react';
import { loginUser } from '../../services/api';
import styles from './Login.module.scss';
import Text from '../Common/Text';

const Login = () => {
	const [formData, setFormData] = useState({ username: '', password: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await loginUser(formData);
			localStorage.setItem('token', response.token);
			alert('Login successful');
		} catch (error) {
			console.error(error);
			alert('Login failed');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.loginForm}>
			<div className={styles.loginTextbox}>
				<Text
					text="Already have an account? Log in here!"
					fontSize="1.4rem"
					fontWeight="bold"
				/>
			</div>
			<input
				type="text"
				placeholder="Username"
				required
				value={formData.username}
				onChange={(e) =>
					setFormData({ ...formData, username: e.target.value })
				}
			/>
			<input
				type="password"
				placeholder="Password"
				required
				value={formData.password}
				onChange={(e) =>
					setFormData({ ...formData, password: e.target.value })
				}
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
