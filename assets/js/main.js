import codificar from "./modules/codificador.js";
import decodificar from "./modules/decodificador.js";

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
})

$changeUIDecod.forEach((el) => {
	el.addEventListener('click', () => {
		$decodificarEl.classList.add('open');
		$codificarEl.classList.remove('open');
	});
})
