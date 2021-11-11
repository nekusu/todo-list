class Task {
	static #lastId = localStorage.getItem('lastTaskId') || 0;

	constructor(name, project, description, date) {
		this.name = name;
		this.project = project;
		this.description = description;
		this.date = date;
		this.isChecked = false;
		this.id = Task.#lastId++;
		localStorage.setItem('lastTaskId', Task.#lastId);
	}

	edit(name, description, date) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.save();
	}
	toggleCheck() {
		this.isChecked = !this.isChecked;
		console.log(this.isChecked)
		this.save();
	}
	async save() {
		const { default: todoList } = await import('./todoList.js');
		todoList.save();
	}
}

export default Task;
