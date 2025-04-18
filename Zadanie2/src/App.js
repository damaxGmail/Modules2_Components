import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, SetSteps] = useState(data);
	const [activeIndex, SetActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const clickBack = (i) => {
		if (i > 0)
			SetActiveIndex(i - 1);
	}
	const clickForward = (i) => {
		if (i < steps.length - 1)
			SetActiveIndex(i + 1);
		else
			SetActiveIndex(0);
	}

	const clickActiveIndex = (i) => {
		SetActiveIndex(i);
	}

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']} >
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map((elArray, key) => {
							return (
								<li key={key}
									className={`${styles['steps-item']} ${(key === activeIndex) ? ` ${styles.active}` : ` ${styles.done}`}`}
								>
									{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
									<button className={styles['steps-item-button']} onClick={() => clickActiveIndex(key)} >{key + 1}</button>
									{/* При клике на кнопку установка выбранного шага в качестве активного */}
									{steps[key].title}
								</li>
							);
						})}

					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={() => clickBack(activeIndex)}>Назад</button>
						<button className={styles.button} onClick={() => clickForward(activeIndex)}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div >
	);
};
