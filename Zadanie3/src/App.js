import styles from './app.module.css';
import buttonsData from './buttons.json';
import { useState, useEffect } from 'react';

export const App = () => {

	useEffect(() => {
		document.title = 'Calc of Result School ';
	}, []);

	// для воспроизведения звука по клику на клавиши
	const playSound = (soundFile) => {
		const audio = new Audio(soundFile);
		audio.play().catch((error) => console.error('Ошибка воспроизведения звука:', error));
	};

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [screenValue, setScreenValue] = useState('0');
	const [screenBackgroundColor, setScreenBackgroundColor] = useState('rgba(90, 45, 15, 0.8)');

	const handleButtonClick = (value, buttonClassName) => {
		if (value === '=') {
			handleEnterClick(); // Вызов функции для "="
		} else if (buttonClassName === 'button__reset') {
			handleResetClick(); // Вызов функции для сброса
		} else if (buttonClassName === 'button__operand') {
			handleOperatorClick(value); // Вызов функции для оператора
		} else if (buttonClassName === 'button__digital') {
			handleDigitClick(value); // Вызов функции для цифры
		}

	};


	const handleEnterClick = () => {
		playSound('/button_press_enter.mp3'); // Звук для кнопки "="
		setScreenBackgroundColor('rgba(190, 30, 30, 0.8)');
		if (operand1 && operator && operand2) {
			const result =
				operator === '+' ? Number(operand1) + Number(operand2) : Number(operand1) - Number(operand2);
			setScreenValue(String(result)); // Отображаем результат на экране
			setOperand1(String(result)); // Сохраняем результат как operand1 для дальнейших вычислений
			setOperand2(''); // Очищаем operand2
			setOperator(''); // Очищаем operator
		}
	};


	const handleResetClick = () => {
		playSound('/button_press_single.mp3'); // Звук для кнопки сброса
		setOperand1('');
		setOperator('');
		setOperand2('');
		setScreenValue('0');
		setScreenBackgroundColor('rgba(90, 45, 15, 0.8)');
	};


	const handleOperatorClick = (value) => {
		playSound('/button_press_single.mp3'); // Звук для кнопки оператора
		setOperator(value);
		setScreenValue((prev) => prev + value);
		setScreenBackgroundColor('rgba(90, 45, 15, 0.8)');
	};

	const handleDigitClick = (value) => {
		playSound('/button_press_single.mp3'); // Звук для кнопки цифры

		if (operator) {
			setOperand2((prev) => {
				const newValue = prev + String(value);
				return newValue;
			});
			setScreenValue((prevScreen) => prevScreen + value);
		} else {
			setOperand1((prev) => {
				const newValue = prev + String(value);
				return newValue;
			});
			setScreenValue((prevScreen) => prevScreen === '0' ? value : prevScreen + value); // Обновляем экран с новым значением operand1
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.screen}
				style={{ top: "37px", left: "37px", backgroundColor: screenBackgroundColor }}>
				{screenValue}
			</div>
			<div className={styles.buttons}>
				{buttonsData.map((button, index) => (
					<div
						key={index}
						className={`${styles.button} ${styles[button.className]}`}
						style={{ top: button.top, left: button.left, height: button.height ? button.height : '37px' }}
						onClick={() => handleButtonClick(button.value, button.className)}
					>
						{button.value}
					</div>
				))}
			</div>
		</div>
	);
};
