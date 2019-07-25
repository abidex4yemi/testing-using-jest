function sum(...args) {
	return args.reduce((total, number) => total + number);
}

module.exports = {
	sum
};
