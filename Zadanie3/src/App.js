import styles from './app.module.css';
import buttonsData from './buttons.json';
import { useState } from 'react';

export const App = () => {

	return (
		<div className={styles.container}>
			<div className={styles.screen} style={{ top: "37px", left: "37px" }}>

			</div>
			<div className={styles.buttons}>
				{buttonsData.map((button, index) => (
					<div
						key={index}
						className={`${styles.button} ${styles[button.className]}`}
						style={{ top: button.top, left: button.left, height: button.height ? button.height : '37px' }}
					>
						{button.value}
					</div>
				))}
			</div>
		</div>
	);
};
