import { useState } from 'react';
import { registerUser } from '../../services/api';
import styles from './Register.module.scss';
import Text from '../Common/Text';
import { toast } from 'react-toastify';

const Register = ({ switchToLogin }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		name: '',
		email: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await registerUser(formData);
			toast.success(response.message, {
				position: 'top-center',
				autoClose: 3000,
				closeOnClick: true,
				pauseOnHover: true,
				style: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-text)',
				},
			});
			switchToLogin();
		} catch (error) {
			console.error(error);
			toast.error('Registration failed', {
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
		<form onSubmit={handleSubmit} className={styles.registerForm}>
			<div className={styles.registerTextbox}>
				<Text text="Register" fontSize="1.4rem" fontWeight="bold" />
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Enter your full name (eg: John Doe)"
					required
					minLength={5}
					maxLength={40}
					value={formData.name}
					onChange={(e) =>
						setFormData({ ...formData, name: e.target.value })
					}
				/>
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="Enter your email address"
					required
					minLength={8}
					maxLength={40}
					value={formData.email}
					onChange={(e) =>
						setFormData({ ...formData, email: e.target.value })
					}
				/>
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					placeholder="Enter a username for your account"
					required
					minLength={3}
					maxLength={20}
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
					placeholder="Enter a password for your account"
					required
					minLength={3}
					maxLength={20}
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>
			</div>

			<button type="submit">Register</button>

			<div className={styles.switchText}>
				<p>
					Already have an account?{' '}
					<span onClick={switchToLogin}>Log in here!</span>
				</p>
			</div>
		</form>
	);
};

export default Register;
