class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	get state() {
		return this._state;
	}
	set state(nstate) {
		if (nstate > 100) {
			this._state = 100
		} else {
			this._state = nstate;
		}
	}
}


class Magazine extends PrintEditionItem {
	constructor() {
		super();
		this.type = "magazine";
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}

}

class NovelBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "novel";
	}

}

class FantasticBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}

	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		let book = this.findBookBy('name', bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		}
		return book;
	}

}



class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}


	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = []
		}
		this.marks[subject].push(mark);
	}


	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject)) {
			return this.marks[subject].reduce((mark, markN) => mark + markN, 0) / this.marks[subject].length;
		} else {
			return 0;
		}
	}

	getAverage() {
		let sum = 0;
		let countMarks = 0;
		Object.keys(this.marks).forEach((subjectItem) => {
			sum += this.marks[subjectItem].reduce((mark, markN) => mark + markN, 0);
			countMarks += this.marks[subjectItem].length;
		})
		if (countMarks > 0) {
			return sum / countMarks;
		} else {
			return 0;
		}

	}

}