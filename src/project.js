class Project {
	#name;
	#tasks;

	constructor(name) {
		this.#name = name;
		this.#tasks = [];
	}

	get name() { return this.#name; }
	set name(name) { this.#name = name; }

	get tasks() { return this.#tasks; }
	set tasks(tasks) { this.#tasks = tasks; }

	contains(taskName) {
		return this.#tasks.some(task => task.name === taskName);
	}
	getTask(taskName) {
		return this.#tasks.find(task => task.name === taskName);
	}
	addTask(task) {
		if (!this.contains(task.name)) {
			this.#tasks.push(task);
		}
	}
	deleteTask(taskName) {
		this.#tasks = this.#tasks.filter(task => task.name !== taskName);
	}
}

export default Project;
