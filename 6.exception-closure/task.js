function parseCount(strParam) {
	let parsedValue;
	parsedValue = Number.parseFloat(strParam);
	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

function validateCount(strParam) {
	try {
		return parseCount(strParam);
	} catch (error) {
		return error;
	}

}

class Triangle {
	constructor(sideA, sideB, sideC) {
		if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideA) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

	get area() {
		let perimeter = this.perimeter / 2;
		return Number(Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC)).toFixed(3));
	}
}

function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	} catch (error) {
		let message = "Ошибка! Треугольник не существует";
		const obj = Object.freeze({
			error: error,
			area: message,
			perimeter: message
		});
		return obj;
	}
}