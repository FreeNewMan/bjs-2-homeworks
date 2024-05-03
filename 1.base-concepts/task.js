"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = 0;
	d = b ** 2 - 4 * a * c;
	if (d == 0) {
		arr.push(-b / (2 * a));
	}
	if (d > 0) {
		arr.push(-b + Math.sqrt(d)) / (2 * a);
		arr.push(-b - Math.sqrt(d)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = countMonths;

	let totalSum = Number(((S * (P + (P / (((1 + P) ** n) - 1)))) * countMonths).toFixed(2));
	return totalSum;

}