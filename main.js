const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpper = alphabetLower.map((letter) => letter.toUpperCase());
const numbers = '0123456789'.split('');

function codificar(string = '', key = 1) {
	string = String(string).trim().split('');

	return string.reduce((result, letter) => {
		// Se for um espaço vazio ou um número, retorna ele de uma vez.
		if (letter === ' ' || numbers.includes(letter)) return result + letter;

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
			return result + alphabetUpper[indexOnAlph + key - alphabetUpper.length];

		return result + alphabetUpper[indexOnAlph + key];
	}, '');
}

function decodificar(string = '', key = 1) {
	string = String(string).trim().split('');

	return string.reduce((result, letter) => {
		if (letter === ' ' || numbers.includes(letter)) return result + letter;

		if (alphabetLower.includes(letter)) {
			const indexOnAlph = alphabetLower.indexOf(letter);

			if (indexOnAlph - key < 0)
				return (
					result + alphabetLower[indexOnAlph - key + alphabetLower.length]
				);

			return result + alphabetLower[indexOnAlph - key];
		}

		const indexOnAlph = alphabetUpper.indexOf(letter);

		if (indexOnAlph - key < 0)
			return result + alphabetUpper[indexOnAlph - key + alphabetLower.length];

      return result + alphabetUpper[indexOnAlph - key];
	}, '');
}

const str = 'abc567XYZ';

const strCod = codificar(str, 5);

console.log(decodificar(strCod, 5));
