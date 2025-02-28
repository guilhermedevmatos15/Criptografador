import data from "../utils/data.js";

export default function decodificar(string = '', key = 1) {
	string = String(string).trim().split('');

   const {alphabetLower, alphabetUpper} = data;

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