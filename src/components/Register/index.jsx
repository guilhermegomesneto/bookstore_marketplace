import { useState } from 'react';
import { registerUser } from '../../services/api';

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
			<button type="submit">Register</button>
		</form>
	);
};

export default Register;
