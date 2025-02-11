import { useState } from 'react';
import { loginUser } from '../../services/api';

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
		<form onSubmit={handleSubmit}>
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
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
