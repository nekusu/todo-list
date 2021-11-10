class Task {
	#name;
	#description;
	#date;
	#isChecked;

	constructor(name, description, date) {
		this.#name = name;
		this.#description = description;
		this.#date = date;
		this.#isChecked = false;
	}

	get name() { return this.#name; }
	get description() { return this.#description; }
	get date() { return this.#date; }
	get isChecked() { return this.#isChecked; }

	edit(name, description, date) {
		this.#name = name;
		this.#description = description;
		this.#date = date;
	}
	toggleCheck() {
		this.#isChecked = !this.#isChecked;
	}
}

export default Task;
