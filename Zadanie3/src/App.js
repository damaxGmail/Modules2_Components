import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const ourDigitals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className={styles.container}>
			<div className={styles.screen}>

			</div>
			<div className={styles.buttons}>
				<div className={`${styles.button} ${styles.button__digital}`}>
					<div className={styles.button__digital}>
						CE/C
					</div>
					{ourDigitals.map(num => (
						<div key={num} className={styles.button__digital}>
							{num}
						</div>
					))}
				</div>
				<div className={`${styles.button} ${styles.button__operand}`}>

				</div>
			</div>
		</div>
	);
};
