const helpers = require('./helpers');

describe('helpers module', () => {
	describe('Test suite for sum()', () => {
		it('Should add two number', () => {
			expect(helpers.sum(5, 5)).toEqual(10);
		});

		it('Should be able to add three number', () => {
			expect(helpers.sum(2, 3, 5)).toEqual(10);
		});
	});
});
