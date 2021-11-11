class Task {
	constructor(name, description, date) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.isChecked = false;
	}

	edit(name, description, date) {
		this.name = name;
		this.description = description;
		this.date = date;
	}
	toggleCheck() {
		this.isChecked = !this.isChecked;
	}
}

export default Task;
