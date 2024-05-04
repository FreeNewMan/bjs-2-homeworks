"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = 0;
	discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	}
	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let coefficientMonth = percent / 100 / 12;
	let creditBody = amount - contribution;
	return Number(((creditBody * (coefficientMonth + (coefficientMonth / (((1 + coefficientMonth) ** countMonths) - 1)))) * countMonths).toFixed(2));
}