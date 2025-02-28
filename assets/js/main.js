import codificar from './modules/codificador.js';
import decodificar from './modules/decodificador.js';

const $codificarEl = document.querySelector('.codificador');
const $decodificarEl = document.querySelector('.decodificador');

// Change UI
const $changeUICod = [...document.querySelectorAll('[data-change="cod"]')];
const $changeUIDecod = [...document.querySelectorAll('[data-change="decod"]')];

$changeUICod.forEach((el) => {
	el.addEventListener('click', () => {
		$codificarEl.classList.add('open');
		$decodificarEl.classList.remove('open');
	});
});

$changeUIDecod.forEach((el) => {
	el.addEventListener('click', () => {
		$decodificarEl.classList.add('open');
		$codificarEl.classList.remove('open');
	});
});

// lógica de codificação
const $codForm = $codificarEl.querySelector('form');
const $codInputMessage = $codForm.querySelector('input[type="text"]');
const $codInputKey = $codForm.querySelector('input[type="number"]');
const $codOutput = $codForm.querySelector('output');

$codForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const message = $codInputMessage.value;
	const key = Number.parseInt($codInputKey.value);

	if (message.length < 1 || key === 0 || key > 50) {
		alert('Insira valores válidos.');
		$codOutput.classList.remove('visible');
		return;
	}

	const result = codificar(message, key);

	$codOutput.querySelector('span').innerHTML = result;
	$codOutput.classList.add('visible');
	$codOutput.querySelector('.btn--cop').addEventListener('click', () => {
		navigator.clipboard.writeText(result);
	});
});

// lógica de decodificação
const $decodForm = $decodificarEl.querySelector('form');
const $decodInputMessage = $decodForm.querySelector('input[type="text"]');
const $decodInputKey = $decodForm.querySelector('input[type="number"]');
const $decodOutput = $decodForm.querySelector('output');

$decodForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const message = $decodInputMessage.value;
	const key = Number.parseInt($decodInputKey.value);

	if (message.length < 1 || key === 0 || key > 50) {
		alert('Insira valores válidos.');
		$decodOutput.classList.remove('visible');
		return;
	}

	const result = decodificar(message, key);

	$decodOutput.querySelector('span').innerHTML = result;
	$decodOutput.classList.add('visible');
	$decodOutput.querySelector('.btn--cop').addEventListener('click', () => {
		navigator.clipboard.writeText(result);
	});
});
