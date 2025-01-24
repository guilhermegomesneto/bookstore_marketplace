import React from 'react';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.home}>
			<h1>Welcome to the Great Library of Old.</h1>
			<p>Explore our collection of books and find your next read.</p>
		</div>
	);
};

export default Home;
