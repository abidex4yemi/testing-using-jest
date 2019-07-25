function sum(...args) {
	return args.reduce((total, number) => total + number);
}

function makeUser({ name, age }) {
	if (typeof name !== 'string') {
		throw new Error('String required for name');
	}

	if (typeof age !== 'number' || isNaN(age)) {
		throw new Error('Number required for age');
	}

	return {
		fullName: name,
		age
	};
}

module.exports = {
	sum,
	makeUser
};
