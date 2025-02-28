import data from '../utils/data.js';

export default function codificar(string = '', key = 1) {
	string = String(string).trim().split('');

   const {alphabetLower, alphabetUpper} = data;

	return string.reduce((result, letter) => {
		// Se for um espaço vazio ou um número, retorna ele de uma vez.
		if (letter === ' ' || data.numbers.includes(letter))
			return result + letter;

		// Se a letra for minúscula
		if (alphabetLower.includes(letter)) {
			const indexOnAlph = alphabetLower.indexOf(letter);

			if (indexOnAlph + 3 >= alphabetLower.length)
				return (
					result + alphabetLower[indexOnAlph + key - alphabetLower.length]
				);

			return result + alphabetLower[indexOnAlph + key];
		}

		const indexOnAlph = alphabetUpper.indexOf(letter);

		if (indexOnAlph + key >= alphabetUpper.length)
			return (
				result + alphabetUpper[indexOnAlph + key - alphabetUpper.length]
			);

		return result + alphabetUpper[indexOnAlph + key];
	}, '');
}
