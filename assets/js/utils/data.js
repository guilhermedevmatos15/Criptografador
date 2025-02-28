const data = {
	alphabetLower: 'abcdefghijklmnopqrstuvwxyz'.split(''),

	get alphabetUpper() {
		return this.alphabetLower.map((letter) => letter.toUpperCase());
	},

   numbers: '0123456789'.split(''),
};

export default data;
