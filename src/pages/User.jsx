import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from './User.module.scss';
import Text from '../components/Common/Text';

const User = () => {
	return (
		<div className={styles.userPage}>
			<div className={styles.loginRegister}>
				<Register />
				<Login />
			</div>
		</div>
	);
};

export default User;
