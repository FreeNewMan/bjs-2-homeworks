function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		};
		if (arr[i] < min) {
			min = arr[i]
		};
		sum += arr[i];
	}
	return {
		min: min,
		max: max,
		avg: Number((sum / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let result = 0;
	if (arr.length > 0) {
		result = Math.max(...arr) - Math.min(...arr);
	};
	return result;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			};
		};
	};
	return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let result = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement += 1;
			};
		}
		result = sumEvenElement / countEvenElement;
	}
	return result;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let resultFunc = 0;
	for (let i = 0; i < arrOfArr.length; i++) {
		resultFunc = func(...arrOfArr[i]);
		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc
		};
	};
	return maxWorkerResult;
}