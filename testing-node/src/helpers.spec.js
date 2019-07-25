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

	describe('Test suit for makeUser()', () => {
		it('Should return an object', () => {
			expect(helpers.makeUser({ name: 'Yemi', age: 20 })).toEqual({ fullName: 'Yemi', age: 20 });
		});

		it('Should throw an error if name is not a string', () => {
			expect(() => helpers.makeUser({ name: 5, age: 1 })).toThrow();
		});

		it('Should throw an error if age is not a number', () => {
			expect(() => helpers.makeUser({ name: 'Yemi', age: '' })).toThrow();
			expect(() => helpers.makeUser({ name: 'Yemi', age: NaN })).toThrow();
		});
	});
});
