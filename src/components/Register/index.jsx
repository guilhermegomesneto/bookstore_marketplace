import { useState } from 'react';
import { registerUser } from '../../services/api';
import styles from './Register.module.scss';
import Text from '../Common/Text';

const Register = () => {
	const [formData, setFormData] = useState({ username: '', password: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await registerUser(formData);
			alert(response.message);
		} catch (error) {
			console.error(error);
			alert('Registration failed');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.registerForm}>
			<div className={styles.registerTextbox}>
				<Text
					text="New here? Register now!"
					fontSize="1.4rem"
					fontWeight="bold"
				/>
			</div>
			<input
				type="text"
				placeholder="Username"
				value={formData.username}
				onChange={(e) =>
					setFormData({ ...formData, username: e.target.value })
				}
			/>
			<input
				type="password"
				placeholder="Password"
				value={formData.password}
				onChange={(e) =>
					setFormData({ ...formData, password: e.target.value })
				}
			/>
			<button type="submit">Register</button>
		</form>
	);
};

export default Register;
