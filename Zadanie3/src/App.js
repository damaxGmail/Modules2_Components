import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Калькулятор</h1>

			</div>
		</div >
	);
};
